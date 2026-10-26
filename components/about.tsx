const stats = [
  { value: "50", label: "Private capsules" },
  { value: "24/7", label: "Front desk" },
  { value: "Free", label: "Wi-Fi & parking" },
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Sleep well, spend less
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            A calm, modern place to rest in Tbilisi
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            At Happy Lounge, our Japanese-style capsules in the Saburtalo
            district give you hotel-grade comfort without the hotel price. Expect
            comfortable beds, clean shared showers, reliable Wi-Fi, and friendly
            staff around the clock — everything you need to recharge after a day
            exploring the city.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We&apos;re a quiet, welcoming space for solo travelers, couples, and
            digital nomads who want privacy, convenience, and great value in one
            of Tbilisi&apos;s most central neighborhoods.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-4 text-center"
              >
                <div className="font-serif text-2xl font-semibold text-primary">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="/hotel/01.jpg"
            alt="A single capsule pod with warm lighting"
            className="aspect-[3/4] w-full rounded-3xl object-cover"
          />
          <img
            src="/hotel/04.jpg"
            alt="Shared lounge area with seating and plants"
            className="mt-8 aspect-[3/4] w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
