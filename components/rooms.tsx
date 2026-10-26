import { Check, Users, User, Heart } from "lucide-react"

const BOOKING_URL = "https://www.booking.com/hotel/ge/happy-lounge.ru.html"

const rooms = [
  {
    icon: User,
    name: "Single Capsule",
    image: "/hotel/06.jpg",
    desc: "A private pod for solo travelers with everything you need to rest and recharge.",
    features: ["Personal reading light", "Power outlets", "Privacy curtain", "Locker access"],
  },
  {
    icon: Heart,
    name: "Double Room",
    image: "/hotel/02.jpg",
    desc: "A comfortable private double room — ideal for couples who want a little more space.",
    features: ["Double bed", "Air conditioning", "Shared bathroom", "Key-card access"],
  },
  {
    icon: Users,
    name: "Shared Pod Dorm",
    image: "/hotel/05.jpg",
    desc: "Four-pod dorms, male or female, balancing personal space with a social atmosphere.",
    features: ["Comfortable mattress", "In-room locker", "Curtained pod", "In-suite bathroom"],
  },
]

export function Rooms() {
  return (
    <section id="rooms" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Where you&apos;ll sleep
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Rooms & capsules for every traveler
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {rooms.map((r) => (
            <article
              key={r.name}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card"
            >
              <img
                src={r.image || "/placeholder.svg"}
                alt={`${r.name} at Happy Lounge`}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-primary">
                  <r.icon className="h-5 w-5" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {r.name}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {r.desc}
                </p>
                <ul className="mt-4 space-y-2">
                  {r.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <Check className="h-4 w-4 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full border border-primary px-5 py-2.5 text-center text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Check rates
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
