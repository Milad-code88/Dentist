import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../ui/LanguageSwitcher/LanguageSwitcher";
import logoImg from "../../../assets/logo/Logo.png";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation("common");
  const year = new Date().getFullYear();

  const quickLinks = [
    { to: "/", key: "navbar.brand" },
    { to: "/treatments", key: "navbar.treatments" },
    { to: "/about", key: "navbar.about" },
    { to: "/find-clinic", key: "navbar.findClinic" },
    { to: "/booking", key: "navbar.bookButton" },
  ];

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo-link">
            <img src={logoImg} alt={t("navbar.brand")} className="footer__logo-img" />
          </Link>
          <p className="footer__tagline">{t("footer.tagline")}</p>
          <LanguageSwitcher />
        </div>

        <nav className="footer__col" aria-label={t("footer.quickLinks")}>
          <h3 className="footer__heading">{t("footer.quickLinks")}</h3>
          <ul className="footer__list">
            {quickLinks.map(({ to, key }) => (
              <li key={to} className="footer__list-item">
                <Link to={to} className="footer__link">
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3 className="footer__heading">{t("footer.contact")}</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <span className="footer__label">{t("footer.address")}:</span>
              <br />
              <span className="footer__value">Friedrichstraße 42, 10117 Berlin</span>
            </li>
            <li className="footer__list-item">
              <span className="footer__label">{t("footer.phone")}:</span>
              <br />
              <a className="footer__link" href="tel:+493012345678">
                +49 30 1234 5678
              </a>
            </li>
            <li className="footer__list-item">
              <span className="footer__label">{t("footer.email")}:</span>
              <br />
              <a className="footer__link" href="mailto:kontakt@tandlakaren.se">
                kontakt@tandlakaren.se
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <p className="footer__rights">{t("footer.rights", { year })}</p>
      </div>
    </footer>
  );
};

export default Footer;
