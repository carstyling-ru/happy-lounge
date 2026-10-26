import {
  ArrowUpRight,
  CalendarCheck,
  Clock3,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

const BOOKING_EMBED_URL =
  "https://booking-online.otelms.com/booking/rooms?hms_system_id=19204"

const BOOKING_LAUNCH_URL =
  "https://booking-online.otelms.com/?hms_system_id=19204"

const perks = [
  {
    icon: CalendarCheck,
    title: "Real-time availability",
    text: "See free capsules and live prices for your exact dates.",
  },
  {
    icon: ShieldCheck,
    title: "Secure direct booking",
    text: "Reserve straight with us — no hidden fees or middlemen.",
  },
  {
    icon: Sparkles,
    title: "Best rate, instantly",
    text: "Confirm in a few clicks and get an instant confirmation.",
  },
]

const quickNotes = [
  "Live room availability and current rates",
  "Instant confirmation after booking",
  "Best experience on desktop and tablet",
]

export function Booking() {
  return (
    <section id="booking" className="scroll-mt-20 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Reserve your capsule
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Check availability &amp; book online
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Pick your dates below and book directly with Happy Lounge. The
            calendar updates in real time, so what you see is exactly what&apos;s
            available.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {perks.map((p) => (
              <div
                key={p.title}
                className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-primary/15 bg-primary p-5 text-primary-foreground md:col-span-2 xl:col-span-1">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-foreground/12">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Prefer the full booking page?</h3>
                  <p className="mt-1 text-sm text-primary-foreground/80">
                    Use the standalone view if you want more space while
                    selecting dates and room types.
                  </p>
                </div>
              </div>

              <a
                href={BOOKING_LAUNCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.01]"
              >
                Open full booking page
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="border-b border-border/60 bg-background/70 px-5 py-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-foreground">
                    Happy Lounge — Booking
                  </span>
                </div>

                <a
                  href={BOOKING_LAUNCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Open in a new tab
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {quickNotes.map((note) => (
                  <span
                    key={note}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/75"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
            <iframe
              src={BOOKING_EMBED_URL}
              title="Happy Lounge online booking"
              className="h-[860px] w-full border-0 bg-background md:h-[980px] xl:h-[1120px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="border-t border-border/60 bg-background/70 px-5 py-4 text-sm text-muted-foreground md:hidden">
              If the embedded calendar feels cramped on your phone, open the
              full booking page for a more comfortable checkout flow.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
