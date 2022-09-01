import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


import translationCS from './translations/cs.json';
import translationEN from './translations/en.json';

const resources = {
  cs: {translations: translationCS},
  en: {translations: translationEN}
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    preload: ["cs"],
    load: "all",
    fallbackLng: 'cs',
    resources,
    ns: ['translations'],
    defaultNS: 'translations'
  });

i18n.languages = ['cs', 'en'];

export default i18n;
