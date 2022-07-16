import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./i18n/en.json";

const DEFAULT_LANGUAGE = 'en';
const resources = {
  en: {
    translation: EN,
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: DEFAULT_LANGUAGE, 

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;