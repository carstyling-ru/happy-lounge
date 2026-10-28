import assert from "node:assert/strict"
import test from "node:test"
import { preventOrphans } from "../lib/typography.ts"

test("Russian prepositions stay with the following word and the hotel name", () => {
  assert.equal(
    preventOrphans("Остановитесь в Happy Lounge - ближе к морю, ближе к впечатлениям", "ru"),
    "Остановитесь в\u00a0Happy\u00a0Lounge - ближе к\u00a0морю, ближе к\u00a0впечатлениям",
  )
  assert.equal(preventOrphans("в Батуми", "ru"), "в\u00a0Батуми")
})

test("English articles and consecutive short words remain attached", () => {
  assert.equal(
    preventOrphans("A unique space for a comfortable stay, just 200 metres from the sea", "en"),
    "A\u00a0unique space for\u00a0a\u00a0comfortable stay, just 200 metres from\u00a0the\u00a0sea",
  )
  assert.equal(preventOrphans("at Happy Lounge", "en"), "at\u00a0Happy\u00a0Lounge")
  assert.equal(preventOrphans("an experience", "en"), "an\u00a0experience")
})

test("short words at a styled-text boundary bind to the next inline element", () => {
  assert.equal(preventOrphans("Всё, что нужно для ", "ru"), "Всё, что нужно для\u00a0")
  assert.equal(preventOrphans("Everything you need for a ", "en"), "Everything you need for\u00a0a\u00a0")
})

test("ordinary words and Georgian copy are left unchanged", () => {
  assert.equal(preventOrphans("Atmospheric staying together", "en"), "Atmospheric staying together")
  assert.equal(preventOrphans("впечатлениям комфортного проживания", "ru"), "впечатлениям комфортного проживания")
  assert.equal(preventOrphans("კომფორტული დარჩენა ბათუმში", "ka"), "კომფორტული დარჩენა ბათუმში")
})
