# GraspIQ LMS MVP Plan

This README captures the extracted MVP plan and product description for a live-learning LMS with role-based access.

## 1) Roles and Access Rules (MVP)

### Admin
- Create and disable Teacher accounts (only Admin can do this)
- Manage courses, schedules, users, and permissions
- View attendance and basic analytics

### Teacher
- Create courses and lessons (live sessions)
- Schedule live classes
- Post materials and announcements
- Mark attendance (optional in MVP)

### Student
- Anyone can self-register
- Join courses (open or invite-only)
- Join live sessions
- View recordings/materials (optional)

## 2) Auth Setup: Enforce “Only Admin Can Create Teachers”

Use **NextAuth** (or Clerk) with a `role` column in the database.

### Signup Flow
- Public `/sign-up` creates users with `role = STUDENT` by default.

### Teacher Creation Flow
- Admin-only page: `/admin/teachers/new`
- Admin enters teacher email/name
- System creates user record with `role = TEACHER`
- Send invite email and password set link (or temporary password)

This keeps the rule strict: teachers cannot self-sign up as teachers.

## 3) MVP Feature List (Optimized for Live Learning)

### Must-have
- Auth + roles (Admin / Teacher / Student)
- Courses
- Live session scheduling (date/time + join method)
- Student enrollment (join course)
- Live join page (one click)
- Basic attendance (present/absent is enough)

### Nice-to-have (Post-MVP)
- Recordings + replay
- Quizzes/assignments
- Payments (if needed later)
- Calendar sync + reminders (email/WhatsApp)

## 4) Database Design (Simple and MVP-ready)

Recommended stack: **PostgreSQL + Prisma**.

### `User`
- `id`
- `name`
- `email`
- `role` (`ADMIN | TEACHER | STUDENT`)
- `createdAt`

### `Course`
- `id`
- `title`
- `description`
- `teacherId` (FK to `User`)
- `status`

### `Enrollment`
- `id`
- `courseId`
- `studentId`
- `createdAt`

### `LiveSession`
- `id`
- `courseId`
- `title`
- `startsAt`
- `endsAt`
- `providerType` (`IN_APP | EXTERNAL_LINK`)
- `joinUrl` (nullable)
- `meetingId` / `providerMetadata` (nullable JSON)
- `createdByTeacherId`

### `Attendance`
- `id`
- `sessionId`
- `studentId`
- `status`
- `joinedAt`

## 5) Live Conferencing Options

### Path A — Fastest MVP: External Platform Button
Store and use a join URL for Zoom / Google Meet / Microsoft Teams.

- Students click **Join Live Class** and open provider app/browser.
- Pros: fastest and cheapest to launch, minimal engineering.
- Cons: not fully in-app, limited custom analytics.

### Path B — In-app Conferencing (Embedded)
Embed video directly inside the LMS using a video SDK.

Options:
1. **Daily Video SDK** (fast integration, dev-friendly)
2. **LiveKit** (high control and scalability, more engineering)
3. **Zoom Meeting SDK** (embedded Zoom with JWT/signature flow)
4. **Jitsi self-host** (open-source, but requires infra/reliability setup)

## 6) Recommended Approach

Start with **Path A (external links)** for MVP, then optionally move to Path B.

### Why
- Faster shipping
- Lower complexity
- Avoids early-stage video infrastructure overhead

### Upgrade Path
- MVP: external links + scheduling + attendance
- V2: add Daily or LiveKit for in-app classes

## 7) Join Live Button UX

On each session page:
- If `providerType = EXTERNAL_LINK` and `joinUrl` exists → show **Join Live Class** button.
- If `providerType = IN_APP` → render embedded room UI.

Recommended additions:
- **Add to Calendar** (`.ics`)
- **Copy Link**
- **Countdown timer** (“Starts in X minutes”)

## 8) Step-by-step Build Order

1. Next.js + DB + Prisma
2. Auth + roles + protected routes
3. Admin panel: create teacher accounts
4. Teacher panel: create courses + schedule sessions
5. Student flow: register → enroll → session list
6. Join button logic (external link MVP)
7. Attendance (simple)
8. Deployment (Vercel + managed Postgres)

## 9) Suggested Course Categories (Teacher-facing)

- Orientation / How Classes Work
- Weekly Live Classes
- Revision Sessions
- Past Paper Discussions
- Assignments & Feedback
- Recorded Sessions (optional)

Inside **Weekly Live Classes**, each lesson is represented as a `LiveSession`.

## Open Product Decision

Decide expected class size early:
- **10–30 students per session**, or
- **100+ students per session**

This impacts hosting/provider choice, reliability setup, and whether breakout rooms are needed.
