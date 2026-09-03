import cors from 'cors'
import express from 'express'
import { db } from './admin.js'
import { requireCaller } from './auth-middleware.js'
import { crudRouter } from './crud.js'

export const restApi = express()
restApi.use(cors({ origin: true }))
restApi.use(express.json())
restApi.use(requireCaller)

restApi.use('/api/leads', crudRouter('leads'))
restApi.use('/api/customers', crudRouter('customers'))
restApi.use('/api/appointments', crudRouter('appointments'))
restApi.use('/api/tasks', crudRouter('tasks'))
restApi.use('/api/notes', crudRouter('notes'))

// Activity is an append-only audit log — read-only via the REST API.
// Entries are written by the frontend and by webhook/trigger handlers.
restApi.get('/api/activity', async (_req, res) => {
  const snap = await db.collection('activity').orderBy('timestamp', 'desc').limit(100).get()
  res.json(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
})
