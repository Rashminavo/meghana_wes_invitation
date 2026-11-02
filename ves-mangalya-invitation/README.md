# වෙස් තැබීමේ උත්සවය — Digital Invitation

Next.js වෙබ් අඩවියක් — traditional Sri Lankan (Kandyan) theme එකකින්, ඔබ upload කළ
ආරාධනා පත්‍රයේ පින්තූරය පදනම් කරගෙන පාට/font තෝරාගෙන ඇත.

## Pages (folders/files වශයෙන් වෙන් කර ඇත — edit කිරීමට පහසුයි)

| Page | File | URL |
|---|---|---|
| මුල් පිටුව (Hero + ආරාධනා පත්‍රය) | `pages/index.js` | `/` |
| කාල ගණනය (Countdown) | `pages/countdown.js` | `/countdown` |
| ශිෂ්‍ය පරපුර (Student list) | `pages/students.js` | `/students` |
| වේලාසටහන (agenda) | `pages/agenda.js` | `/agenda` |
| ගැලරිය (Gallery) | `pages/gallery.js` | `/gallery` |
| දර්ශනාවලිය (Pre-shoot video) | `pages/video.js` | `/video` |
| ස්ථානය (Venue / directions) | `pages/venue.js` | `/venue` |
| සම්බන්ධතා (Contact) | `pages/contact.js` | `/contact` |

Shared bits:
- `components/Nav.js` — top navigation bar (edit menu labels/order here)
- `components/Footer.js` — bottom blessing/credit line
- `components/Layout.js` — wraps every page with Nav + Footer
- `components/Divider.js` — the small gold ornament divider
- `styles/globals.css` — **all colors, fonts and theme styling live here**
- `public/hero-invitation.png` — your uploaded invitation artwork

## 1. Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 2. What to edit before going live

- `pages/countdown.js` → change `EVENT_DATE` to the real date/time, and fix the
  `calendarUrl` dates if you want "Add to calendar" to be accurate.
- `pages/students.js` → replace the `STUDENTS` array with real names/batches,
  and swap the `placeholder-photo` divs for real `<Image>` photos once you have them.
- `pages/agenda.js` → edit the `agenda` array (times/titles/descriptions).
- `pages/gallery.js` → put real photos in `public/gallery/` and update `PHOTOS`.
- `pages/video.js` → set `YOUTUBE_ID` to your pre-shoot video's YouTube ID.
- `pages/venue.js` → set `VENUE_NAME`, address lines, and `MAPS_QUERY`.
- `pages/contact.js` → update the `CONTACTS` array (names, roles, numbers).
- `components/Footer.js` → replace `[ඔබේ ආයතනයේ නම]` with your academy's name.

## 3. Deploy to Vercel

**Option A — via GitHub (recommended):**
1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com/new, import the repository.
3. Vercel auto-detects Next.js — just click **Deploy**.

**Option B — via Vercel CLI (no GitHub needed):**
```bash
npm install -g vercel
vercel
```
Follow the prompts (first time asks you to log in) — it will give you a live
URL in under a minute. Run `vercel --prod` to publish to your production URL.

That's it — every page above becomes its own route automatically
(e.g. `yoursite.vercel.app/agenda`).
