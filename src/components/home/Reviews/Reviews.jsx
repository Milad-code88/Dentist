import { useTranslation } from "react-i18next";
import AnimatedSection from "../../ui/AnimatedSection/AnimatedSection";
import "./Reviews.css";

const Reviews = () => {
  const { t } = useTranslation("common");

  const reviews = [
    { key: "one" },
    { key: "two" },
    { key: "three" },
  ];

  return (
    <AnimatedSection className="reviews">
      <header className="reviews__header">
        <h2 className="reviews__title">{t("reviews.title")}</h2>
        <p className="reviews__subtitle">{t("reviews.subtitle")}</p>
      </header>

      <div className="reviews__grid">
        {reviews.map(({ key }) => (
          <article key={key} className="reviews__card">
            <div className="reviews__stars" aria-label="5 / 5">
              {"★★★★★"}
            </div>
            <blockquote className="reviews__quote">
              {t(`reviews.items.${key}.quote`)}
            </blockquote>
            <p className="reviews__name">{t(`reviews.items.${key}.name`)}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Reviews;
