import assert from "node:assert/strict"
import test from "node:test"
import { batumiReviews } from "../lib/batumi-reviews.ts"

test("all five Expedia reviews are present in every language", () => {
  const sourceIds = batumiReviews.en.map((review) => review.id)
  assert.equal(new Set(sourceIds).size, 5)
  for (const language of ["en", "ru", "ka"]) {
    assert.equal(batumiReviews[language].length, 5)
    assert.deepEqual(batumiReviews[language].map((review) => review.id), sourceIds)
    for (const review of batumiReviews[language]) {
      assert.equal(review.score, 10)
      assert.match(review.date, /^2026-\d{2}-\d{2}$/)
      assert.ok(review.author && review.title && review.text)
    }
  }
})

test("names and review summaries are localized", () => {
  assert.deepEqual(batumiReviews.en.map((review) => review.author), ["Valeri", "Yuliya", "Alexander", "Ekaterina", "Dmitrii"])
  assert.deepEqual(batumiReviews.ru.map((review) => review.author), ["Валерий", "Юлия", "Александр", "Екатерина", "Дмитрий"])
  assert.deepEqual(batumiReviews.ka.map((review) => review.author), ["ვალერი", "იულია", "ალექსანდრე", "ეკატერინა", "დმიტრი"])
  for (const review of batumiReviews.ru) assert.match(review.text, /[А-Яа-я]/)
  for (const review of batumiReviews.ka) assert.match(review.text, /[\u10A0-\u10FF]/)
})
