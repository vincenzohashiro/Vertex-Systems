import { onDocumentCreated, onDocumentUpdated } from 'firebase-functions/v2/firestore'
import { logger } from 'firebase-functions/v2'
import { MAKE_OUTBOUND_WEBHOOK_URL } from './env.js'

// Outbound: fires a webhook into a Make.com scenario whenever a notable CRM
// event happens, so Make can fan it out to email/Slack/SMS/whatever the
// scenario is wired to.
async function notifyMake(event: string, data: unknown) {
  const url = process.env.MAKE_OUTBOUND_WEBHOOK_URL
  if (!url) {
    logger.info(`[make webhook] skipped, no URL configured (event=${event})`)
    return
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event, data, timestamp: new Date().toISOString() }),
    })
    if (!response.ok) {
      logger.error(`[make webhook] non-2xx response for event=${event}: ${response.status}`)
    }
  } catch (err) {
    logger.error(`[make webhook] request failed for event=${event}`, err)
  }
}

export const onLeadCreated = onDocumentCreated(
  { document: 'leads/{leadId}', secrets: [MAKE_OUTBOUND_WEBHOOK_URL] },
  async (event) => {
    const lead = event.data?.data()
    if (!lead) return
    await notifyMake('lead.created', { id: event.params.leadId, ...lead })
  },
)

export const onCustomerHealthChanged = onDocumentUpdated(
  { document: 'customers/{customerId}', secrets: [MAKE_OUTBOUND_WEBHOOK_URL] },
  async (event) => {
    const before = event.data?.before.data()
    const after = event.data?.after.data()
    if (!before || !after || before.health === after.health) return
    if (after.health !== 'At Risk' && after.health !== 'Churned') return

    await notifyMake('customer.health_changed', {
      id: event.params.customerId,
      name: after.name,
      company: after.company,
      from: before.health,
      to: after.health,
    })
  },
)
