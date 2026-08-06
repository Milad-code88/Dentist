import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import heroVideo from "../../../assets/Video_heroOverly/Heroverly.mp4";
import { LiquidButton } from "../../ui/liquid-glass-button";
import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation("home");

  return (
    <section className="hero">
      <video
        className="hero__background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero__overlay" />

      <motion.div
        className="hero__container"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="hero__text-content">
          <h1 className="hero__title">{t("hero.title")}</h1>
          <p className="hero__subtitle">{t("hero.subtitle")}</p>
        </div>

        <div className="hero__actions">
          <LiquidButton
            asChild
            variant="default"
            size="sm"
            className="hero__cta hero__cta--primary"
          >
            <Link to="/booking">{t("hero.cta")}</Link>
          </LiquidButton>
          <LiquidButton
            asChild
            variant="outline"
            size="sm"
            className="hero__cta hero__cta--secondary"
          >
            <Link to="/treatments">{t("hero.ctaSecondary")}</Link>
          </LiquidButton>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
