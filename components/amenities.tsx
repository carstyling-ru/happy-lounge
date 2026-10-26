import {
  Wifi,
  ShowerHead,
  Car,
  Lock,
  Coffee,
  Snowflake,
  Clock,
  Luggage,
  KeyRound,
} from "lucide-react"

const amenities = [
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    text: "Reliable, fast internet throughout the property — perfect for video calls, streaming, and remote work.",
  },
  {
    icon: ShowerHead,
    title: "Clean shared bathrooms",
    text: "Fresh, well-maintained shared showers with instant hot water and good water pressure.",
  },
  {
    icon: Snowflake,
    title: "AC & heating",
    text: "Air conditioning in summer and heating in winter keep every room comfortable year-round.",
  },
  {
    icon: Coffee,
    title: "Shared kitchen & lounge",
    text: "A communal kitchen with utensils plus a leisure and TV room to relax or get work done.",
  },
  {
    icon: Lock,
    title: "Secure lockers",
    text: "Keep your belongings safe with in-room lockers and secure key-card building access.",
  },
  {
    icon: Car,
    title: "Free parking",
    text: "Complimentary on-site self-parking available for guests arriving by car.",
  },
  {
    icon: Clock,
    title: "24-hour front desk",
    text: "Friendly staff on hand day and night, including help with late or after-midnight check-ins.",
  },
  {
    icon: Luggage,
    title: "Luggage storage",
    text: "Drop your bags before check-in or after check-out and make the most of your day.",
  },
  {
    icon: KeyRound,
    title: "Key-card access",
    text: "Contactless, secure entry to the building and your room for peace of mind.",
  },
]

export function Amenities() {
  return (
    <section id="amenities" className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            What we offer
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Everything you need for a comfortable stay
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a) => (
            <div
              key={a.title}
              className="rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <a.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {a.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
