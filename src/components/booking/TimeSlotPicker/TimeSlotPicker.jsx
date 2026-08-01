import { useTranslation } from "react-i18next";
import "./TimeSlotPicker.css";

const TimeSlotPicker = ({ selectedTime, onSelectTime }) => {
  const { t } = useTranslation("booking");

  const morningSlots = ["08:30", "09:15", "10:00", "10:45", "11:30"];
  const afternoonSlots = ["13:00", "13:45", "14:30", "15:15", "16:00"];

  return (
    <div className="time-slot-picker">
      <h3 className="time-slot-picker__title">{t("timeSlots.title")}</h3>
      <div className="time-slot-picker__group">
        <span className="time-slot-picker__label">{t("timeSlots.morning")}</span>
        <div className="time-slot-picker__grid">
          {morningSlots.map((time) => (
            <button
              key={time}
              type="button"
              className={`time-slot-picker__btn ${selectedTime === time ? "time-slot-picker__btn--selected" : ""}`}
              onClick={() => onSelectTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      <div className="time-slot-picker__group">
        <span className="time-slot-picker__label">{t("timeSlots.afternoon")}</span>
        <div className="time-slot-picker__grid">
          {afternoonSlots.map((time) => (
            <button
              key={time}
              type="button"
              className={`time-slot-picker__btn ${selectedTime === time ? "time-slot-picker__btn--selected" : ""}`}
              onClick={() => onSelectTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeSlotPicker;
