import assert from "node:assert/strict"
import test from "node:test"

import { batumiContent, batumiExpediaUrl, batumiMapsUrl, batumiReviewsUrl } from "../components/batumi-content.ts"

test("Batumi reviews link to the supplied Expedia.com property", () => {
  const property = new URL(batumiExpediaUrl)
  const reviews = new URL(batumiReviewsUrl)
  assert.equal(property.origin, "https://www.expedia.com")
  assert.equal(reviews.origin, property.origin)
  assert.equal(reviews.pathname, property.pathname)
  assert.match(property.pathname, /h136443801\.Hotel-Information$/)
  assert.equal(reviews.searchParams.get("pwaDialog"), "summary-reviews-136443801")
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

test("Google Maps opens the corrected street address", () => {
  const maps = new URL(batumiMapsUrl)
  assert.equal(maps.origin, "https://www.google.com")
  assert.equal(maps.searchParams.get("api"), "1")
  assert.equal(maps.searchParams.get("query"), "47A Sherif Khimshiashvili St, Batumi 6010, Georgia")
})
