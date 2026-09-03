import type { NextFunction, Request, Response } from 'express'
import { auth } from './admin.js'

// Accepts either:
//   x-api-key: <REST_API_KEY>                for external/service-to-service callers (Make.com, curl, etc.)
//   Authorization: Bearer <Firebase ID token> for the CRM frontend (signed-in user)
export async function requireCaller(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.header('x-api-key')
  if (apiKey && apiKey === process.env.REST_API_KEY) {
    next()
    return
  }

  const bearer = req.header('authorization')?.match(/^Bearer (.+)$/)
  if (bearer) {
    try {
      await auth.verifyIdToken(bearer[1])
      next()
      return
    } catch {
      // falls through to 401 below
    }
  }

  res.status(401).json({ error: 'Unauthorized' })
}
