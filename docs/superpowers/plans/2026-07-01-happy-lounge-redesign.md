# Happy Lounge Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current homepage with a near-1:1 implementation of the `carstyling-ru.github.io/happy-lounge` reference and add a `Book now` popup booking modal backed by OTELMS.

**Architecture:** Build one client-side landing page component that owns the language switcher, reviews carousel, gallery behavior, lightbox, and booking modal. Keep the route surface simple by swapping `app/page.tsx` to render the new component and reuse local `public/happy-lounge/*` assets.

**Tech Stack:** Next.js App Router, React client component state, local static assets from `public/`, Tailwind-free CSS module styling where needed.

---

### Task 1: Add Reference Assets And Landing Component Shell

**Files:**
- Create: `public/happy-lounge/vert-image.webp`
- Create: `public/happy-lounge/gallery/*`
- Create: `components/happy-lounge-landing.tsx`
- Create: `components/happy-lounge-landing.module.css`

- [ ] Add downloaded hero and gallery images under `public/happy-lounge/`.
- [ ] Create a client component that renders the reference sections: hero, intro, features, reviews, gallery, location map.
- [ ] Move the visual rules from the reference page into a dedicated CSS module and keep class names mapped to the new JSX structure.

### Task 2: Add Interactive Behaviors

**Files:**
- Modify: `components/happy-lounge-landing.tsx`
- Modify: `components/happy-lounge-landing.module.css`

- [ ] Implement language switching for `en`, `ru`, and `ka`.
- [ ] Implement review carousel next/prev controls.
- [ ] Implement gallery paging for mobile/tablet and lightbox open/close behavior.
- [ ] Implement booking modal open/close behavior with Escape key and overlay close.

### Task 3: Connect OTELMS Booking Popup

**Files:**
- Modify: `components/happy-lounge-landing.tsx`
- Modify: `components/happy-lounge-landing.module.css`

- [ ] Mount a modal with an OTELMS iframe using the direct booking route for better reliability.
- [ ] Add a visible fallback `Open booking in new tab` link inside the modal.
- [ ] Lock background scroll while the modal is open.

### Task 4: Swap Homepage And Verify

**Files:**
- Modify: `app/page.tsx`

- [ ] Replace the old section-composed homepage with the new landing component.
- [ ] Verify the page in browser on desktop and mobile-sized viewports.
- [ ] Confirm the popup opens, closes, and loads the OTELMS page without runtime errors.
