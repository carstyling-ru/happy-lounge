export type BookingLanguage = "en" | "ru" | "ka"

export const EXELY_CONTEXT = "BE-INT-happy-lounge_2026-10-26"
export const EXELY_SCRIPT_ID = "exely-batumi-bootstrap"

export const batumiRoomTypes = [
  { name: "Minimal Basic", id: "5081198" },
  { name: "Immersive Full", id: "5081199" },
  { name: "Double Capsule", id: "5081200" },
] as const

export function getBatumiBookingHref(language: BookingLanguage, room?: string) {
  const params = new URLSearchParams({
    city: "batumi",
    lang: language,
    "be-booking-open": "true",
  })
  if (room) params.set("room-type", room)
  return `?${params}`
}

export function getExelyBootstrapScript(language: BookingLanguage) {
  const commands = [
    ["setContext", EXELY_CONTEXT, language],
    ["embed", "search-form", { container: "be-search-form" }],
  ]

  // Keep Exely's supplied loader and its three-host fallback intact.
  return `!function(e,n){
    var t="bookingengine",o="integration",i=e[t]=e[t]||{},a=i[o]=i[o]||{},r="__cq",c="__loader",d="getElementsByTagName";
    if(n=n||[],a[r]=a[r]?a[r].concat(n):n,!a[c]){a[c]=!0;var l=e.document,g=l[d]("head")[0]||l[d]("body")[0];
    !function n(i){if(0!==i.length){var a=l.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://"+i[0]+"/integration/loader.js",
    a.onerror=a.onload=function(n,i){return function(){e[t]&&e[t][o]&&e[t][o].loaded||(g.removeChild(n),i())}}(a,(function(){n(i.slice(1,i.length))})),g.appendChild(a)}}(
    ["ge-ibe.hopenapi.com", "ibe.hopenapi.com", "ibe.behopenapi.com"])}
  }(window, ${JSON.stringify(commands)});`
}
