# RSVP Live Classes — Design Spec

**Project:** Entri Elevate  
**Owner:** Priyanka  
**Last updated:** May 2026  
**Design system:** EntriVerse Beta — Inter font, Entri Blue `#0061b5`, Entri Green `#00805c`, primary text `#212121`, subtext `#616161`, surface `#f6f6f6`, borders `#f0f0f0`, radii 8px/16px, spacing xs–3xl  
**Figma files:** Skilling Elevate Screens (`lFODogr9vbXrXE3uNTrCk0`), EntriVerse Design System (`KjZWlCkNvEKuOnfPMXxqS9`)

---

## 1. What this is

This mechanism tracks attendee volume and identifies learner interest levels for upcoming live sessions.

The RSVP cycle initiates when a **Live Class Instance (LCI)** is associated with a specific **Live Class Template (LCT)**. This trigger opens the waitlist phase, allowing the system to aggregate demand against a fixed seat capacity. The UI communicates remaining availability to incentivise user enrollment in the session queue.

If demand doesn't meet the threshold, the live gets cancelled, and users can access the canonical recording.

**Target users:** Tier 2/3 learners in India, enrolled in self-paced Elevate courses.

---

## 2. Core concepts

| Term | Definition |
|------|-----------|
| **LCT (Live Class Template)** | The persistent topic-level entity. Each LCT has a canonical recording and prerequisites. Exists regardless of whether a live session is scheduled. |
| **LCI (Live Class Instance)** | A specific scheduled session mapped to an LCT. When an LCI is created and mapped, the waitlist opens. After the live session ends, the LCI reverts to LCT state. |
| **W-max** | The maximum number of seats for a live class instance (e.g. 30 total, 15 shown as available). |
| **Canonical recording** | The official recording hard-coded for each LCT. Users can access it at any time — even when no waitlist is open — to learn and move forward with the course. |
| **Prerequisites** | Lessons the user should complete before attending the live class. Shown in the bottom sheet alongside the canonical recording. |

---

## 3. RSVP states (per topic)

An LCT can be in one of the following states:

### State 1: No LCI scheduled (waitlist not open)
- User sees the LCT with canonical recording and prerequisites available
- CTA: "View recorded session"
- User can learn from recording and prerequisites at any time

### State 2: LCI scheduled, collecting waitlist
- An LCI has been mapped to the LCT — waitlist opens
- UI shows: date, time, and seat availability (e.g. "9 of 15 signed up")
- Progress bar shows queue fill visually
- CTA: "Join the waitlist"
- User taps → bottom sheet opens with details → taps "Join the waitlist" CTA → bottom sheet closes, snackbar confirms
- User can leave the waitlist by tapping the card inside the bottom sheet

### State 3: Joined waitlist, learning prerequisites
- User has joined the waitlist
- CTA changes to: "3 more lessons to learn" (count decreases as user progresses)
- Bottom sheet shows canonical recording and remaining prerequisites
- Shows what % of prerequisites the user has completed and what % of the waitlist has completed theirs

### State 4: Joined waitlist, prerequisites complete
- User has completed all prerequisites
- CTA: "View recorded session"
- Prerequisites disappear from the bottom sheet

### State 5: Seats full
- Waitlist has reached W-max
- CTA: "View recorded session"
- User can access canonical recording and prerequisites but cannot join

### State 6: Post-live
- Live session has ended
- If the user attended: they get access to that session's recording + canonical recording
- If the user didn't attend: they only have access to the canonical recording
- Thumbnail changes back to LCT, shows "waitlist not open"
- Stays in this state until a new LCI is scheduled for the same LCT, at which point it shows "Upcoming" tag and "Join the waitlist" reappears

---

## 4. User flows

### Flow A: RSVP happy path
```
1. User opens Course Home → all weeks visible, no content gates
2. Sees "Join the waitlist" on a live class (LCI is scheduled)
   — visible in the top carousel card AND inline in the content list
3. Taps → bottom sheet opens with date, time, title, canonical recording, prerequisites
4. Taps "Join the waitlist" CTA → bottom sheet closes
5. Snackbar confirms: "You have been added to the waitlist for the live class."
6. CTA changes to "3 more lessons to learn"
7. User completes prerequisites → count decreases → eventually shows "View recorded session"
8. User receives 24hr reminder (push notification)
9. User receives 1hr and 15min reminders (push notification)
10. User attends live session → gets attendance
11. Post-live: thumbnail reverts to LCT, "waitlist not open"
12. User can access canonical recording + the live session recording they attended
```

### Flow B: Waitlist → live cancelled
```
1. User joins waitlist for a topic
2. 7 days pass, waitlist demand is low
3. Live class cancelled
4. User gets cancellation notification
5. LCI reverts to LCT state, "waitlist not open"
6. User can still access canonical recording and prerequisites
```

### Flow C: Browse and learn without joining waitlist
```
1. User opens Course Home
2. Sees "Join the waitlist" on a live class
3. Taps → bottom sheet opens
4. Decides not to join, but watches the canonical recording and learns prerequisites
5. Closes bottom sheet
```

### Flow D: Seats full
```
1. User sees "View recorded session" (seats full)
2. Taps → bottom sheet opens
3. Watches canonical recording and prerequisites
4. Cannot join waitlist
```

---

## 5. Screen: Course Home

The course home is the single surface. All RSVP interactions happen via a bottom sheet that overlays this screen.

### Layout structure
```
┌─────────────────────────────────┐
│  Course header / hero banner    │
├─────────────────────────────────┤
│  Live class carousel            │
│  ┌────────────────────┐ ←swipe  │  ← upcoming LCIs with "Join the waitlist"
│  │  [LCT name]        │         │
│  │  Live Class • time  │        │
│  │  Join the waitlist  │        │
│  └────────────────────┘         │
│  • • •  (pagination dots)       │
├─────────────────────────────────┤
│  Tabs: Content │ Course Info    │
├─────────────────────────────────┤
│  Module dropdown: [Module 1 ▾]  │
├─────────────────────────────────┤
│  Week chips: W1  W2  W3  W4    │
├─────────────────────────────────┤
│  Content type filters:          │
│  Videos │ Recorded Live │ Assignment │ ...  │
├─────────────────────────────────┤
│  § Content list (within week)   │
│  ┌──────────────────────────┐   │
│  │ 🎥 Course Introduction   │   │
│  │    Video • 09:16 mins    │   │
│  ├──────────────────────────┤   │
│  │ 📝 HTML Tags             │   │
│  │    ✅ Completed           │   │
│  ├──────────────────────────┤   │
│  │ 🔴 Introduction to HTML  │   │
│  │    Live Class • 10 PM    │   │
│  │    Join the waitlist     │   │  ← green CTA, taps open bottom sheet
│  ├──────────────────────────┤   │
│  │ 🎥 Intro to HTML tags    │   │
│  │    Waitlist not open     │   │
│  │    View recorded session │   │  ← green CTA, taps open bottom sheet
│  └──────────────────────────┘   │
└─────────────────────────────────┘
```

### Top carousel
- Shows upcoming live classes (LCIs) with "Join the waitlist" CTA
- Swipeable, with pagination dots
- Entry point into the bottom sheet

### Content list
- Lives alongside videos, quizzes, PDFs, assignments within each week
- Live class items show inline CTAs in `#00805c` (Entri Green)
- Tapping any live class item opens the bottom sheet

### Inline CTA states (displayed in `#00805c`)

| State | CTA text |
|-------|----------|
| Upcoming live class (LCI scheduled) | Join waitlist |
| LCT only / waitlist not open / seats full | View recorded session |
| Joined waitlist, prerequisites remaining | View 3 more lessons |
| Joined waitlist, prerequisites complete | View recorded session |

### "Start here" tooltip
- One-time tooltip on first visit
- Explains how lessons, assignments, and live classes work
- Dismissible with "Got it"

---

## 6. Bottom sheet (RSVP interaction surface)

All RSVP interactions happen inside this bottom sheet, which overlays the Course Home.

### Bottom sheet contents
- Live class title
- Date and time (when LCI is scheduled)
- Seat availability / waitlist progress
- Canonical recording (always accessible)
- Prerequisites list (with completion status)
- "Join the waitlist" CTA (when applicable)
- Option to leave the waitlist (when already joined)

### When it opens
- User taps a live class item in the content list
- User taps a carousel card at the top

---

## 7. Notifications

| Trigger | Timing | Message intent |
|---------|--------|---------------|
| Pre-session reminder | T-24 hours | "Your live class on [topic] is tomorrow at [time]" |
| Pre-session reminder | T-1 hour | "Your live class starts in 1 hour" |
| Pre-session reminder | T-15 minutes | "Your live class starts in 15 minutes" |
| Live cancelled (low demand) | After 7-day window | "The live class for [topic] has been cancelled" |

---

## 8. Snackbar messages

| Trigger | Message |
|---------|---------|
| Joined waitlist | "You have been added to the waitlist for the live class." |
| Left waitlist (undo) | "You have opted out of the live class waitlist." |
| Rejoined waitlist | "You have rejoined the waitlist." |

---

## 9. Confirmed design decisions

These are locked and should not be revisited:

1. **LCT/LCI model** — Live classes split into templates (persistent) and instances (scheduled). Waitlist opens only when an LCI is mapped to an LCT.
2. **Single RSVP, no reconfirmation** — user joins waitlist once, gets reminded. No "are you still coming?" step.
3. **Reminders at T-24h, T-1h, and T-15min.**
4. **No Day 1 content gates** — all content unlocked from enrollment. Weeks visible for structure only.
5. **Course Home is the single screen** — no separate Live Classes screen. All RSVP interactions happen via bottom sheet overlay.
6. **Bottom sheet as RSVP interaction surface** — card tap opens bottom sheet with date, time, canonical recording, prerequisites, and join CTA.
7. **Top carousel** for upcoming live classes with pagination dots.
8. **Content list** — live classes sit inline alongside videos, quizzes, PDFs, assignments within each week.
9. **Module dropdown + week chips + content type filters** for navigation within the course.
10. **"Start here" tooltip** for educating first-time users (shown once, dismissible).
11. **Canonical recording** — one official recording per LCT, hard-coded, accessible at all times.
12. **Prerequisites flow** — after joining waitlist, CTA changes to show remaining prerequisite count, then reverts to "View recorded session" on completion.
13. **Post-live revert** — after a session ends, LCI reverts to LCT state ("waitlist not open") until a new LCI is scheduled.
14. **No cap on simultaneous RSVPs** — users can join multiple waitlists. If two live classes overlap, the quick access bar shows the next 2 upcoming ones (first-RSVPed first).

---

## 10. Components referenced

| Component | Used in |
|-----------|---------|
| Live class carousel card | Course Home — top section, swipeable |
| Content list item (modified) | Course Home — inline live class CTA states |
| Bottom sheet | RSVP interaction — date, time, canonical recording, prerequisites, join CTA |
| Module dropdown | Course Home — module selection |
| Week chips | Course Home — week navigation |
| Content type filter chips | Course Home — Videos, Recorded Live, Assignment, etc. |
| "Start here" tooltip | Course Home — one-time education on first visit |
| Progress bar (seat fill) | Bottom sheet / carousel cards |
| Snackbar | Post-action confirmations (join, leave, rejoin) |
| Quick access bar | Shows next 2 upcoming live classes the user has RSVPed for |

---

## 11. How to use this file

When starting a build conversation with Claude:
1. Upload this file at the start of the chat, or add it as project knowledge in a Claude Project
2. Reference specific sections: "Build Flow A" or "Build the bottom sheet"
3. Update this file as decisions change — it's the single source of truth for RSVP flows
