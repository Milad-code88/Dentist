import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../ui/LanguageSwitcher/LanguageSwitcher";
import logoImg from "../../../assets/logo/Logo.png";
import { LiquidButton } from "../../ui/liquid-glass-button";
import "./Navbar.css";

const Navbar = () => {
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const getNavLinkClass = ({ isActive }) =>
    `navbar__link${isActive ? " navbar__link--active" : ""}`;

  return (
    <header className={`navbar-header${scrolled ? " navbar-header--scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Left Standalone Floating Logo Badge */}
        <Link to="/" className="navbar__logo-link" onClick={closeMenu}>
          <img src={logoImg} alt={t("navbar.brand")} className="navbar__logo-img" />
        </Link>

        {/* Center Floating Navigation Island */}
        <div className="navbar__main-island">
          <button
            type="button"
            className={`navbar__hamburger${isOpen ? " navbar__hamburger--open" : ""}`}
            aria-label={t("navbar.menu")}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`navbar__links${isOpen ? " navbar__links--open" : ""}`}>
            <div
              className="navbar__item navbar__item--has-dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className="navbar__link navbar__link--parent">
                {t("navbar.treatments")}
              </span>

              <ul
                className={`navbar__dropdown-menu${
                  dropdownOpen ? " navbar__dropdown-menu--open" : ""
                }`}
              >
                {[
                  { to: "/treatments", key: "navbar.dropdown.general" },
                  { to: "/treatments", key: "navbar.dropdown.aesthetic" },
                  { to: "/treatments", key: "navbar.dropdown.emergency" },
                  { to: "/treatments", key: "navbar.dropdown.specialist" },
                ].map(({ to, key }) => (
                  <li key={key}>
                    <NavLink to={to} className={getNavLinkClass} onClick={closeMenu}>
                      {t(key)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <NavLink to="/about" className={getNavLinkClass} onClick={closeMenu}>
              {t("navbar.about")}
            </NavLink>

            <NavLink to="/find-clinic" className={getNavLinkClass} onClick={closeMenu}>
              {t("navbar.findClinic")}
            </NavLink>
          </nav>
        </div>

        {/* Right Floating Actions Island */}
        <div className="navbar__actions-island">
          <LanguageSwitcher />

          <a href="tel:+493012345678" className="navbar__phone">
            <svg
              className="navbar__phone-icon"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{t("navbar.callUs")}</span>
          </a>

          <LiquidButton
            asChild
            variant="default"
            size="sm"
            className="navbar__book"
            onClick={closeMenu}
          >
            <Link to="/booking">{t("navbar.bookButton")}</Link>
          </LiquidButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
