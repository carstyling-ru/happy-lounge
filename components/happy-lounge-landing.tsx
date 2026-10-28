"use client"

import type { CSSProperties, TouchEvent } from "react"
import { createElement, useEffect, useRef, useState } from "react"
import {
  BedDouble,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Coffee,
  CookingPot,
  Lock,
  Luggage,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Waves,
  X,
  Zap,
} from "lucide-react"

import styles from "./happy-lounge-landing.module.css"
import { batumiContent, batumiReviewsUrl, batumiGallery, batumiMapsUrl } from "./batumi-content"
import { batumiReviews } from "@/lib/batumi-reviews"
import { ExelyBookingLink, ExelySearchForm } from "./exely-booking"
import { batumiRoomTypes } from "@/lib/exely-booking"

const BOOKING_NEW_TAB_URL =
  "https://booking-online.otelms.com/?hms_system_id=19204/"
const HERO_BACKGROUND =
  'linear-gradient(180deg, rgba(3, 6, 12, 0.18), rgba(3, 6, 12, 0.08) 34%, rgba(3, 6, 12, 0.42) 68%, rgba(3, 6, 12, 0.7) 100%), url("happy-lounge/vert-image.webp")'
const BATUMI_HERO_BACKGROUND =
  'linear-gradient(180deg, rgba(3, 6, 12, 0.5), rgba(3, 6, 12, 0.48) 34%, rgba(3, 6, 12, 0.58) 68%, rgba(3, 6, 12, 0.76) 100%), url("happy-lounge/batumi/038c8a95.jpg")'
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Happy+Lounge+capsule+hotel+63+Merab+Kostava+St+Tbilisi"
const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=41.714087,44.782185&z=16&output=embed"
const BATUMI_GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2982.118036083087!2d41.603849999999994!3d41.63158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDM3JzUzLjciTiA0McKwMzYnMTMuOSJF!5e0!3m2!1sen!2sde!4v1793021016877!5m2!1sen!2sde"

type GalleryImage = {
  src: string
  alt: string
}

type SocialLinkStyle = CSSProperties & {
  "--social-color": string
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.9 2.75h8.2A5.16 5.16 0 0 1 21.25 7.9v8.2a5.16 5.16 0 0 1-5.15 5.15H7.9a5.16 5.16 0 0 1-5.15-5.15V7.9A5.16 5.16 0 0 1 7.9 2.75Zm0 1.8A3.35 3.35 0 0 0 4.55 7.9v8.2a3.35 3.35 0 0 0 3.35 3.35h8.2a3.35 3.35 0 0 0 3.35-3.35V7.9a3.35 3.35 0 0 0-3.35-3.35H7.9Zm4.1 3.24a4.21 4.21 0 1 1 0 8.42 4.21 4.21 0 0 1 0-8.42Zm0 1.8a2.41 2.41 0 1 0 0 4.82 2.41 2.41 0 0 0 0-4.82Zm4.48-2.28a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.52 21.25v-8.42h2.83l.42-3.29h-3.25v-2.1c0-.95.27-1.6 1.63-1.6h1.74V2.9c-.3-.04-1.34-.13-2.55-.13-2.52 0-4.25 1.54-4.25 4.37v2.4H7.24v3.29h2.85v8.42h3.43Z" />
    </svg>
  )
}

function ThreadsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.8 10.72c-.18-3.03-1.83-4.78-4.58-4.8-1.64-.01-3.08.69-4.02 1.98l1.45 1c.68-.9 1.65-1.27 2.55-1.26 1.52.01 2.46.85 2.77 2.45-.8-.13-1.65-.15-2.54-.04-2.54.3-4.16 1.78-4.05 3.68.06.96.6 1.78 1.52 2.31.78.45 1.78.66 2.83.54 1.39-.15 2.48-.61 3.24-1.38.58-.58.96-1.3 1.14-2.18.63.38.98.9 1.08 1.53.16 1.04-.39 2.04-1.5 2.75-1 .64-2.29.98-3.73.99-1.59.01-2.96-.51-3.96-1.5-1.11-1.1-1.69-2.7-1.7-4.75.01-2.04.59-3.64 1.7-4.74 1-.99 2.37-1.51 3.96-1.5 1.6.01 2.94.54 3.9 1.53.47.49.83 1.07 1.08 1.73l1.64-.44a7.17 7.17 0 0 0-1.5-2.39c-1.29-1.34-3.04-2.04-5.07-2.05h-.03c-2.04 0-3.82.7-5.14 2.01-1.46 1.45-2.22 3.47-2.23 5.85.01 2.39.77 4.41 2.23 5.86 1.32 1.31 3.1 2 5.14 2.01h.04c1.77 0 3.4-.44 4.7-1.28 1.66-1.06 2.47-2.69 2.21-4.47-.2-1.31-1.07-2.47-2.6-3.17Zm-4.26 4.15c-1.16.13-2.36-.33-2.42-1.24-.04-.68.82-1.45 2.51-1.64.28-.03.55-.05.82-.05.57 0 1.11.06 1.59.19-.25 2.03-1.12 2.59-2.5 2.74Z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.33 4.24 18.2 19.04c-.24 1.05-.86 1.31-1.74.82l-4.8-3.54-2.31 2.23c-.26.26-.47.47-.97.47l.34-4.88 8.9-8.04c.39-.34-.08-.53-.6-.19l-11 6.93-4.74-1.48c-1.03-.32-1.05-1.03.22-1.52l18.52-7.14c.86-.32 1.61.19 1.31 1.54Z" />
    </svg>
  )
}

function GoogleLogo() {
  return (
    <svg
      className={styles.googleLogo}
      viewBox="0 0 84 31"
      aria-label="Google"
      role="img"
    >
      <g transform="translate(3 1.25)">
        <path
          fill="#4285f4"
          d="M9.24 9.78v2.83h6.79c-.21 1.6-.74 2.78-1.55 3.61-.99.99-2.54 2.08-5.24 2.08-4.17 0-7.43-3.36-7.43-7.53s3.26-7.53 7.43-7.53c2.25 0 3.9.88 5.12 2.02l1.99-1.99C14.67 1.71 12.43.45 9.24.45 3.53.45 0 5.1 0 10.77s3.53 10.32 9.24 10.32c2.71 0 5.04-.89 6.74-2.66 1.74-1.74 2.29-4.19 2.29-6.17 0-.61-.05-1.17-.14-1.64H9.24Z"
        />
        <path
          fill="#ea4335"
          d="M26.4 7.52c-3.75 0-6.8 2.85-6.8 6.78s3.05 6.78 6.8 6.78 6.8-2.88 6.8-6.78-3.05-6.78-6.8-6.78Zm0 10.89c-2.06 0-3.83-1.7-3.83-4.11s1.77-4.11 3.83-4.11 3.83 1.67 3.83 4.11-1.77 4.11-3.83 4.11Z"
        />
        <path
          fill="#fbbc05"
          d="M41.24 7.52c-3.75 0-6.8 2.85-6.8 6.78s3.05 6.78 6.8 6.78 6.8-2.88 6.8-6.78-3.05-6.78-6.8-6.78Zm0 10.89c-2.06 0-3.83-1.7-3.83-4.11s1.77-4.11 3.83-4.11 3.83 1.67 3.83 4.11-1.77 4.11-3.83 4.11Z"
        />
        <path
          fill="#4285f4"
          d="M59.09 7.93v1.1h-.1c-.66-.79-1.94-1.51-3.55-1.51-3.37 0-6.46 2.96-6.46 6.79 0 3.8 3.09 6.77 6.46 6.77 1.61 0 2.89-.72 3.55-1.54h.1v.95c0 2.59-1.38 3.98-3.6 3.98-1.81 0-2.94-1.3-3.4-2.4l-2.58 1.07c.74 1.78 2.69 3.99 5.98 3.99 3.47 0 6.4-2.04 6.4-7.01V7.93h-2.8Zm-3.4 10.48c-2.06 0-3.75-1.73-3.75-4.1 0-2.4 1.69-4.12 3.75-4.12 2.03 0 3.61 1.75 3.61 4.12 0 2.35-1.58 4.1-3.61 4.1Z"
        />
        <path fill="#34a853" d="M64.14 1.16h2.97v19.52h-2.97V1.16Z" />
        <path
          fill="#ea4335"
          d="M72.98 18.41c-1.53 0-2.62-.7-3.32-2.06l9.16-3.79-.31-.77c-.56-1.51-2.25-4.27-5.72-4.27-3.44 0-6.31 2.71-6.31 6.78 0 3.83 2.89 6.78 6.63 6.78 3.01 0 4.75-1.84 5.47-2.91l-2.3-1.53c-.77 1.12-1.82 1.77-3.3 1.77Zm-.1-8.27c1.17 0 2.17.59 2.5 1.43l-6.13 2.54c-.08-2.59 2-3.97 3.63-3.97Z"
        />
      </g>
    </svg>
  )
}

function renderReviewCta(label: string, city: City) {
  const [before, after] = label.split(city === "batumi" ? "Expedia" : "Google")

  if (after === undefined) return label

  return (
    <>
      {before}
      {city === "batumi" ? (
        <img className={styles.expediaLogo} src="happy-lounge/expedia-logo.svg" alt="Expedia" width={90} height={20} />
      ) : <GoogleLogo />}
      {after}
    </>
  )
}

const socialLinks = [
  {
    href: "https://www.instagram.com/happy.lounge_ge/",
    label: "Instagram",
    Icon: InstagramIcon,
    color: "#e4405f",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61589870320539",
    label: "Facebook",
    Icon: FacebookIcon,
    color: "#1877f2",
  },
  {
    href: "https://www.threads.com/@capsule_hotel_tbilisi",
    label: "Threads",
    Icon: ThreadsIcon,
    color: "#101010",
  },
  {
    href: "https://t.me/capsule_hotel_tbilisi",
    label: "Telegram",
    Icon: TelegramIcon,
    color: "#26a5e4",
  },
] as const

const tbilisiGallery: readonly GalleryImage[] = [
  { src: "happy-lounge/details/image00004.webp", alt: "Guest working inside a blue-lit capsule" },
  { src: "happy-lounge/details/image00003.webp", alt: "Coworking lounge with bean bags and natural light" },
  { src: "happy-lounge/details/image00023.webp", alt: "Single capsule interior with ambient blue lighting" },
  { src: "happy-lounge/details/image00019.webp", alt: "Capsule mirror and control panel with blue lights" },
  { src: "happy-lounge/details/image00009.webp", alt: "Secure personal lockers in the shared corridor" },
  { src: "happy-lounge/details/image00002.webp", alt: "Capsule bed with television and soft blue lighting" },
  { src: "happy-lounge/details/image00013.webp", alt: "Close-up of capsule ceiling and lighting details" },
  { src: "happy-lounge/details/image00016.webp", alt: "Capsule controls and illuminated mirror detail" },
  { src: "happy-lounge/details/image00001.webp", alt: "Capsule interior with glowing mirror and media panel" },
  { src: "happy-lounge/details/image00015.webp", alt: "Blue-lit capsule ceiling with futuristic geometry" },
  { src: "happy-lounge/details/image00011.webp", alt: "Locker wall with contactless access system" },
  { src: "happy-lounge/details/image00014.webp", alt: "Capsule exterior with ladder and illuminated entry" },
  { src: "happy-lounge/details/image00012.webp", alt: "Capsule corridor with multiple open berths" },
  { src: "happy-lounge/details/image00007.webp", alt: "Coffee station in the common kitchen area" },
  { src: "happy-lounge/details/image00008.webp", alt: "Dining lounge with television and communal tables" },
  { src: "happy-lounge/details/image00005.webp", alt: "Upper lounge and coworking space overview" },
  { src: "happy-lounge/details/image00017.webp", alt: "Capsule setup for reading and remote work" },
  { src: "happy-lounge/details/image00010.webp", alt: "Locker close-up with contactless key access" },
  { src: "happy-lounge/details/image00018.webp", alt: "Capsule with laptop ready for work or rest" },
  { src: "happy-lounge/details/image00020.webp", alt: "Open lower capsule with soft interior glow" },
  { src: "happy-lounge/details/image00006.webp", alt: "Bright lounge corner with seating and city light" },
  { src: "happy-lounge/details/image00022.webp", alt: "Capsule stack with illuminated entrances and ladders" },
  { src: "happy-lounge/details/image00021.webp", alt: "Single capsule with illuminated mirror wall" },
] as const

const content = {
  en: {
    locale: "en-US",
    langLabel: "ENGLISH",
    langOptions: [
      { code: "ru", label: "РУССКИЙ" },
      { code: "ka", label: "ქართული" },
    ],
    brandSub: "Capsule Hotel | Tbilisi",
    heroTitle:
      "Discover a new format of staying - efficient, atmospheric, and unforgettable",
    heroText:
      "Modern, seamless, and thoughtfully designed - your stay begins the moment you arrive.",
    heroButton: "Book Now!",
    introTitle:
      "Stay at the crossroads of the city - and step into another reality.",
    introParagraphs: [
      {
        label: "Comfortable Accommodations:",
        text: "Capsule Hotel Happy Lounge in Tbilisi offers air-conditioned rooms with private check-in and check-out services, a lounge, and a 24-hour front desk. Guests enjoy free WiFi, daily housekeeping, and luggage storage.",
      },
      {
        label: "Modern Amenities:",
        text: "Shared spaces include clean showers and restrooms, a fully equipped kitchen, dining and lounge zones, coworking corners, and TV access for a pleasant stay.",
      },
    ],
    comfortTitle: "Find the stay that fits you perfectly",
    comfortLead: "Everything you need for a",
    comfortAccent: "comfortable stay",
    comfortLeadSuffix: "in Tbilisi",
    features: [
      {
        title: "Capsule Types",
        text: "Minimal basic - simple, smart, and comfortable. Immersive full - enhanced experience with a built-in Smart TV. Double capsule - designed for two without compromising personal comfort.",
      },
      {
        title: "Personalized Comfort",
        text: "All capsules feature adjustable RGB lighting and ventilation, so you can create your ideal atmosphere.",
      },
      {
        title: "Secure Storage",
        text: "Each stay includes a personal locker for your belongings - peace of mind while you explore the city.",
      },
      {
        title: "Prime Location",
        text: "Stay in central Tbilisi with quick access to major routes, city transport, and everyday essentials.",
      },
      {
        title: "Effortless Check-In",
        text: "Open 24/7. No delays, no complications - just your passport and you're in.",
      },
      {
        title: "Breakfast Option",
        text: "Start your day right - add breakfast to your booking anytime. Please note: breakfast is optional during the low season.",
      },
    ],
    featuresToggle: "Show more",
    reviewsTitle: "What Our Guests Say",
    reviewsLead: "Based on recent",
    reviewsLink: "Google reviews",
    reviewsLeadSuffix: "for Happy Lounge",
    reviewsSource: "Google Reviews",
    reviewsCta: "Read all on Google",
    galleryTitle: "Gallery",
    galleryLead: "Photos from",
    galleryAccent: "Happy Lounge capsule hotel",
    detailGalleryTitle: "Inside the space",
    detailGalleryText:
      "A closer look at the capsules, coworking lounge, shared kitchen, lockers, and the atmosphere guests experience on site.",
    detailGalleryPrev: "Previous photos",
    detailGalleryNext: "Next photos",
    locationLine: "63 Merab Kostava St, Tbilisi, Georgia",
    openBookingNewTab: "Open booking in new tab",
    openInGoogleMaps: "Open in Google Maps",
    mapCredit: "Interactive map powered by Google Maps",
    lightboxClose: "Close preview",
    lightboxPrev: "Previous large photo",
    lightboxNext: "Next large photo",
    reviews: [
      {
        title: "Clean and comfortable",
        text: "Guests repeatedly mention clean capsules, good privacy, and a cozy layout for short stays in Tbilisi.",
      },
      {
        title: "Helpful staff",
        text: "Reviews often highlight friendly service, smooth check-in, and a calm atmosphere in the shared areas.",
      },
      {
        title: "Convenient location",
        text: "Travelers say the hotel is easy to reach, close to transit, and practical for exploring the city center.",
      },
    ],
  },
  ru: {
    locale: "ru-RU",
    langLabel: "РУССКИЙ",
    langOptions: [
      { code: "en", label: "ENGLISH" },
      { code: "ka", label: "ქართული" },
    ],
    brandSub: "Капсульный отель | Тбилиси",
    heroTitle:
      "Откройте новый формат проживания - эффективный, атмосферный и незабываемый",
    heroText:
      "Современно, удобно и продуманно - ваше пребывание начинается с момента прибытия.",
    heroButton: "Забронировать",
    introTitle:
      "Остановитесь на перекрёстке города - и шагните в другую реальность.",
    introParagraphs: [
      {
        label: "Комфортное размещение:",
        text: "Capsule Hotel Happy Lounge в Тбилиси предлагает кондиционированные номера, индивидуальную регистрацию заезда и выезда, лаунж-зону и круглосуточную стойку регистрации. Гостям доступны бесплатный Wi‑Fi, ежедневная уборка и хранение багажа.",
      },
      {
        label: "Современные удобства:",
        text: "В общих зонах есть чистые душевые и туалеты, полностью оборудованная кухня, обеденная и лаунж-зоны, места для коворкинга и телевизор для комфортного отдыха.",
      },
    ],
    comfortTitle: "Найдите формат проживания, который подходит именно вам",
    comfortLead: "Всё, что нужно для",
    comfortAccent: "комфортного проживания",
    comfortLeadSuffix: "в Тбилиси",
    features: [
      {
        title: "Типы капсул",
        text: "Minimal basic - просто, продуманно и комфортно. Immersive full - расширенный опыт с встроенным Smart TV. Double capsule - вариант для двоих без компромиссов в личном комфорте.",
      },
      {
        title: "Персональный комфорт",
        text: "Во всех капсулах есть регулируемая RGB-подсветка и вентиляция, чтобы вы могли создать идеальную атмосферу.",
      },
      {
        title: "Безопасное хранение",
        text: "В каждое бронирование входит персональный локер для ваших вещей - можно спокойно гулять по городу.",
      },
      {
        title: "Удобное расположение",
        text: "Остановитесь в центре Тбилиси с быстрым доступом к основным маршрутам, транспорту и городской инфраструктуре.",
      },
      {
        title: "Быстрый заезд",
        text: "Открыто 24/7. Без задержек и сложностей - нужен только паспорт, и вы уже внутри.",
      },
      {
        title: "Завтрак по желанию",
        text: "Начните день правильно - добавьте завтрак к бронированию в любое время. Обратите внимание: в низкий сезон завтрак предоставляется опционально.",
      },
    ],
    featuresToggle: "Показать ещё",
    reviewsTitle: "Что говорят наши гости",
    reviewsLead: "По материалам недавних",
    reviewsLink: "отзывов в Google",
    reviewsLeadSuffix: "о Happy Lounge",
    reviewsSource: "Google Отзывы",
    reviewsCta: "Читать все в Google",
    galleryTitle: "Галерея",
    galleryLead: "Фотографии",
    galleryAccent: "Happy Lounge capsule hotel",
    detailGalleryTitle: "Пространство внутри",
    detailGalleryText:
      "Больше деталей о капсулах, коворкинге, общей кухне, локерах и той атмосфере, которую гости видят на месте.",
    detailGalleryPrev: "Предыдущие фото",
    detailGalleryNext: "Следующие фото",
    locationLine: "63 Merab Kostava St, Тбилиси, Грузия",
    openBookingNewTab: "Открыть бронирование в новой вкладке",
    openInGoogleMaps: "Открыть в Google Maps",
    mapCredit: "Интерактивная карта на базе Google Maps",
    lightboxClose: "Закрыть просмотр",
    lightboxPrev: "Предыдущее большое фото",
    lightboxNext: "Следующее большое фото",
    reviews: [
      {
        title: "Чисто и удобно",
        text: "Гости регулярно отмечают чистые капсулы, хорошую приватность и уютный формат для короткого проживания в Тбилиси.",
      },
      {
        title: "Дружелюбный персонал",
        text: "Во многих отзывах хвалят приветливый сервис, быстрый заезд и спокойную атмосферу в общих зонах.",
      },
      {
        title: "Удобная локация",
        text: "Путешественники пишут, что отель легко найти, он расположен рядом с транспортом и удобен для поездок по центру города.",
      },
    ],
  },
  ka: {
    locale: "ka-GE",
    langLabel: "ქართული",
    langOptions: [
      { code: "en", label: "ENGLISH" },
      { code: "ru", label: "РУССКИЙ" },
    ],
    brandSub: "კაფსულური სასტუმრო | თბილისი",
    heroTitle:
      "აღმოაჩინეთ დარჩენის ახალი ფორმატი - ეფექტური, ატმოსფერული და დაუვიწყარი",
    heroText:
      "თანამედროვე, მარტივი და გააზრებულად შექმნილი - თქვენი დასვენება იწყება ჩამოსვლისთანავე.",
    heroButton: "დაჯავშნა",
    introTitle: "დარჩით ქალაქის გზაჯვარედინზე - და გადადით სხვა რეალობაში.",
    introParagraphs: [
      {
        label: "კომფორტული განთავსება:",
        text: "Capsule Hotel Happy Lounge თბილისში გთავაზობთ კონდიცირებულ ოთახებს, პრივატულ check-in / check-out-ს, ლაუნჯ-სივრცესა და 24/7 მისაღებს. სტუმრებს აქვთ უფასო Wi‑Fi, ყოველდღიური დალაგება და ბარგის შესანახი ადგილი.",
      },
      {
        label: "თანამედროვე კომფორტი:",
        text: "საერთო სივრცეში არის სუფთა საშხაპეები და ტუალეტები, სრულად აღჭურვილი სამზარეულო, სასადილო და დასასვენებელი ზონები, coworking სივრცე და ტელევიზორი კომფორტული ყოფნისთვის.",
      },
    ],
    comfortTitle: "იპოვეთ დარჩენის ფორმატი, რომელიც ზუსტად თქვენ გერგებათ",
    comfortLead: "ყველაფერი, რაც გჭირდებათ",
    comfortAccent: "კომფორტული დარჩენისთვის",
    comfortLeadSuffix: "თბილისში",
    features: [
      {
        title: "კაფსულის ტიპები",
        text: "Minimal basic - მარტივი, პრაქტიკული და კომფორტული. Immersive full - გაუმჯობესებული გამოცდილება ჩაშენებული Smart TV-ით. Double capsule - ფართო კაფსულა ორისთვის, პირადი სივრცის დაცვით.",
      },
      {
        title: "პერსონალური კომფორტი",
        text: "ყველა კაფსულას აქვს რეგულირებადი RGB განათება და ვენტილაცია, რათა შექმნათ თქვენთვის იდეალური ატმოსფერო.",
      },
      {
        title: "უსაფრთხო ლოქერი",
        text: "ყოველ ჯავშანში შედის პერსონალური ლოქერი თქვენი ნივთებისთვის - შეგიძლიათ მშვიდად ისეირნოთ ქალაქში.",
      },
      {
        title: "მოხერხებული მდებარეობა",
        text: "დარჩით თბილისის ცენტრში, ძირითადი მარშრუტების, ტრანსპორტისა და ყოველდღიური საჭიროებების მარტივი წვდომით.",
      },
      {
        title: "მარტივი რეგისტრაცია",
        text: "ღიაა 24/7. დაყოვნებისა და სირთულეების გარეშე - მხოლოდ პასპორტი და უკვე შიგნით ხართ.",
      },
      {
        title: "საუზმის არჩევანი",
        text: "დაიწყეთ დღე სწორად - საუზმე შეგიძლიათ დაამატოთ ჯავშანს ნებისმიერ დროს. გაითვალისწინეთ: დაბალ სეზონზე საუზმე არჩევითია.",
      },
    ],
    featuresToggle: "მეტის ჩვენება",
    reviewsTitle: "რას ამბობენ ჩვენი სტუმრები",
    reviewsLead: "დაფუძნებულია ბოლო",
    reviewsLink: "Google შეფასებებზე",
    reviewsLeadSuffix: "Happy Lounge-ის შესახებ",
    reviewsSource: "Google შეფასებები",
    reviewsCta: "ყველას ნახვა Google-ში",
    galleryTitle: "გალერეა",
    galleryLead: "ფოტოები",
    galleryAccent: "Happy Lounge capsule hotel-დან",
    detailGalleryTitle: "სივრცე შიგნიდან",
    detailGalleryText:
      "დეტალურად ნახეთ კაფსულები, coworking ზონა, საერთო სამზარეულო, ლოქერები და ის ატმოსფერო, რომელსაც სტუმრები ადგილზე ხვდებიან.",
    detailGalleryPrev: "წინა ფოტოები",
    detailGalleryNext: "შემდეგი ფოტოები",
    locationLine: "63 Merab Kostava St, თბილისი, საქართველო",
    openBookingNewTab: "დაჯავშნის გახსნა ახალ ჩანართში",
    openInGoogleMaps: "გახსნა Google Maps-ში",
    mapCredit: "ინტერაქტიული რუკა Google Maps-ისგან",
    lightboxClose: "ნახვის დახურვა",
    lightboxPrev: "წინა დიდი ფოტო",
    lightboxNext: "შემდეგი დიდი ფოტო",
    reviews: [
      {
        title: "სუფთა და კომფორტული",
        text: "სტუმრები ხშირად აღნიშნავენ სუფთა კაფსულებს, კარგ პირად სივრცეს და მყუდრო გარემოს მოკლე დარჩენისთვის თბილისში.",
      },
      {
        title: "კარგი მომსახურება",
        text: "შეფასებებში ხშირად ჩანს მეგობრული პერსონალი, მარტივი check-in და მშვიდი ატმოსფერო საერთო სივრცეებში.",
      },
      {
        title: "მოხერხებული მდებარეობა",
        text: "მოგზაურები წერენ, რომ სასტუმრო ადვილად მისადგომია, ახლოს არის ტრანსპორტთან და მოსახერხებელია ქალაქში გადაადგილებისთვის.",
      },
    ],
  },
} as const

type Language = keyof typeof content
type City = "tbilisi" | "batumi"

const cityLabels = {
  en: { tbilisi: "Tbilisi", batumi: "Batumi", select: "Choose a city", language: "Language" },
  ru: { tbilisi: "Тбилиси", batumi: "Батуми", select: "Выберите город", language: "Язык" },
  ka: { tbilisi: "თბილისი", batumi: "ბათუმი", select: "აირჩიეთ ქალაქი", language: "ენა" },
}

function readLocation(): { city: City; language: Language } {
  const params = new URLSearchParams(window.location.search)
  const lang = params.get("lang")
  return {
    city: params.get("city") === "batumi" ? "batumi" as const : "tbilisi" as const,
    language: lang === "ru" || lang === "ka" ? lang : "en" as const,
  }
}

function cityUrl(city: City, language: Language) {
  const url = new URL(window.location.href)
  url.searchParams.set("city", city)
  url.searchParams.set("lang", language)
  url.hash = ""
  return `${url.pathname}${url.search}`
}

const featureIcons = [BedDouble, Sparkles, Lock, MapPin, Zap, Coffee]
const SWIPE_THRESHOLD = 48

function getDetailSlidesPerView(width: number) {
  if (width <= 540) return 1
  if (width <= 900) return 2
  return 3
}

function preloadImage(
  src: string,
  cache: Map<string, HTMLImageElement>,
) {
  if (cache.has(src)) return

  const image = new window.Image()
  image.decoding = "async"
  image.src = src
  cache.set(src, image)
}

export function HappyLoungeLanding() {
  const [language, setLanguage] = useState<Language>(() => readLocation().language)
  const [city, setCity] = useState<City>(() => readLocation().city)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cityMenuOpen, setCityMenuOpen] = useState(false)
  const [featuresExpanded, setFeaturesExpanded] = useState(false)
  const [reviewIndex, setReviewIndex] = useState(0)
  const [detailIndex, setDetailIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [viewportWidth, setViewportWidth] = useState(1440)
  const [detailSwipeOffset, setDetailSwipeOffset] = useState(0)
  const [detailIsSwiping, setDetailIsSwiping] = useState(false)
  const [lightboxSwipeOffset, setLightboxSwipeOffset] = useState(0)
  const [lightboxIsSwiping, setLightboxIsSwiping] = useState(false)
  const imageCacheRef = useRef<Map<string, HTMLImageElement>>(new Map())
  const navRef = useRef<HTMLElement>(null)
  const cityButtonRef = useRef<HTMLButtonElement>(null)
  const reviewTouchStartRef = useRef({ x: 0, y: 0 })
  const detailTouchStartRef = useRef({ x: 0, y: 0 })
  const lightboxTouchStartRef = useRef({ x: 0, y: 0 })
  const detailSwipeHandledRef = useRef(false)
  const lightboxSwipeHandledRef = useRef(false)
  const detailSlidesPerView = getDetailSlidesPerView(viewportWidth)
  const detailGalleryImages: readonly GalleryImage[] = city === "batumi" ? batumiGallery : tbilisiGallery
  const galleryImages = detailGalleryImages
  const copy = city === "batumi" ? { ...content[language], ...batumiContent[language] } : content[language]
  const reviews = city === "batumi" ? batumiReviews[language] : copy.reviews
  const activeBatumiReview = city === "batumi" ? batumiReviews[language][reviewIndex] : null
  const icons = city === "batumi" ? [MapPin, Waves, Zap, CookingPot, Lock, Luggage] : featureIcons
  const mapsUrl = city === "batumi"
    ? batumiMapsUrl
    : GOOGLE_MAPS_URL
  const mapsEmbedUrl = city === "batumi"
    ? BATUMI_GOOGLE_MAPS_EMBED_URL
    : GOOGLE_MAPS_EMBED_URL
  const heroBackground = city === "batumi"
    ? BATUMI_HERO_BACKGROUND
    : HERO_BACKGROUND

  const resetCityView = () => {
    setDetailIndex(0)
    setReviewIndex(0)
    setLightboxIndex(null)
    setFeaturesExpanded(false)
    setDetailSwipeOffset(0)
    setDetailIsSwiping(false)
    setCityMenuOpen(false)
    setMenuOpen(false)
  }

  const chooseCity = (nextCity: City) => {
    // Exely owns document-level widgets; a fresh document isolates hotel contexts.
    if (nextCity !== city) {
      window.location.assign(cityUrl(nextCity, language))
      return
    }
    resetCityView()
    setCity(nextCity)
    cityButtonRef.current?.focus()
  }

  const chooseLanguage = (nextLanguage: Language) => {
    if (city === "batumi") {
      window.location.assign(cityUrl(city, nextLanguage))
      return
    }
    window.history.replaceState(null, "", cityUrl(city, nextLanguage))
    setLanguage(nextLanguage)
    setMenuOpen(false)
  }

  useEffect(() => {
    const onPopState = () => {
      const next = readLocation()
      if (next.city !== city) resetCityView()
      setCity(next.city)
      setLanguage(next.language)
    }
    const onOutsideClick = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setCityMenuOpen(false)
        setMenuOpen(false)
      }
    }
    window.addEventListener("popstate", onPopState)
    document.addEventListener("pointerdown", onOutsideClick)
    return () => {
      window.removeEventListener("popstate", onPopState)
      document.removeEventListener("pointerdown", onOutsideClick)
    }
  }, [city])

  useEffect(() => {
    document.title = `Happy Lounge | ${copy.brandSub.split("|")[0].trim()} | ${cityLabels[language][city]}`
  }, [city, language, copy.brandSub])

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth)
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    const previousLang = root.lang
    root.lang = language

    if (lightboxIndex !== null) {
      const previousOverflow = body.style.overflow
      body.style.overflow = "hidden"
      return () => {
        body.style.overflow = previousOverflow
        root.lang = previousLang
      }
    }

    return () => {
      root.lang = previousLang
    }
  }, [language, lightboxIndex])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        if (cityMenuOpen) cityButtonRef.current?.focus()
        setCityMenuOpen(false)
        setLightboxIndex(null)
      }

      if (lightboxIndex === null) return

      if (event.key === "ArrowLeft") {
        setLightboxIndex(
          (lightboxIndex - 1 + galleryImages.length) % galleryImages.length,
        )
      }

      if (event.key === "ArrowRight") {
        setLightboxIndex((lightboxIndex + 1) % galleryImages.length)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [lightboxIndex, cityMenuOpen, galleryImages])

  useEffect(() => {
    if (lightboxIndex === null) return

    const aroundLightbox = [
      galleryImages[lightboxIndex].src,
      galleryImages[(lightboxIndex + 1) % galleryImages.length].src,
      galleryImages[(lightboxIndex - 1 + galleryImages.length) % galleryImages.length].src,
    ]

    aroundLightbox.forEach((src) => preloadImage(src, imageCacheRef.current))
  }, [lightboxIndex, galleryImages])
  const visibleDetailItems = Array.from(
    { length: detailSlidesPerView },
    (_, offset) =>
      detailGalleryImages[(detailIndex + offset) % detailGalleryImages.length],
  )
  const detailRibbonItems =
    detailSlidesPerView === 1
      ? [
          detailGalleryImages[
            (detailIndex - 1 + detailGalleryImages.length) %
              detailGalleryImages.length
          ],
          detailGalleryImages[detailIndex],
          detailGalleryImages[(detailIndex + 1) % detailGalleryImages.length],
        ]
      : visibleDetailItems
  const lightboxRibbonItems =
    lightboxIndex === null
      ? []
      : [
          galleryImages[
            (lightboxIndex - 1 + galleryImages.length) % galleryImages.length
          ],
          galleryImages[lightboxIndex],
          galleryImages[(lightboxIndex + 1) % galleryImages.length],
        ]

  const handleReviewTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0]
    reviewTouchStartRef.current = { x: touch.clientX, y: touch.clientY }
  }

  const handleReviewTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - reviewTouchStartRef.current.x
    const deltaY = touch.clientY - reviewTouchStartRef.current.y

    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) {
      return
    }

    if (deltaX < 0) {
      setReviewIndex((index) => (index + 1) % reviews.length)
    } else {
      setReviewIndex((index) => (index - 1 + reviews.length) % reviews.length)
    }
  }

  const handleDetailTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0]
    detailTouchStartRef.current = { x: touch.clientX, y: touch.clientY }
    detailSwipeHandledRef.current = false

    if (detailSlidesPerView === 1) {
      setDetailIsSwiping(true)
      setDetailSwipeOffset(0)
    }
  }

  const handleDetailTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (detailSlidesPerView !== 1) return

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - detailTouchStartRef.current.x
    const deltaY = touch.clientY - detailTouchStartRef.current.y

    if (Math.abs(deltaX) < Math.abs(deltaY)) return

    const swipeLimit = Math.min(viewportWidth - 48, 420)
    setDetailSwipeOffset(Math.max(-swipeLimit, Math.min(swipeLimit, deltaX)))
  }

  const handleDetailTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (detailSlidesPerView !== 1) return

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - detailTouchStartRef.current.x
    const deltaY = touch.clientY - detailTouchStartRef.current.y

    const swipeThreshold = Math.min(180, Math.max(SWIPE_THRESHOLD, viewportWidth * 0.32))

    if (Math.abs(deltaX) < swipeThreshold || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) {
      setDetailIsSwiping(false)
      setDetailSwipeOffset(0)
      return
    }

    detailSwipeHandledRef.current = true
    setDetailIsSwiping(false)
    setDetailSwipeOffset(0)
    if (deltaX < 0) {
      setDetailIndex((index) => (index + 1) % detailGalleryImages.length)
    } else {
      setDetailIndex(
        (index) =>
          (index - 1 + detailGalleryImages.length) % detailGalleryImages.length,
      )
    }
  }

  const handleDetailTouchCancel = () => {
    setDetailIsSwiping(false)
    setDetailSwipeOffset(0)
  }

  const handleLightboxTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0]
    lightboxTouchStartRef.current = { x: touch.clientX, y: touch.clientY }
    lightboxSwipeHandledRef.current = false

    setLightboxIsSwiping(true)
    setLightboxSwipeOffset(0)
  }

  const handleLightboxTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - lightboxTouchStartRef.current.x
    const deltaY = touch.clientY - lightboxTouchStartRef.current.y

    if (Math.abs(deltaX) < Math.abs(deltaY)) return

    const activeWidth = window.innerWidth || viewportWidth
    const swipeLimit = Math.min(activeWidth - 28, 430)
    setLightboxSwipeOffset(Math.max(-swipeLimit, Math.min(swipeLimit, deltaX)))
  }

  const handleLightboxTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (lightboxIndex === null) return

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - lightboxTouchStartRef.current.x
    const deltaY = touch.clientY - lightboxTouchStartRef.current.y

    const activeWidth = window.innerWidth || viewportWidth
    const swipeThreshold = Math.min(180, Math.max(SWIPE_THRESHOLD, activeWidth * 0.32))

    if (Math.abs(deltaX) < swipeThreshold || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) {
      setLightboxIsSwiping(false)
      setLightboxSwipeOffset(0)
      return
    }

    event.stopPropagation()
    lightboxSwipeHandledRef.current = true
    setLightboxIsSwiping(false)
    setLightboxSwipeOffset(0)
    if (deltaX < 0) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length)
    } else {
      setLightboxIndex(
        (lightboxIndex - 1 + galleryImages.length) % galleryImages.length,
      )
    }
  }

  const handleLightboxTouchCancel = () => {
    setLightboxIsSwiping(false)
    setLightboxSwipeOffset(0)
  }

  useEffect(() => {
    const visibleSources = [
      ...detailRibbonItems,
      ...lightboxRibbonItems,
    ].map((image) => image.src)
    visibleSources.forEach((src) => preloadImage(src, imageCacheRef.current))

    const leadSources = [...visibleSources]
    leadSources.forEach((src) => preloadImage(src, imageCacheRef.current))

    const deferredSources = detailGalleryImages
      .map((image) => image.src)
      .filter((src) => !leadSources.includes(src))

    let queueIndex = 0
    let timeoutId: number | null = null

    const drainQueue = () => {
      const nextSrc = deferredSources[queueIndex]
      if (!nextSrc) return

      preloadImage(nextSrc, imageCacheRef.current)
      queueIndex += 1
      timeoutId = window.setTimeout(drainQueue, 120)
    }

    timeoutId = window.setTimeout(drainQueue, 180)

    return () => {
      if (timeoutId !== null) window.clearTimeout(timeoutId)
    }
  }, [detailIndex, detailSlidesPerView, detailGalleryImages])

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={city === "batumi" ? styles.heroBookingLayout : undefined}>
        <header
          className={styles.hero}
          id="top"
          style={{ backgroundImage: heroBackground }}
        >
          <nav ref={navRef} className={styles.nav} aria-label="Main navigation">
            <div className={styles.brandBlock}>
              <a
                className={styles.brand}
                href="#top"
                aria-label={`HAPPY LOUNGE ${copy.brandSub.split("|")[0].trim()}`}
              >
                <span className={styles.brandWordmark} aria-hidden="true">
                  <span className={styles.brandHappy}>HAPPY</span>
                  <span className={styles.brandLounge}>LOUNGE</span>
                </span>
                <span className={styles.brandSub} aria-hidden="true">
                  {Array.from(copy.brandSub.split("|")[0].trim()).map((letter, index) => (
                    <span key={index}>{letter}</span>
                  ))}
                </span>
              </a>
              <div className={styles.cityPicker}>
                <button
                  ref={cityButtonRef}
                  className={styles.cityButton}
                  type="button"
                  aria-label={`${cityLabels[language].select}: ${cityLabels[language][city]}`}
                  aria-expanded={cityMenuOpen}
                  aria-controls="city-options"
                  onClick={() => {
                    setCityMenuOpen((open) => !open)
                    setMenuOpen(false)
                  }}
                >
                  {cityLabels[language][city]}
                  <ChevronDown aria-hidden="true" size={16} />
                </button>
                {cityMenuOpen && (
                  <div className={styles.cityMenu} id="city-options">
                    {(["tbilisi", "batumi"] as const).filter((option) => option !== city).map((option) => (
                      <a
                        key={option}
                        className={styles.cityOption}
                        href={cityUrl(option, language)}
                        aria-current={city === option ? "page" : undefined}
                        onClick={(event) => {
                          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
                          event.preventDefault()
                          chooseCity(option)
                        }}
                      >
                        {cityLabels[language][option]}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className={styles.languagePicker}>
              <button
                className={styles.languageButton}
                type="button"
                aria-label={cityLabels[language].language}
                aria-expanded={menuOpen}
                onClick={() => {
                  setMenuOpen((value) => !value)
                  setCityMenuOpen(false)
                }}
              >
                {copy.langLabel}
              </button>

              {menuOpen && (
                <div className={styles.languageMenu}>
                  {copy.langOptions.map((option) => (
                    <button
                      key={option.code}
                      className={styles.languageOption}
                      type="button"
                      onClick={() => {
                        chooseLanguage(option.code as Language)
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>
              {city === "batumi" && language === "ru" ? (
                <>
                  <span className={styles.heroTitleLine}>
                    Проживание {createElement("nobr", null, "с комфортом")}{" "}
                  </span>
                  <span className={styles.heroTitleLine}>
                    {createElement("nobr", null, "в 200 метрах")}{" "}
                    {createElement("nobr", null, "от моря")}{" "}
                  </span>
                  <span className={styles.heroTitleLine}>
                    {createElement("nobr", null, "в уникальном")} пространстве
                  </span>
                </>
              ) : copy.heroTitle}
            </h1>
            <p className={styles.heroText}>{copy.heroText}</p>
            <div className={styles.bookingBar}>
              {city === "batumi" ? (
                <ExelyBookingLink language={language} className={styles.heroButton}>
                  {copy.heroButton}
                </ExelyBookingLink>
              ) : (
              <button
                className={styles.heroButton}
                type="button"
                onClick={() => window.open(BOOKING_NEW_TAB_URL, "_blank", "noopener,noreferrer")}
              >
                {copy.heroButton}
              </button>
              )}
            </div>
          </div>
        </header>
        {city === "batumi" && <ExelySearchForm language={language} />}
        </div>

        <div className={styles.intro}>
          <h2 className={styles.introTitle}>{copy.introTitle}</h2>
          {city === "batumi" && (
            <p className={styles.introText}>{batumiContent[language].introDescription}</p>
          )}
          {copy.introParagraphs.map((paragraph) => (
            <p key={paragraph.label} className={styles.introText}>
              <strong className={styles.accent}>{paragraph.label}</strong>{" "}
              {paragraph.text}
            </p>
          ))}
        </div>

        <section className={styles.section} aria-labelledby="comfort-title">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle} id="comfort-title">
              {city === "batumi" ? (
                <>
                  {copy.comfortLead} <span className={styles.accent}>{copy.comfortAccent}</span>{" "}
                  {copy.comfortLeadSuffix}
                </>
              ) : copy.comfortTitle}
            </h2>
            {city !== "batumi" && <p className={styles.lead}>
              {copy.comfortLead} <span className={styles.accent}>{copy.comfortAccent}</span>{" "}
              {copy.comfortLeadSuffix}
            </p>}
          </div>

          <div className={styles.features}>
            {copy.features.map((feature, index) => {
              const Icon = icons[index]
              const hiddenOnMobile = index >= 2 && !featuresExpanded
              return (
                <article
                  key={feature.title}
                  className={`${styles.feature} ${
                    hiddenOnMobile
                      ? styles.featureHiddenMobile
                      : styles.featureVisibleMobile
                  }`}
                >
                  <div className={styles.featureIcon} aria-hidden="true">
                    <Icon />
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureText}>{feature.text}</p>
                </article>
              )
            })}
          </div>

          {!featuresExpanded && (
            <button
              className={styles.featuresToggle}
              type="button"
              aria-expanded={featuresExpanded}
              onClick={() => setFeaturesExpanded(true)}
            >
              {copy.featuresToggle}{" "}
              <span className={styles.featuresToggleArrow} aria-hidden="true">
                ⌄
              </span>
            </button>
          )}
        </section>

        <section
          className={`${styles.section} ${styles.reviews}`}
          aria-labelledby="reviews-title"
        >
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle} id="reviews-title">
              {copy.reviewsTitle}
            </h2>
            <p className={styles.lead}>
              {copy.reviewsLead}{" "}
              <a href={city === "batumi" ? batumiReviewsUrl : mapsUrl} target="_blank" rel="noreferrer">
                {copy.reviewsLink}
              </a>{" "}
              {copy.reviewsLeadSuffix}
            </p>
          </div>

          <div
            className={styles.reviewWrap}
            onTouchStart={handleReviewTouchStart}
            onTouchEnd={handleReviewTouchEnd}
          >
            <button
              className={styles.arrow}
              type="button"
              aria-label={city === "batumi" ? batumiContent[language].reviewPrev : "Previous review"}
              hidden={reviews.length < 2}
              onClick={() =>
                setReviewIndex(
                  (reviewIndex - 1 + reviews.length) % reviews.length,
                )
              }
            >
              <span className={styles.arrowIcon} aria-hidden="true">
                ‹
              </span>
            </button>

            <article
              key={reviewIndex}
              className={styles.reviewCard}
              aria-live="polite"
            >
              <div>
                <div className={styles.stars} aria-label={activeBatumiReview ? `${activeBatumiReview.score} / 10` : "Five stars"}>
                  {activeBatumiReview ? `${activeBatumiReview.score} / 10` : Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} aria-hidden="true" />
                  ))}
                </div>
                {city !== "batumi" && <p className={styles.reviewSource}>{copy.reviewsSource}</p>}
                <h3 className={styles.reviewTitle}>{reviews[reviewIndex].title}</h3>
                <p className={styles.quote}>{reviews[reviewIndex].text}</p>
                {activeBatumiReview && (
                  <>
                    <p className={styles.person}>{activeBatumiReview.author}</p>
                    <time className={styles.reviewDate} dateTime={activeBatumiReview.date}>
                      {new Intl.DateTimeFormat(copy.locale, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${activeBatumiReview.date}T12:00:00Z`))}
                    </time>
                  </>
                )}
                <a
                  className={styles.reviewLink}
                  href={city === "batumi" ? batumiReviewsUrl : mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={copy.reviewsCta}
                >
                  {renderReviewCta(copy.reviewsCta, city)}
                </a>
              </div>
            </article>

            <button
              className={styles.arrow}
              type="button"
              aria-label={city === "batumi" ? batumiContent[language].reviewNext : "Next review"}
              hidden={reviews.length < 2}
              onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)}
            >
              <span className={styles.arrowIcon} aria-hidden="true">
                ›
              </span>
            </button>
          </div>
        </section>

        <section className={styles.section} id="gallery" aria-labelledby="gallery-title">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle} id="gallery-title">
              {copy.detailGalleryTitle}
            </h2>
          </div>

          <div className={styles.detailGallery}>
            <div className={styles.detailGalleryHead}>
              <div className={styles.detailGalleryCopy}>
                <p className={styles.detailGalleryText}>{copy.detailGalleryText}</p>
              </div>

              <div className={styles.detailGalleryControls}>
                <button
                  className={styles.detailGalleryButton}
                  type="button"
                  aria-label={copy.detailGalleryPrev}
                  onClick={() =>
                    setDetailIndex(
                      (detailIndex - 1 + detailGalleryImages.length) %
                        detailGalleryImages.length,
                    )
                  }
                >
                  ‹
                </button>
                <button
                  className={styles.detailGalleryButton}
                  type="button"
                  aria-label={copy.detailGalleryNext}
                  onClick={() =>
                    setDetailIndex((detailIndex + 1) % detailGalleryImages.length)
                  }
                >
                  ›
                </button>
              </div>
            </div>

            <div
              className={styles.detailGalleryViewport}
              onTouchStart={handleDetailTouchStart}
              onTouchMove={handleDetailTouchMove}
              onTouchEnd={handleDetailTouchEnd}
              onTouchCancel={handleDetailTouchCancel}
            >
              <div
                key={detailIndex}
                className={`${styles.detailGalleryGrid} ${
                  detailIsSwiping ? styles.detailGalleryGridSwiping : ""
                }`}
                style={{
                  gridTemplateColumns: `repeat(${detailSlidesPerView}, minmax(0, 1fr))`,
                  "--detail-swipe-offset": `${detailSwipeOffset}px`,
                } as CSSProperties & {
                  "--detail-swipe-offset": string
                }}
              >
                {detailRibbonItems.map((image, ribbonIndex) => {
                  const actualIndex = galleryImages.findIndex(
                    (item) => item.src === image.src && item.alt === image.alt,
                  )

                  return (
                    <button
                      key={`${ribbonIndex}-${image.src}-${image.alt}`}
                      className={styles.detailGalleryItem}
                      type="button"
                      onClick={() => {
                        if (detailSwipeHandledRef.current) {
                          detailSwipeHandledRef.current = false
                          return
                        }

                        setLightboxIndex(actualIndex)
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="eager"
                        decoding="async"
                      />
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {city === "batumi" && (
            <div className={styles.roomsSummary}>
              <h2 className={styles.sectionTitle}>{batumiContent[language].roomsTitle}</h2>
              <p className={styles.lead}>{batumiContent[language].roomsText}</p>
              <div className={styles.roomBookingOptions}>
                {batumiRoomTypes.map((room) => (
                  <div key={room.id} className={styles.roomBookingOption}>
                    <h3>{room.name}</h3>
                    <ExelyBookingLink language={language} room={room.id} className={styles.roomsBooking}>
                      {copy.heroButton}
                    </ExelyBookingLink>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={styles.contactBlock}>
            <p className={styles.contactTitle}>Happy Lounge capsule hotel</p>
            {city === "tbilisi" && <>
            <a className={styles.contactLink} href="tel:+995555960581">
              <Phone aria-hidden="true" />
              +995555960581
            </a>
            <a className={styles.contactLink} href="mailto:tbilisicapsulehotel@gmail.com">
              <Mail aria-hidden="true" />
              tbilisicapsulehotel@gmail.com
            </a>
            </>}
            <p className={styles.location}>
              <MapPin aria-hidden="true" />
              <span>{copy.locationLine}</span>
            </p>
          </div>

          <div className={styles.map} aria-label="Map showing Happy Lounge capsule hotel location">
            <iframe
              key={city}
              className={styles.mapFrame}
              title={`Happy Lounge ${cityLabels[language][city]} - Google Maps`}
              src={mapsEmbedUrl}
              loading={city === "batumi" ? "eager" : "lazy"}
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <p className={styles.mapCredit}>
              {copy.mapCredit}{" "}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                {copy.openInGoogleMaps}
              </a>
            </p>
          </div>

          <footer className={styles.footerSocial} aria-label="Happy Lounge social links">
            {socialLinks.map(({ href, label, Icon, color }) => (
              <a
                key={label}
                className={styles.socialLink}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                style={{ "--social-color": color } as SocialLinkStyle}
              >
                <Icon />
              </a>
            ))}
          </footer>
        </section>
      </div>

      {lightboxIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery preview"
          onClick={(event) => {
            if (lightboxSwipeHandledRef.current) {
              lightboxSwipeHandledRef.current = false
              return
            }

            if (event.target === event.currentTarget) setLightboxIndex(null)
          }}
          onTouchStart={handleLightboxTouchStart}
          onTouchMove={handleLightboxTouchMove}
          onTouchEnd={handleLightboxTouchEnd}
          onTouchCancel={handleLightboxTouchCancel}
        >
          <button
            className={styles.close}
            type="button"
            aria-label={copy.lightboxClose}
            onClick={() => setLightboxIndex(null)}
          >
            <X />
          </button>
          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            type="button"
            aria-label={copy.lightboxPrev}
            onClick={(event) => {
              event.stopPropagation()
              setLightboxIndex(
                (lightboxIndex - 1 + galleryImages.length) % galleryImages.length,
              )
            }}
          >
            <ChevronLeft />
          </button>
          <div className={styles.lightboxViewport}>
            <div
              key={galleryImages[lightboxIndex].src}
              className={`${styles.lightboxTrack} ${
                lightboxIsSwiping ? styles.lightboxTrackSwiping : ""
              }`}
              style={{
                "--lightbox-swipe-offset": `${lightboxSwipeOffset}px`,
              } as CSSProperties & {
                "--lightbox-swipe-offset": string
              }}
            >
              {lightboxRibbonItems.map((image, ribbonIndex) => (
                <div
                  key={`${ribbonIndex}-${image.src}-${image.alt}`}
                  className={styles.lightboxSlide}
                >
                  <img
                    className={styles.lightboxImage}
                    src={image.src}
                    alt={image.alt}
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            type="button"
            aria-label={copy.lightboxNext}
            onClick={(event) => {
              event.stopPropagation()
              setLightboxIndex((lightboxIndex + 1) % galleryImages.length)
            }}
          >
            <ChevronRight />
          </button>
        </div>
      )}

    </main>
  )
}
