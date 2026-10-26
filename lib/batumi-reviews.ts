type ReviewLanguage = "en" | "ru" | "ka"

// Concise paraphrases of the five Expedia reviews, not verbatim quotations.
const reviews = [
  {
    id: "6abf669e00c5b4289f1af452",
    date: "2026-10-02",
    score: 10,
    author: { en: "Valeri", ru: "Валерий", ka: "ვალერი" },
    text: {
      en: "Welcoming staff, restful capsules and a handy location.",
      ru: "Приветливый персонал, уютные капсулы и удобное расположение.",
      ka: "სტუმარმა შეაქო პერსონალი, კაფსულები და მდებარეობა.",
    },
  },
  {
    id: "6aba1c63287ca5052544e1fe",
    date: "2026-09-28",
    score: 10,
    author: { en: "Yuliya", ru: "Юлия", ka: "იულია" },
    text: {
      en: "A newly opened, tidy hotel with a welcoming team.",
      ru: "Новый, чистый отель с гостеприимной командой.",
      ka: "სტუმარს მოეწონა ახალი, სუფთა სასტუმრო და პერსონალის სტუმართმოყვარეობა.",
    },
  },
  {
    id: "6ac5e0b00503191a1ef82d6a",
    date: "2026-10-07",
    score: 10,
    author: { en: "Alexander", ru: "Александр", ka: "ალექსანდრე" },
    text: {
      en: "An affordable base near shops and restaurants, with private capsules and attentive service.",
      ru: "Доступное жильё рядом с магазинами и ресторанами, с приватными капсулами и внимательным персоналом.",
      ka: "სტუმარმა აღნიშნა ხელმისაწვდომი ფასი, პირადი სივრცე, კარგი მომსახურება და ახლომდებარე მაღაზიები.",
    },
  },
  {
    id: "6abf4f2100c5b4289f198665",
    date: "2026-10-02",
    score: 10,
    author: { en: "Ekaterina", ru: "Екатерина", ka: "ეკატერინა" },
    text: {
      en: "Courteous reception, fresh bedding and a dedicated women's capsule area stood out.",
      ru: "Понравились вежливое обслуживание, чистое постельное бельё и отдельная зона капсул для женщин.",
      ka: "სტუმარმა შეაქო მისაღების პერსონალი, სუფთა თეთრეული და ქალებისთვის ცალკე კაფსულების ზონა.",
    },
  },
  {
    id: "6abf4b760503191a1e4d0d98",
    date: "2026-10-02",
    score: 10,
    author: { en: "Dmitrii", ru: "Дмитрий", ka: "დმიტრი" },
    text: {
      en: "A positive first capsule stay: pristine facilities, kitchenette and well-equipped sleeping pods.",
      ru: "Первый опыт ночёвки в капсуле оказался удачным: новые помещения, мини-кухня и хорошее оснащение.",
      ka: "კაფსულაში პირველმა ღამემ კარგი შთაბეჭდილება დატოვა: ახალი სივრცე, პატარა სამზარეულო და კომფორტული კაფსულა.",
    },
  },
] as const

const ratingLabels = { en: "Excellent", ru: "Отлично", ka: "შესანიშნავია" }

function localizeReviews(language: ReviewLanguage) {
  return reviews.map((review) => ({
    id: review.id,
    date: review.date,
    score: review.score,
    author: review.author[language],
    title: ratingLabels[language],
    text: review.text[language],
  }))
}

export const batumiReviews = {
  en: localizeReviews("en"),
  ru: localizeReviews("ru"),
  ka: localizeReviews("ka"),
}
