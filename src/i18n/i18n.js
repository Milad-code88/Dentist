import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Static imports of locale JSON so Vite bundles them at build time.
import svCommon from "./locales/sv/common.json";
import svHome from "./locales/sv/home.json";
import svBooking from "./locales/sv/booking.json";
import svAbout from "./locales/sv/about.json";
import svTreatments from "./locales/sv/treatments.json";
import svClinic from "./locales/sv/clinic.json";

import faCommon from "./locales/fa/common.json";
import faHome from "./locales/fa/home.json";
import faBooking from "./locales/fa/booking.json";
import faAbout from "./locales/fa/about.json";
import faTreatments from "./locales/fa/treatments.json";
import faClinic from "./locales/fa/clinic.json";

import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enBooking from "./locales/en/booking.json";
import enAbout from "./locales/en/about.json";
import enTreatments from "./locales/en/treatments.json";
import enClinic from "./locales/en/clinic.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      sv: {
        common: svCommon,
        home: svHome,
        booking: svBooking,
        about: svAbout,
        treatments: svTreatments,
        clinic: svClinic,
      },
      fa: {
        common: faCommon,
        home: faHome,
        booking: faBooking,
        about: faAbout,
        treatments: faTreatments,
        clinic: faClinic,
      },
      en: {
        common: enCommon,
        home: enHome,
        booking: enBooking,
        about: enAbout,
        treatments: enTreatments,
        clinic: enClinic,
      },
    },
    fallbackLng: "sv",
    supportedLngs: ["sv", "fa", "en"],
    ns: ["common", "home", "booking", "about", "treatments", "clinic"],
    defaultNS: "common",
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "appLanguage",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false, // React already escapes by default.
    },
    returnObjects: true,
  });

export default i18n;
