type ReviewLanguage = "en" | "ru" | "ka"

export const BATUMI_REVIEW_MAX_SCORE = 5

// Airbnb shows relative dates; retain month precision without guessing exact days.
// Concise paraphrases of the three reviews on the supplied Airbnb listing.
const reviews = [
  {
    id: "1801951648932250915",
    date: "2026-10",
    score: 5,
    author: { en: "Miron", ru: "Мирон", ka: "მირონი" },
    text: {
      en: "Everything was excellent.",
      ru: "Всё отлично.",
      ka: "ყველაფერი შესანიშნავი იყო.",
    },
  },
  {
    id: "1798342412452830358",
    date: "2026-10",
    score: 5,
    author: { en: "Nur", ru: "Нур", ka: "ნური" },
    text: {
      en: "A positive, unusual stay with no issues. The place was clean and orderly.",
      ru: "Необычный и приятный опыт. Всё прошло без проблем, было чисто и аккуратно.",
      ka: "უჩვეულო და სასიამოვნო გამოცდილება: ყველაფერი უპრობლემოდ, სუფთად და მოწესრიგებულად იყო.",
    },
  },
  {
    id: "1797604812838781287",
    date: "2026-10",
    score: 5,
    author: { en: "Gyeong-sik (경식)", ru: "Кёнсик (경식)", ka: "გიონგსიკი (경식)" },
    text: {
      en: "A clean, spacious place where it was easy to relax.",
      ru: "Чистое и просторное жильё, где можно хорошо отдохнуть.",
      ka: "სუფთა და ფართო საცხოვრებელი, სადაც დასვენება სასიამოვნო იყო.",
    },
  },
] as const

const ratingLabels = { en: "Excellent", ru: "Отлично", ka: "შესანიშნავია" }
const monthLabels = {
  "2026-10": { en: "October 2026", ru: "октябрь 2026 г.", ka: "2026 წლის ოქტომბერი" },
} as const

function localizeReviews(language: ReviewLanguage) {
  return reviews.map((review) => ({
    id: review.id,
    date: review.date,
    dateLabel: monthLabels[review.date][language],
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
