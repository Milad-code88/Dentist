import { useTranslation } from "react-i18next";
import AnimatedSection from "../../components/ui/AnimatedSection/AnimatedSection";
import ClinicMap from "../../components/map/ClinicMap/ClinicMap";
import clinicImg from "../../assets/find_klinik/find_klinik.png";
import "./FindClinic.css";

const FindClinic = () => {
  const { t } = useTranslation("clinic");

  return (
    <div className="find-clinic-page">
      <AnimatedSection className="find-clinic-page__header">
        <h1>{t("title")}</h1>
        <p>{t("subtitle")}</p>
      </AnimatedSection>

      <div className="find-clinic-page__grid">
        <AnimatedSection className="find-clinic-page__info">
          <h2>{t("address.label")}</h2>
          <p className="find-clinic-page__val">{t("address.value")}</p>

          <h2>{t("phone.label")}</h2>
          <p className="find-clinic-page__val">{t("phone.value")}</p>

          <h2>{t("email.label")}</h2>
          <p className="find-clinic-page__val">{t("email.value")}</p>

          <h2>{t("hours.label")}</h2>
          <p className="find-clinic-page__val">{t("hours.value")}</p>
        </AnimatedSection>

        <AnimatedSection className="find-clinic-page__media">
          <img src={clinicImg} alt={t("title")} className="find-clinic-page__img" />
        </AnimatedSection>
      </div>

      <AnimatedSection className="find-clinic-page__map-section">
        <h2>{t("mapTitle")}</h2>
        <ClinicMap />
      </AnimatedSection>
    </div>
  );
};

export default FindClinic;
