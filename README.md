# Vertex Systems

The Vertex Systems company website: a marketing site for a small business-systems/automation/software-development agency, with a working CRM demo and three system-demo previews built in.

```
/                     marketing site (hero, what we build, selected work,
                      system demonstrations, how we work, about, contact)
/systems/crm/*        CRM demo — Dashboard, Leads, Customers, Appointments,
                      Tasks, Notes, Activity, Reports (auth-gated when a
                      Firebase project is connected, open in demo mode)
/systems/booking      Booking Platform — preview page
/systems/operations   Operations Platform — preview page
/systems/automation   Automation System — preview page
```

**Stack:** React + TypeScript + Vite + Tailwind (frontend) · Firebase Cloud Functions / Node.js (backend, CRM only) · Firestore (database) · Firebase Auth (CRM login) · REST API + inbound/outbound webhooks · Make.com (automation).

## Status: CRM backend scaffolded, not yet connected

The marketing site (`/`) and the three system-demo preview pages are static — no backend involved. The CRM demo's backend (Firebase project, Cloud Functions, Make.com scenarios) hasn't been created yet — this repo has all the code for it, wired to placeholders. Right now:

- `npm run dev` runs the CRM against **local mock data** (the "Demo data" badge in its top bar confirms this) — no setup required.
- The moment you fill in `.env.local` with a real Firebase project's config, the CRM switches to **live Firestore data** automatically (badge flips to "Live") — no code changes needed.

## Architecture

```
React app (Vite) ──Firestore SDK (reads + writes, live)──▶ Firestore
       │                                                       ▲
       │ Firebase Auth (sign-in)                                │ Admin SDK
       ▼                                                       │
  Firebase Auth                                        Cloud Functions (Node.js)
                                                          ├─ /api/*        (REST API — CRUD)
                                                          ├─ /webhooks/*   (inbound webhook)
                                                          └─ Firestore triggers (outbound webhook)
                                                                   │
                                                                   ▼
                                                              Make.com scenario(s)
```

- **Frontend ↔ Firestore directly** for everything the signed-in user does in the UI (real-time updates via `onSnapshot`).
- **REST API** (`/api/leads`, `/api/customers`, etc.) is a separate surface for external tools/integrations that aren't a signed-in browser session — authenticated via an API key instead of a Firebase session.
- **Inbound webhook** (`/webhooks/lead-intake`) lets an outside system (a web form, Calendly, a Make.com scenario) create a lead without touching Firestore or the REST API directly.
- **Outbound webhooks** are Firestore triggers: when a lead is created, or a customer's health flips to "At Risk"/"Churned", a Cloud Function POSTs the event to a Make.com webhook URL, which can then fan it out to email/Slack/SMS/whatever the scenario does.

## 1. Run the demo as-is (no setup)

```bash
npm install
npm run dev
```

Open the printed local URL — the CRM works fully on mock data.

## 2. Connect a real Firebase backend

1. **Create a project** at [console.firebase.google.com](https://console.firebase.google.com) (a project on the free Spark plan works for Firestore/Auth/Hosting; Cloud Functions requires the pay-as-you-go Blaze plan, but has a generous free tier).
2. **Enable products**: Firestore Database, Authentication (Email/Password provider), Hosting, Functions.
3. **Add a web app** in Project settings → Your apps, copy the config values into `.env.local` (copy `.env.example` first):
   ```bash
   cp .env.example .env.local
   ```
4. **Create a login user**: Authentication → Users → Add user (email/password) — this is who signs into the CRM.
5. **Update `.firebaserc`** with your project ID in place of `REPLACE_WITH_YOUR_FIREBASE_PROJECT_ID`.
6. **Log in and deploy Firestore rules**:
   ```bash
   npx firebase login
   npx firebase deploy --only firestore:rules
   ```
7. **Seed demo data** into Firestore (optional but recommended so the connected app isn't empty):
   ```bash
   # Project settings → Service accounts → Generate new private key
   GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json npm run seed
   ```
8. **Restart `npm run dev`** — the top bar should now say "Live" and prompt you to sign in.

## 3. Backend: REST API + webhooks (Cloud Functions)

Set the three secrets Functions needs before deploying:

```bash
npx firebase functions:secrets:set REST_API_KEY
npx firebase functions:secrets:set INBOUND_WEBHOOK_SECRET
npx firebase functions:secrets:set MAKE_OUTBOUND_WEBHOOK_URL
```

For local emulation instead, copy `functions/.secret.local.example` to `functions/.secret.local` and fill in dev values.

Deploy:

```bash
npm --prefix functions run build
npx firebase deploy --only functions,hosting,firestore
```

### REST API

Base path `/api` (via Hosting rewrite, or directly at the Cloud Function URL). Auth: either header works.

```
x-api-key: <REST_API_KEY>
Authorization: Bearer <Firebase ID token>
```

| Method | Path                | Description          |
| ------ | ------------------- | --------------------- |
| GET    | `/api/leads`         | List leads             |
| GET    | `/api/leads/:id`     | Get one lead            |
| POST   | `/api/leads`         | Create a lead            |
| PATCH  | `/api/leads/:id`     | Update a lead              |
| DELETE | `/api/leads/:id`     | Delete a lead                |
| GET    | `/api/activity`      | Read-only activity log (last 100) |

Same CRUD shape exists for `/api/customers`, `/api/appointments`, `/api/tasks`, `/api/notes`.

### Inbound webhook — external lead capture

```
POST /webhooks/lead-intake
Headers: x-webhook-secret: <INBOUND_WEBHOOK_SECRET>
Body: { "name": "...", "email": "...", "company"?: "...", "phone"?: "...", "source"?: "...", "value"?: 1234 }
```

Creates a `New` lead and an activity log entry. Point a Make.com scenario's HTTP module (or any form/CRM/Calendly webhook) at this URL.

### Outbound webhooks — CRM events → Make.com

Cloud Functions triggers POST to `MAKE_OUTBOUND_WEBHOOK_URL` as:

```json
{ "event": "lead.created", "data": { "id": "...", "name": "...", "...": "..." }, "timestamp": "..." }
{ "event": "customer.health_changed", "data": { "id": "...", "from": "Good", "to": "At Risk", "...": "..." }, "timestamp": "..." }
```

## 4. Make.com scenarios

Two scenarios demonstrate both directions:

**Inbound (lead capture):** Trigger = whatever source you want (a form tool's "New submission", Calendly "New booking", etc.) → Action = HTTP "Make a request" → `POST https://<your-region>-<project-id>.cloudfunctions.net/webhooks/lead-intake` (or your Hosting domain + `/webhooks/lead-intake`) with the `x-webhook-secret` header and a JSON body mapped from the trigger's fields.

**Outbound (notifications):** Trigger = "Custom webhook" (Make gives you a URL — that's your `MAKE_OUTBOUND_WEBHOOK_URL`) → Action = whatever you want notified (Slack message, email, SMS) using the `event`/`data` fields from the payload above.

## Local development with emulators

```bash
npm run emulators
```

Runs Auth, Firestore, and Functions emulators together (see `firebase.json`). Point the frontend at them by wiring the Firebase SDK to `connectFirestoreEmulator`/`connectAuthEmulator` if you want fully offline development — not wired up by default since the mock-data fallback already covers that use case.

## Project layout

```
src/
  data/
    marketing.ts     static content for the marketing site (services, work, demos, process, team)
    *.ts             CRM mock data + shared TypeScript types (used as the demo-mode fallback)
  lib/
    firebase.ts              Firebase client SDK init
    AuthContext.tsx           sign-in state, gated off when unconfigured
    firestoreCollections.ts   live Firestore hooks + mock-data fallback, per collection
  components/
    marketing/       marketing site nav/footer/layout + one component per homepage section
    ui.tsx            shared Card/Badge/StatCard primitives, used by both the marketing site and the CRM
    Sidebar.tsx, Layout.tsx, Topbar.tsx, ProtectedRoute.tsx   CRM app shell
  pages/
    marketing/Home.tsx         composes the homepage sections
    systems/                   3 system-demo preview pages (Booking/Operations/Automation),
                                built from components/marketing/SystemStubPage.tsx
    Dashboard.tsx, Leads.tsx, ...   CRM pages (mounted under /systems/crm), plus Login.tsx
functions/
  src/
    admin.ts          Firebase Admin SDK init
    rest-api.ts        Express REST API (/api/*)
    webhooks.ts        inbound webhook handler (/webhooks/*)
    triggers.ts         outbound Firestore triggers → Make.com
    crud.ts             generic CRUD router shared by every REST resource
scripts/
  seed.ts            pushes the mock data into Firestore via the Admin SDK
```
