# Batumi Exely Integration Check

## Configuration

- Archive: `happy-lounge.zip`, supplied by Exely on 2026-10-26.
- Context: `BE-INT-happy-lounge_2026-10-26`.
- Property returned by Exely: `515233`, Happy Lounge Batumi.
- Languages: `en`, `ru`, `ka`.
- Room IDs: `5081198`, `5081199`, `5081200`.
- Loader: the supplied script, including the three fallback hosts.
- Tbilisi retains OtelMS and does not load Exely.

## Verified Locally

- The live Exely search form renders in all three languages.
- Calendar selection and guest selection work.
- A search for 2026-10-28 through 2026-10-31 for one adult passes
  `date=2026-10-28`, `nights=3`, `adults=1`, and `providerId=515233` to Exely.
- The vendor popup opens with the title Happy Lounge Batumi.
- Generic booking links open all rooms; room links carry the supplied IDs.
- The form is over the desktop hero and below the hero on mobile/tablet.
- No guest details, reservations, or payments were submitted.
- Unit tests cover locale/context setup, booking links, room IDs, and loader
  fallback behavior.

## Pending Vendor/Published-Domain Check

The booking popup stays on its loading screen during local testing. The vendor
logs `booking-form connect not established`. The same behavior was reproduced
with the supplied bootstrap, search container, and booking link on a separate
plain HTML page, without React or the prototype's layout.

Room availability, rates, checkout, and payment are therefore not verified.
Recheck on the published HTTPS domain and share the context, property ID, and
error above with Exely if the issue persists. The local-only result does not
establish whether the cause is host restrictions, browser behavior, or the
service configuration.

The popup's address is Sherif Khimshiashvili 47a. The supplied Expedia listing
uses Mamuladze 31. The prototype retains the user-supplied address; confirm with
the hotel whether these are different entrances to the same property.

## Search Console

No Google Search Console verification file or meta tag is present in the
provided archive. No verification token was guessed or installed.
