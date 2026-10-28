import assert from "node:assert/strict"
import test from "node:test"

import { batumiContent, batumiAirbnbUrl, batumiMapsUrl, batumiMapsEmbedUrl, batumiReviewsUrl } from "../components/batumi-content.ts"

test("Batumi reviews link to the supplied Airbnb listing", () => {
  const property = new URL(batumiAirbnbUrl)
  const reviews = new URL(batumiReviewsUrl)
  assert.equal(property.origin, "https://www.airbnb.ie")
  assert.equal(reviews.origin, property.origin)
  assert.equal(property.pathname, "/rooms/1794890142374438952")
  assert.equal(reviews.pathname, `${property.pathname}/reviews`)
  for (const language of ["en", "ru", "ka"]) {
    assert.match(batumiContent[language].reviewsLink, /Airbnb/)
    assert.match(batumiContent[language].reviewsCta, /Airbnb/)
  }
})

test("the corrected Batumi address is localized in every language", () => {
  for (const language of ["en", "ru", "ka"]) {
    assert.match(batumiContent[language].locationLine, /47[AАა]/)
    assert.match(batumiContent[language].locationLine, /6010/)
    assert.equal("reviewsSource" in batumiContent[language], false)
  }
  assert.match(batumiContent.en.locationLine, /Sherif Khimshiashvili/)
  assert.match(batumiContent.ru.locationLine, /Шерифа Химшиашвили/)
  assert.match(batumiContent.ka.locationLine, /შერიფ ხიმშიაშვილის/)
})

test("Google Maps link and embed target the supplied hotel business card", () => {
  const place = "0x406785283a75ac67:0xbf9e1c1d1fb99669"
  const maps = new URL(batumiMapsUrl)
  const embed = new URL(batumiMapsEmbedUrl)
  assert.equal(maps.origin, "https://www.google.com")
  assert.ok(maps.pathname.startsWith("/maps/place/Happy+Lounge+Capsule+Hotel/"))
  assert.ok(maps.pathname.includes(place))
  assert.equal(embed.origin, maps.origin)
  assert.equal(embed.pathname, "/maps/embed")
  const parameters = embed.searchParams.get("pb")
  assert.ok(parameters.includes(place))
  assert.ok(parameters.includes("Happy Lounge Capsule Hotel"))
  assert.ok(parameters.includes("!2d41.6037131!3d41.6316135"))
})
