import { useRef } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LANGUAGES = [
  { code: "sv", label: "SV" },
  { code: "fa", label: "FA" },
  { code: "en", label: "EN" },
];

const STORAGE_KEY = "appLanguage";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation("common");
  const current = (i18n.language || "sv").split("-")[0];
  const pillRef = useRef(null);

  const changeLanguage = (lng) => {
    if (lng === current) return;
    i18n.changeLanguage(lng);
    try {
      window.localStorage.setItem(STORAGE_KEY, lng);
    } catch {}
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
  };

  return (
    <div
      className="language-switcher"
      role="group"
      aria-label={t("languageSwitcher.label", "Språkval / Language")}
      ref={pillRef}
    >
      {LANGUAGES.map(({ code, label }) => {
        const isActive = code === current;
        return (
          <button
            key={code}
            type="button"
            className={`language-switcher__option${
              isActive ? " language-switcher__option--active" : ""
            }`}
            onClick={() => changeLanguage(code)}
            aria-pressed={isActive}
            lang={code}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
