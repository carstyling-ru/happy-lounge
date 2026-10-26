import { MapPin, Phone, Mail, Clock } from "lucide-react"

const BOOKING_URL = "https://www.booking.com/hotel/ge/happy-lounge.ru.html"

const details = [
  {
    icon: MapPin,
    label: "Address",
    value: "63 Merab Kostava Street, Saburtalo, Tbilisi 0179, Georgia",
  },
  { icon: Clock, label: "Front desk", value: "Open 24 hours, 7 days a week" },
  { icon: Phone, label: "Phone", value: "+995 32 000 0000" },
  { icon: Mail, label: "Email", value: "stay@happylounge.ge" },
]

export function Location() {
  return (
    <section id="location" className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Find us
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Centrally located in Saburtalo
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We&apos;re on a quiet residential street in one of Tbilisi&apos;s
            most convenient neighborhoods — close to metro stations, cafés, and
            everything you need to explore the city.
          </p>

          <ul className="mt-8 space-y-5">
            {details.map((d) => (
              <li key={d.label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <d.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {d.label}
                  </div>
                  <div className="mt-0.5 text-foreground">{d.value}</div>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book your stay
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Happy Lounge location on map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=44.745%2C41.715%2C44.785%2C41.730&layer=mapnik&marker=41.7225%2C44.765"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
