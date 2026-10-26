export type BookingLanguage = "en" | "ru" | "ka"

export const EXELY_CONTEXT = "BE-INT-happy-lounge_2026-10-26"
export const EXELY_SCRIPT_ID = "exely-batumi-bootstrap"
export const EXELY_PRELOAD_SCRIPT_ID = "exely-batumi-preload"

const loaderHosts = ["ge-ibe.hopenapi.com", "ibe.hopenapi.com", "ibe.behopenapi.com"]
const loaderUrl = `https://${loaderHosts[0]}/integration/loader.js`

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
  return getExelyLoaderScript([
    ["setContext", EXELY_CONTEXT, language],
    ["embed", "search-form", { container: "be-search-form" }],
  ])
}

export function getExelyPreloadScript() {
  const hints = [
    { rel: "preconnect", href: `https://${loaderHosts[0]}` },
    { rel: "preconnect", href: "https://cdn.behopenapi.com" },
    ...loaderHosts.slice(1).map((host) => ({ rel: "dns-prefetch", href: `https://${host}` })),
    { rel: "preload", href: loaderUrl, as: "script" },
  ]

  // Fetch the runtime before React, but queue embedding only after its container exists.
  return `(function(){
    if(new URLSearchParams(window.location.search).get("city")!=="batumi")return;
    var d=window.document,h=d.getElementsByTagName("head")[0];
    ${JSON.stringify(hints)}.forEach(function(hint,index){
      var id="exely-resource-hint-"+index;
      if(d.getElementById(id))return;
      var link=d.createElement("link");link.id=id;link.rel=hint.rel;link.href=hint.href;
      if(hint.as){link.as=hint.as;link.fetchPriority="high";}
      h.appendChild(link);
    });
    ${getExelyLoaderScript([])}
  })();`
}

function getExelyLoaderScript(commands: unknown[][]) {
  // Keep Exely's supplied loader and its three-host fallback intact.
  return `!function(e,n){
    var t="bookingengine",o="integration",i=e[t]=e[t]||{},a=i[o]=i[o]||{},r="__cq",c="__loader",d="getElementsByTagName";
    if(n=n||[],a[r]=a[r]?a[r].concat(n):n,!a[c]){a[c]=!0;var l=e.document,g=l[d]("head")[0]||l[d]("body")[0];
    !function n(i){if(0!==i.length){var a=l.createElement("script");a.type="text/javascript",a.async=!0,a.fetchPriority="high",a.src="https://"+i[0]+"/integration/loader.js",
    a.onerror=a.onload=function(n,i){return function(){e[t]&&e[t][o]&&e[t][o].loaded||(g.removeChild(n),i())}}(a,(function(){n(i.slice(1,i.length))})),g.appendChild(a)}}(
    ${JSON.stringify(loaderHosts)})}
  }(window, ${JSON.stringify(commands)});`
}
