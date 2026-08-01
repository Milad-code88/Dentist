import { useState } from "react";
import { useTranslation } from "react-i18next";
import TimeSlotPicker from "../TimeSlotPicker/TimeSlotPicker";
import { LiquidButton } from "../../ui/liquid-glass-button";
import "./BookingForm.css";

const BookingForm = () => {
  const { t } = useTranslation("booking");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "general",
    date: "",
    time: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleTimeSelect = (time) => {
    setFormData((prev) => ({ ...prev, time }));
    if (errors.time) {
      setErrors((prev) => ({ ...prev, time: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t("validation.required");
    if (!formData.email.trim()) {
      newErrors.email = t("validation.required");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("validation.email");
    }
    if (!formData.phone.trim()) newErrors.phone = t("validation.required");
    if (!formData.date) newErrors.date = t("validation.required");
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="booking-form__confirmation">
        <h2>{t("confirmation.title")}</h2>
        <p>{t("confirmation.body")}</p>
        <LiquidButton
          variant="default"
          size="lg"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              treatment: "general",
              date: "",
              time: "",
              message: "",
            });
          }}
        >
          {t("confirmation.newBooking")}
        </LiquidButton>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="booking-form__grid">
        <div className="booking-form__field">
          <label htmlFor="name">{t("form.name")}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("form.namePlaceholder")}
            className={errors.name ? "booking-form__input--error" : ""}
          />
          {errors.name && <span className="booking-form__error">{errors.name}</span>}
        </div>

        <div className="booking-form__field">
          <label htmlFor="email">{t("form.email")}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("form.emailPlaceholder")}
            className={errors.email ? "booking-form__input--error" : ""}
          />
          {errors.email && <span className="booking-form__error">{errors.email}</span>}
        </div>

        <div className="booking-form__field">
          <label htmlFor="phone">{t("form.phone")}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t("form.phonePlaceholder")}
            className={errors.phone ? "booking-form__input--error" : ""}
          />
          {errors.phone && <span className="booking-form__error">{errors.phone}</span>}
        </div>

        <div className="booking-form__field">
          <label htmlFor="treatment">{t("form.treatment")}</label>
          <select
            id="treatment"
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
          >
            <option value="general">{t("treatments.general")}</option>
            <option value="aesthetic">{t("treatments.aesthetic")}</option>
            <option value="emergency">{t("treatments.emergency")}</option>
            <option value="specialist">{t("treatments.specialist")}</option>
          </select>
        </div>

        <div className="booking-form__field">
          <label htmlFor="date">{t("form.date")}</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            min={new Date().toISOString().split("T")[0]}
            onChange={handleChange}
            className={errors.date ? "booking-form__input--error" : ""}
          />
          {errors.date && <span className="booking-form__error">{errors.date}</span>}
        </div>
      </div>

      <TimeSlotPicker
        selectedTime={formData.time}
        onSelectTime={handleTimeSelect}
      />

      <div className="booking-form__field booking-form__field--full">
        <label htmlFor="message">{t("form.message")}</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder={t("form.messagePlaceholder")}
        />
      </div>

      <div className="booking-form__actions">
        <LiquidButton
          type="submit"
          variant="default"
          size="lg"
          disabled={loading}
        >
          {loading ? t("form.submitting") : t("form.submit")}
        </LiquidButton>
      </div>
    </form>
  );
};

export default BookingForm;
