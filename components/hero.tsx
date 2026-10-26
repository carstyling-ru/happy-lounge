import { MapPin, Star } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hotel/08.jpg"
          alt="Interior of Happy Lounge capsule hotel with wooden sleeping pods"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/35 to-foreground/65" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28">
        <p className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-background/80">
          <MapPin className="h-4 w-4" />
          Saburtalo, Tbilisi
        </p>
        <h1 className="max-w-3xl text-balance font-serif text-4xl font-semibold leading-[1.05] text-background sm:text-5xl md:text-6xl">
          The Capsule Hotel Experience in the Heart of Tbilisi
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-background/85">
          Japanese-style capsules that blend hotel comfort with hostel prices.
          Rest, recharge, and explore the city — all from a calm, modern space.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#booking"
            className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
          >
            Check availability
          </a>
          <div className="flex items-center gap-2 rounded-full bg-background/15 px-4 py-2.5 text-sm text-background backdrop-blur">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-semibold">8.6</span>
            <span className="text-background/70">Very good · Guest rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}
