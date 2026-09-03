// One-time (or repeatable) seed of the mock CRM data into Firestore, so a
// freshly connected Firebase project has something to look at instead of
// an empty dashboard.
//
// Requires a service account key:
//   Firebase console → Project settings → Service accounts → Generate new private key
//   GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json npm run seed
import { initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { activity } from '../src/data/activity'
import { appointments } from '../src/data/appointments'
import { customers } from '../src/data/customers'
import { leads } from '../src/data/leads'
import { notes } from '../src/data/notes'
import { tasks } from '../src/data/tasks'

if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  console.error(
    'Set GOOGLE_APPLICATION_CREDENTIALS to a Firebase service account key JSON file before running this script.',
  )
  process.exit(1)
}

initializeApp()
const db = getFirestore()

async function seedCollection(name: string, docs: Array<{ id: string } & Record<string, unknown>>) {
  const batch = db.batch()
  for (const { id, ...rest } of docs) {
    batch.set(db.collection(name).doc(id), rest)
  }
  await batch.commit()
  console.log(`Seeded ${docs.length} doc(s) into "${name}"`)
}

await seedCollection('leads', leads)
await seedCollection('customers', customers)
await seedCollection('appointments', appointments)
await seedCollection('tasks', tasks)
await seedCollection('notes', notes)
await seedCollection('activity', activity)

console.log('Done.')
process.exit(0)
