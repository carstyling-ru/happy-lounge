"use client"

import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { RotateCw } from "lucide-react"

import {
  EXELY_SCRIPT_ID,
  getBatumiBookingHref,
  getExelyBootstrapScript,
  type BookingLanguage,
} from "@/lib/exely-booking"
import styles from "./happy-lounge-landing.module.css"

const messages = {
  en: { label: "Book online in Batumi", loading: "Loading booking form...", error: "The booking form could not be loaded.", retry: "Try again" },
  ru: { label: "Онлайн-бронирование в Батуми", loading: "Загрузка формы бронирования...", error: "Не удалось загрузить форму бронирования.", retry: "Попробовать снова" },
  ka: { label: "ონლაინ დაჯავშნა ბათუმში", loading: "ჯავშნის ფორმა იტვირთება...", error: "ჯავშნის ფორმა ვერ ჩაიტვირთა.", retry: "სცადეთ ხელახლა" },
}

export function ExelyBookingLink({
  language,
  room,
  className,
  children,
}: {
  language: BookingLanguage
  room?: string
  className: string
  children: ReactNode
}) {
  return (
    <a
      className={className}
      href={getBatumiBookingHref(language, room)}
      data-be-booking-open="true"
      data-be-room={room}
    >
      {children}
    </a>
  )
}

export function ExelySearchForm({ language }: { language: BookingLanguage }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")
  const copy = messages[language]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let frame: HTMLIFrameElement | null = null
    const timeout = window.setTimeout(() => setStatus("error"), 25000)
    const onLoad = () => {
      window.clearTimeout(timeout)
      setStatus("ready")
    }
    const observeFrame = () => {
      const nextFrame = container.querySelector("iframe")
      if (!nextFrame || nextFrame === frame) return
      frame?.removeEventListener("load", onLoad)
      frame = nextFrame
      frame.addEventListener("load", onLoad)
    }
    const observer = new MutationObserver(observeFrame)
    observer.observe(container, { childList: true, subtree: true })
    observeFrame()

    if (!document.getElementById(EXELY_SCRIPT_ID)) {
      const script = document.createElement("script")
      script.id = EXELY_SCRIPT_ID
      script.type = "text/javascript"
      script.textContent = getExelyBootstrapScript(language)
      document.head.appendChild(script)
    }

    return () => {
      observer.disconnect()
      frame?.removeEventListener("load", onLoad)
      window.clearTimeout(timeout)
    }
  }, [language])

  return (
    <div className={styles.bookingSearch} aria-label={copy.label}>
      <div id="block-search" className={styles.bookingSearchSurface}>
        <div id="be-search-form" className={styles.bookingSearchContainer} ref={containerRef}>
          <a href="https://exely.com/" rel="nofollow noopener noreferrer" target="_blank">
            Hotel management software
          </a>
        </div>
        {status !== "ready" && (
          <div className={styles.bookingStatus} role="status">
            <span>{status === "error" ? copy.error : copy.loading}</span>
            {status === "error" && (
              <button type="button" onClick={() => window.location.reload()}>
                <RotateCw size={16} aria-hidden="true" />
                {copy.retry}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
