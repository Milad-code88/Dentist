import { useTranslation } from "react-i18next";
import AnimatedSection from "../../components/ui/AnimatedSection/AnimatedSection";
import generalImg from "../../assets/Allmänntandvård/general.png";
import aestheticImg from "../../assets/Estetisktandvård/Estetisk.png";
import emergencyImg from "../../assets/Akuttandvård/AkutBild.png";
import specialistImg from "../../assets/Specialisttandvård/Specialist.png";
import "./Treatments.css";

const Treatments = () => {
  const { t } = useTranslation("treatments");

  const items = [
    { key: "general", img: generalImg },
    { key: "aesthetic", img: aestheticImg },
    { key: "emergency", img: emergencyImg },
    { key: "specialist", img: specialistImg },
  ];

  return (
    <div className="treatments-page">
      <AnimatedSection className="treatments-page__header">
        <h1>{t("title")}</h1>
        <p>{t("subtitle")}</p>
      </AnimatedSection>

      <div className="treatments-page__list">
        {items.map(({ key, img }) => (
          <AnimatedSection key={key} className="treatments-page__card">
            <img src={img} alt={t(`items.${key}.title`)} className="treatments-page__img" />
            <div className="treatments-page__content">
              <h2>{t(`items.${key}.title`)}</h2>
              <p>{t(`items.${key}.desc`)}</p>
              <ul>
                <li>{t(`items.${key}.points.one`)}</li>
                <li>{t(`items.${key}.points.two`)}</li>
                <li>{t(`items.${key}.points.three`)}</li>
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
