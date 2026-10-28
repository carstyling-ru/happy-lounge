# Happy Lounge Prototype

Run the local preview with `pnpm dev --port 3100`.

The shared page supports two hotels and three languages through URL parameters:

- `/?city=tbilisi&lang=en`
- `/?city=batumi&lang=ru`
- `/?city=batumi&lang=ka`

The default city is Tbilisi and the default language is English. City selection
preserves the language and supports browser history, direct links, and reloads.
These query-based URLs also work on the GitHub Pages static export.

Batumi content and translations live in `components/batumi-content.ts`. Photos
are stored locally in `public/happy-lounge/batumi/`. Both hotels use the shared
Instagram link in the footer.

## Booking

Tbilisi keeps its existing OtelMS link. Batumi uses the Exely scripts supplied in
`happy-lounge.zip`, with context `BE-INT-happy-lounge_2026-10-26` and locales
`en`, `ru`, and `ka`.

The search form sits over the desktop hero and below it on mobile/tablet. The
main booking link opens all room types in Exely's own modal. The capsule links
pass the supplied room IDs: Minimal Basic `5081198`, Immersive Full `5081199`,
and Double Capsule `5081200`.

City changes and Batumi language changes load a fresh document so Exely cannot
retain another hotel's context or show a stale-language widget. The loader is
inserted in the document head only on Batumi, once per document, with the three
fallback hosts supplied by Exely. No booking, payment, or guest information is
handled by the prototype itself.

A small inline head script checks `city=batumi` before React loads. It adds
preconnect/DNS hints, preloads the vendor loader at high priority, and starts
its async runtime immediately. The React search form queues the hotel context
and embed command only after its container is mounted. Tbilisi does not make
these Exely requests. Vendor response times are still outside the site's
control.

The carousel uses the three reviews from the supplied Airbnb listing, with
localized author names, month-precision dates, 5-point scores, and concise
paraphrases in EN/RU/KA in
`lib/batumi-reviews.ts`; the section introduces the summaries as based on recent
reviews and links to the full reviews on Airbnb. The official Airbnb logo
is stored locally. Both hotel maps use Google Maps. Each hotel has its own
phone number below its address; both share tbilisicapsulehotel@gmail.com.
Batumi uses +995555486568 at 47A Sherif Khimshiashvili St, Batumi 6010, Georgia.
The archive contains no Google Search Console verification file or
meta tag.

## Batumi Sources

- Copy: https://docs.google.com/document/d/1p8tszczkxW0bJj_wDt92LG7AcPPRdZzZoEmiCr8A7fo/edit
- Address and photos: https://www.expedia.de/en/Batumi-Hotels-Capsule-Hotel-Happy-Lounge-Batumi.h136443801.Hotel-Information
- Hero: https://images.trvl-media.com/lodging/137000000/136450000/136443900/136443801/038c8a95.jpg
- Reviews: https://www.airbnb.ie/rooms/1794890142374438952/reviews
- Host profile: https://www.airbnb.ie/users/profile/1794890143021759411

## Checks

Run `node --test tests/*.test.mjs`, `pnpm exec tsc --noEmit`, and
`pnpm build` before publication. Verify the live Exely form and popup without
submitting a reservation or payment.

See `docs/exely-integration-check.md` for the local verification results and
the pending Exely popup connection check on the published domain.
