import { onRequest } from 'firebase-functions/v2/https'
import { INBOUND_WEBHOOK_SECRET, REST_API_KEY } from './env.js'
import { restApi } from './rest-api.js'
import { webhooksApp } from './webhooks.js'

export const api = onRequest({ secrets: [REST_API_KEY] }, restApi)
export const webhooks = onRequest({ secrets: [INBOUND_WEBHOOK_SECRET] }, webhooksApp)

export { onCustomerHealthChanged, onLeadCreated } from './triggers.js'
