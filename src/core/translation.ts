import fs from "fs";
import path from "path";
import translations from "../data/translations.json";

type Translations = Record<string, Record<string, string>>;
const translationsTyped: Translations = translations;

const TRANSLATIONS_PATH = path.resolve(__dirname, "../data/translations.json");

function loadTranslations(): Translations {
    const data = fs.readFileSync(TRANSLATIONS_PATH, "utf-8");
    const rawTranslations = JSON.parse(data) as Translations;
  
    // Normalizar as chaves do JSON
    const normalizedTranslations: Translations = {};
    for (const [word, translationsByLang] of Object.entries(rawTranslations)) {
      normalizedTranslations[normalizeText(word)] = translationsByLang;
    }
  
    return normalizedTranslations;
  }
  
  
  export function addTranslation(
    word: string,
    translationsByLang: Record<string, string>
  ): void {
    const translations = loadTranslations();
    const normalizedWord = normalizeText(word); // Normalizar a palavra
  
    if (translations[normalizedWord]) {
      throw new Error(`A palavra '${word}' já existe no dicionário.`);
    }
  
    translations[normalizedWord] = translationsByLang;
  
    fs.writeFileSync(
      TRANSLATIONS_PATH,
      JSON.stringify(translations, null, 2),
      "utf-8"
    );
    console.log(`Tradução adicionada: ${normalizedWord} -> ${JSON.stringify(translationsByLang)}`);
  }
  
  
  export function getTranslation(word: string, lang: string): string | null {
    const translations = loadTranslations();
    const normalizedWord = normalizeText(word);
    const wordTranslations = translations[normalizedWord];
  
    return wordTranslations ? wordTranslations[lang.toLowerCase()] || null : null;
  }
  

function normalizeText(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}
