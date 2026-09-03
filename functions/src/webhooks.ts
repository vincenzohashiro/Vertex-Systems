import cors from 'cors'
import express from 'express'
import { db } from './admin.js'

export const webhooksApp = express()
webhooksApp.use(cors({ origin: true }))
webhooksApp.use(express.json())

// Inbound: an external source (a website form, Typeform, Calendly, a Make.com
// scenario, etc.) posts a new lead here. Protected by a shared secret header
// instead of Firebase Auth, since the caller isn't a signed-in user.
//
//   POST /webhooks/lead-intake
//   Headers: x-webhook-secret: <INBOUND_WEBHOOK_SECRET>
//   Body: { name, email, company?, phone?, source?, value? }
webhooksApp.post('/webhooks/lead-intake', async (req, res) => {
  const secret = req.header('x-webhook-secret')
  if (!secret || secret !== process.env.INBOUND_WEBHOOK_SECRET) {
    res.status(401).json({ error: 'Invalid webhook secret' })
    return
  }

  const { name, email, company, phone, source, value } = req.body ?? {}
  if (typeof name !== 'string' || typeof email !== 'string' || !name || !email) {
    res.status(400).json({ error: 'name and email are required' })
    return
  }

  const leadRef = await db.collection('leads').add({
    name,
    email,
    company: typeof company === 'string' ? company : '',
    phone: typeof phone === 'string' ? phone : '',
    source: typeof source === 'string' ? source : 'Webhook',
    value: typeof value === 'number' ? value : 0,
    status: 'New',
    owner: 'Unassigned',
    createdAt: new Date().toISOString(),
  })

  await db.collection('activity').add({
    type: 'lead',
    message: `New lead captured via webhook: ${name}${company ? ` (${company})` : ''}`,
    actor: 'Webhook',
    timestamp: new Date().toISOString(),
  })

  res.status(201).json({ id: leadRef.id, status: 'created' })
})
