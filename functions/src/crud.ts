import { Router } from 'express'
import { db } from './admin.js'

// Generic REST CRUD over one Firestore collection: GET /, GET /:id, POST /, PATCH /:id, DELETE /:id
export function crudRouter(collection: string) {
  const router = Router()

  router.get('/', async (_req, res) => {
    const snap = await db.collection(collection).orderBy('createdAt', 'desc').get()
    res.json(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
  })

  router.get('/:id', async (req, res) => {
    const doc = await db.collection(collection).doc(req.params.id).get()
    if (!doc.exists) {
      res.status(404).json({ error: 'Not found' })
      return
    }
    res.json({ id: doc.id, ...doc.data() })
  })

  router.post('/', async (req, res) => {
    const ref = await db.collection(collection).add({
      ...req.body,
      createdAt: new Date().toISOString(),
    })
    const doc = await ref.get()
    res.status(201).json({ id: doc.id, ...doc.data() })
  })

  router.patch('/:id', async (req, res) => {
    const ref = db.collection(collection).doc(req.params.id)
    const existing = await ref.get()
    if (!existing.exists) {
      res.status(404).json({ error: 'Not found' })
      return
    }
    await ref.update({ ...req.body, updatedAt: new Date().toISOString() })
    const doc = await ref.get()
    res.json({ id: doc.id, ...doc.data() })
  })

  router.delete('/:id', async (req, res) => {
    await db.collection(collection).doc(req.params.id).delete()
    res.status(204).send()
  })

  return router
}
