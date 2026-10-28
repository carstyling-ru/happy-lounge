const shortWords = {
  en: new Set(["a", "an", "the", "at", "in", "on", "of", "for", "from", "to", "with"]),
  ru: new Set(["в", "во", "с", "со", "к", "ко", "у", "о", "об", "на", "по", "за", "из", "от", "до", "для", "без", "при", "под", "над"]),
}

export function preventOrphans(text: string, language: "en" | "ru" | "ka") {
  if (language === "ka") return text

  const parts = text.split(/([ \t]+)/)
  for (let index = 0; index < parts.length - 1; index += 2) {
    if (shortWords[language].has(parts[index].toLowerCase())) {
      parts[index + 1] = "\u00a0"
    }
  }

  return parts.join("").replaceAll("Happy Lounge", "Happy\u00a0Lounge")
}
