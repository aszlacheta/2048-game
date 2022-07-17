import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import EN from "./i18n/en.json";
import PL from "./i18n/pl.json";

const DEFAULT_LANGUAGE = 'en';
const resources = {
  en: {
    translation: EN,
  },
  pl: {
    translation: PL,
  }
};

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: ['en', 'pl'],
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;