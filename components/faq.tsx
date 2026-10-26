"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "Do you offer 24/7 check-in?",
    a: "Yes. Our front desk is staffed around the clock, and our team is happy to arrange late or after-midnight check-ins — just let us know your arrival time in advance.",
  },
  {
    q: "Are the bathrooms shared or private?",
    a: "Bathrooms are shared and kept clean throughout the day. They feature instant hot water and strong water pressure, and many rooms have their own in-suite shared bathroom for added convenience.",
  },
  {
    q: "Is Wi-Fi free, and is it fast enough to work?",
    a: "Wi-Fi is completely free and reliable throughout the property. It comfortably supports video calls, streaming, and remote work — making us a great base for digital nomads.",
  },
  {
    q: "Is parking available?",
    a: "Yes, we offer free on-site self-parking for guests arriving by car, subject to availability.",
  },
  {
    q: "Do you have facilities for longer stays?",
    a: "Absolutely. With a shared kitchen, a co-working-friendly lounge, lockers, and comfortable pods, Happy Lounge is well suited to both short trips and longer stays.",
  },
  {
    q: "How secure is the property?",
    a: "The building uses secure key-card access, and every room includes lockers so you can keep your belongings safe while you explore the city.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Good to know
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-foreground">{f.q}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
