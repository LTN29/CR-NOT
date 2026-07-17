import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import vi from './locales/vi/translation.json';
import jp from './locales/jp/translation.json';

const resources = {
  en: { translation: en },
  vi: { translation: vi },
  jp: { translation: jp }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
