import assert from "node:assert/strict"
import test from "node:test"
import { runInNewContext } from "node:vm"

import {
  EXELY_CONTEXT,
  batumiRoomTypes,
  getBatumiBookingHref,
  getExelyBootstrapScript,
} from "../lib/exely-booking.ts"

function loaderEnvironment(language) {
  const scripts = []
  const head = {
    appendChild(script) { scripts.push(script) },
    removeChild(script) { scripts.splice(scripts.indexOf(script), 1) },
  }
  const document = {
    getElementsByTagName() { return [head] },
    createElement() { return {} },
  }
  const window = { document }
  runInNewContext(getExelyBootstrapScript(language), { window })
  return { window, scripts }
}

for (const language of ["en", "ru", "ka"]) {
  test(`bootstrap sets the supplied Batumi context and ${language} locale`, () => {
    const { window, scripts } = loaderEnvironment(language)
    assert.deepEqual(JSON.parse(JSON.stringify(window.bookingengine.integration.__cq)), [
      ["setContext", EXELY_CONTEXT, language],
      ["embed", "search-form", { container: "be-search-form" }],
    ])
    assert.equal(scripts.length, 1)
    assert.equal(scripts[0].src, "https://ge-ibe.hopenapi.com/integration/loader.js")
    assert.equal(scripts[0].async, true)
  })

  test(`booking link keeps Batumi and ${language}, without a room filter`, () => {
    const params = new URLSearchParams(getBatumiBookingHref(language).slice(1))
    assert.equal(params.get("city"), "batumi")
    assert.equal(params.get("lang"), language)
    assert.equal(params.get("be-booking-open"), "true")
    assert.equal(params.has("room-type"), false)
  })
}

test("loader tries all three supplied hosts in order", () => {
  const { scripts } = loaderEnvironment("ru")
  scripts[0].onerror()
  assert.equal(scripts[0].src, "https://ibe.hopenapi.com/integration/loader.js")
  scripts[0].onerror()
  assert.equal(scripts[0].src, "https://ibe.behopenapi.com/integration/loader.js")
  scripts[0].onerror()
  assert.equal(scripts.length, 0)
})

test("successful loader does not start a fallback or duplicate loader", () => {
  const { window, scripts } = loaderEnvironment("en")
  window.bookingengine.integration.loaded = true
  scripts[0].onload()
  runInNewContext(getExelyBootstrapScript("en"), { window })
  assert.equal(scripts.length, 1)
})

test("room links use the IDs supplied by Exely", () => {
  assert.deepEqual(batumiRoomTypes.map(({ id }) => id), ["5081198", "5081199", "5081200"])
  for (const room of batumiRoomTypes) {
    const params = new URLSearchParams(getBatumiBookingHref("ru", room.id).slice(1))
    assert.equal(params.get("room-type"), room.id)
    assert.equal(params.get("city"), "batumi")
  }
})
