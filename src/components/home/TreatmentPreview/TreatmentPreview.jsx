import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AnimatedSection from "../../ui/AnimatedSection/AnimatedSection";
import generalImg from "../../../assets/Allmänntandvård/general.png";
import aestheticImg from "../../../assets/Estetisktandvård/Estetisk.png";
import emergencyImg from "../../../assets/Akuttandvård/AkutBild.png";
import specialistImg from "../../../assets/Specialisttandvård/Specialist.png";
import "./TreatmentPreview.css";

const TreatmentPreview = () => {
  const { t } = useTranslation("home");

  const items = [
    { key: "general", img: generalImg },
    { key: "aesthetic", img: aestheticImg },
    { key: "emergency", img: emergencyImg },
    { key: "specialist", img: specialistImg },
  ];

  return (
    <AnimatedSection className="treatment-preview">
      <header className="treatment-preview__header">
        <h2 className="treatment-preview__title">{t("treatmentsPreview.title")}</h2>
        <p className="treatment-preview__subtitle">{t("treatmentsPreview.subtitle")}</p>
      </header>

      <div className="treatment-preview__grid">
        {items.map(({ key, img }) => (
          <article key={key} className="treatment-preview__card">
            <div className="treatment-preview__media">
              <img src={img} alt={t(`treatmentsPreview.items.${key}.title`)} className="treatment-preview__image" />
            </div>
            <div className="treatment-preview__body">
              <h3 className="treatment-preview__card-title">{t(`treatmentsPreview.items.${key}.title`)}</h3>
              <p className="treatment-preview__card-desc">{t(`treatmentsPreview.items.${key}.desc`)}</p>
              <Link to="/treatments" className="treatment-preview__link">
                {t("treatmentsPreview.readMore")} →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default TreatmentPreview;
