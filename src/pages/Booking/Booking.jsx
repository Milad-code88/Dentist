import { useTranslation } from "react-i18next";
import AnimatedSection from "../../components/ui/AnimatedSection/AnimatedSection";
import BookingForm from "../../components/booking/BookingForm/BookingForm";
import "./Booking.css";

const Booking = () => {
  const { t } = useTranslation("booking");

  return (
    <div className="booking-page">
      <AnimatedSection className="booking-page__header">
        <h1>{t("form.title")}</h1>
        <p>{t("form.subtitle")}</p>
      </AnimatedSection>
      <AnimatedSection className="booking-page__container">
        <BookingForm />
      </AnimatedSection>
    </div>
  );
};

export default Booking;
