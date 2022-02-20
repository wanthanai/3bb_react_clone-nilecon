import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//! Languages
import En from '../locales/en/translation.json'
import Th from '../locales/th/translation.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: En
      },
      th: {
        translation: Th
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
  });