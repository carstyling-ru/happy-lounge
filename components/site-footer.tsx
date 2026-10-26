import { MapPin, Phone, Mail } from "lucide-react"

const BOOKING_URL = "https://www.booking.com/hotel/ge/happy-lounge.ru.html"

const nav = [
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Rooms", href: "#rooms" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="font-serif text-2xl font-semibold">
              Happy Lounge
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
              A Japanese-style capsule hotel in the heart of Tbilisi. Hotel
              comfort, hostel prices.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
            >
              Book now
            </a>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-background/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-background/80 transition-colors hover:text-background"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-background/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                63 Merab Kostava Street, Saburtalo, Tbilisi, Georgia
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                +995 32 000 0000
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                stay@happylounge.ge
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-background/15 pt-6 text-xs text-background/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Happy Lounge Capsule Hotel. All rights reserved.</p>
          <p>Saburtalo, Tbilisi · Georgia</p>
        </div>
      </div>
    </footer>
  )
}
