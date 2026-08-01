import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import promoVideo from "../../../assets/promo_meda video/promo_media.mp4";
import { LiquidButton } from "../../ui/liquid-glass-button";
import "./PromoSection.css";

const PromoSection = () => {
  const { t } = useTranslation("home");

  return (
    <section className="promo" aria-label={t("promo.ariaLabel")}>
      <video
        className="promo__media-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={promoVideo} type="video/mp4" />
      </video>

      <div className="promo__warmth" aria-hidden="true" />
      <div className="promo__overlay" aria-hidden="true" />

      <motion.div
        className="promo__content"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="promo__eyebrow">{t("promo.eyebrow")}</p>
        <h2 className="promo__title">{t("promo.title")}</h2>
        <p className="promo__subtitle">{t("promo.subtitle")}</p>

        <div className="promo__actions">
          <LiquidButton
            asChild
            variant="default"
            size="default"
            className="promo__cta promo__cta--primary"
          >
            <Link to="/booking">{t("promo.cta")}</Link>
          </LiquidButton>
        </div>
      </motion.div>
    </section>
  );
};

export default PromoSection;
