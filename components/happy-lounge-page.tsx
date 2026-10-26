"use client"

import dynamic from "next/dynamic"

const HappyLoungeLanding = dynamic(
  () =>
    import("@/components/happy-lounge-landing").then(
      (module) => module.HappyLoungeLanding,
    ),
  {
    ssr: false,
  },
)

export function HappyLoungePage() {
  return <HappyLoungeLanding />
}
