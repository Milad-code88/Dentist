import { useTranslation } from "react-i18next";
import AnimatedSection from "../../components/ui/AnimatedSection/AnimatedSection";
import leadImg from "../../assets/Vårt team/Dr. Sara Lindqvist.png";
import hygienistImg from "../../assets/Vårt team/Mona Eriksson.png";
import assistantImg from "../../assets/Vårt team/yasmin.png";
import "./About.css";

const About = () => {
  const { t } = useTranslation("about");

  const team = [
    { key: "lead", img: leadImg },
    { key: "hygienist", img: hygienistImg },
    { key: "assistant", img: assistantImg },
  ];

  return (
    <div className="about-page">
      <AnimatedSection className="about-page__header">
        <h1>{t("title")}</h1>
        <p>{t("subtitle")}</p>
      </AnimatedSection>

      <AnimatedSection className="about-page__section">
        <h2>{t("story.title")}</h2>
        <p>{t("story.body")}</p>
      </AnimatedSection>

      <AnimatedSection className="about-page__section">
        <h2>{t("mission.title")}</h2>
        <p>{t("mission.body")}</p>
      </AnimatedSection>

      <AnimatedSection className="about-page__team">
        <h2>{t("team.title")}</h2>
        <p className="about-page__team-subtitle">{t("team.subtitle")}</p>
        <div className="about-page__team-grid">
          {team.map(({ key, img }) => (
            <div key={key} className="about-page__team-card">
              <img src={img} alt={t(`team.members.${key}.name`)} className="about-page__team-img" />
              <h3>{t(`team.members.${key}.name`)}</h3>
              <p>{t(`team.members.${key}.role`)}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;
