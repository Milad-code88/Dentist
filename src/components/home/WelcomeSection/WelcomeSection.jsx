import { useTranslation } from "react-i18next";
import AnimatedSection from "../../ui/AnimatedSection/AnimatedSection";
import welcomeImg from "../../../assets/VälkommenBild/FamiljBild.png";
import "./WelcomeSection.css";

const WelcomeSection = () => {
  const { t } = useTranslation("home");

  const features = [
    { key: "experience" },
    { key: "technology" },
    { key: "care" },
  ];

  return (
    <AnimatedSection className="welcome-section">
      <div className="welcome-section__content">
        <h2 className="welcome-section__title">{t("welcome.title")}</h2>
        <p className="welcome-section__body">{t("welcome.body")}</p>
        <ul className="welcome-section__features">
          {features.map(({ key }) => (
            <li key={key} className="welcome-section__feature-item">
              <span className="welcome-section__feature-icon">✓</span>
              <span>{t(`welcome.features.${key}`)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="welcome-section__media">
        <img
          src={welcomeImg}
          alt={t("welcome.title")}
          className="welcome-section__image"
        />
      </div>
    </AnimatedSection>
  );
};

export default WelcomeSection;
