import { defineSecret } from 'firebase-functions/params'

// Set these before deploying:
//   firebase functions:secrets:set REST_API_KEY
//   firebase functions:secrets:set INBOUND_WEBHOOK_SECRET
//   firebase functions:secrets:set MAKE_OUTBOUND_WEBHOOK_URL
// For the local emulator, put the same names/values in functions/.secret.local

export const REST_API_KEY = defineSecret('REST_API_KEY')
export const INBOUND_WEBHOOK_SECRET = defineSecret('INBOUND_WEBHOOK_SECRET')
export const MAKE_OUTBOUND_WEBHOOK_URL = defineSecret('MAKE_OUTBOUND_WEBHOOK_URL')
