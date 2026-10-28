import assert from "node:assert/strict"
import test from "node:test"
import { BATUMI_REVIEW_MAX_SCORE, batumiReviews } from "../lib/batumi-reviews.ts"

test("all three Airbnb reviews are present in every language", () => {
  const sourceIds = batumiReviews.en.map((review) => review.id)
  assert.deepEqual(sourceIds, ["1801951648932250915", "1798342412452830358", "1797604812838781287"])
  assert.equal(new Set(sourceIds).size, 3)
  assert.equal(BATUMI_REVIEW_MAX_SCORE, 5)
  for (const language of ["en", "ru", "ka"]) {
    assert.equal(batumiReviews[language].length, 3)
    assert.deepEqual(batumiReviews[language].map((review) => review.id), sourceIds)
    for (const review of batumiReviews[language]) {
      assert.equal(review.score, BATUMI_REVIEW_MAX_SCORE)
      assert.match(review.date, /^2026-10$/)
      assert.ok(review.author && review.title && review.text && review.dateLabel)
    }
  }
})

test("names and review summaries are localized", () => {
  assert.deepEqual(batumiReviews.en.map((review) => review.author), ["Miron", "Nur", "Gyeong-sik (경식)"])
  assert.deepEqual(batumiReviews.ru.map((review) => review.author), ["Мирон", "Нур", "Кёнсик (경식)"])
  assert.deepEqual(batumiReviews.ka.map((review) => review.author), ["მირონი", "ნური", "გიონგსიკი (경식)"])
  for (const review of batumiReviews.ru) assert.match(review.text, /[А-Яа-я]/)
  for (const review of batumiReviews.ka) assert.match(review.text, /[\u10A0-\u10FF]/)
  for (const review of batumiReviews.en) assert.equal(review.dateLabel, "October 2026")
  for (const review of batumiReviews.ru) assert.equal(review.dateLabel, "октябрь 2026 г.")
  for (const review of batumiReviews.ka) assert.equal(review.dateLabel, "2026 წლის ოქტომბერი")
})
