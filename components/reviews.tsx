import { Star, Quote } from "lucide-react"

const reviews = [
  {
    title: "Best stay in Tbilisi",
    text: "The pods are spacious and cozy at the same time. It's clean, quiet, and the hosts are super friendly and considerate. Mattresses are comfortable to sleep on. Absolutely recommended.",
    name: "Solo traveler",
    score: "9.6",
  },
  {
    title: "Perfect for work travel",
    text: "Just perfect if you're traveling and working at the same time. The room is super clean, the bed is comfortable, and the common area is great for getting work done. Wi-Fi is fast — no stress even with heavy software.",
    name: "Digital nomad",
    score: "9.4",
  },
  {
    title: "Clean, cozy, professional",
    text: "Everything you might need for a short or long stay is available, clean, and cozy. The staff is highly professional and works hard to help every guest feel comfortable. I totally recommend it.",
    name: "Returning guest",
    score: "9.2",
  },
  {
    title: "Quiet and well-maintained",
    text: "Located on a quiet side-street — I slept well even without earplugs. All the facilities are fresh and well-maintained. Special thanks to the staff for arranging an after-midnight check-in.",
    name: "Business traveler",
    score: "9.0",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight md:text-4xl">
            Loved by guests from around the world
          </h2>
          <p className="mt-3 text-primary-foreground/80">
            Rated 8.6 / 10 across hundreds of reviews
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.title}
              className="rounded-3xl bg-primary-foreground/10 p-7 backdrop-blur"
            >
              <Quote className="h-7 w-7 text-accent" />
              <figcaption className="mt-4 flex items-center justify-between">
                <h3 className="font-serif text-lg font-semibold">{r.title}</h3>
                <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                  {r.score}
                </span>
              </figcaption>
              <blockquote className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
                “{r.text}”
              </blockquote>
              <p className="mt-4 text-xs uppercase tracking-[0.15em] text-primary-foreground/60">
                {r.name}
              </p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
