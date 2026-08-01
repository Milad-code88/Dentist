# 🦷 Tandläkare – Modern Tandvårdsklinik Web App

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla_Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-SV%20%7C%20FA%20%7C%20EN-0052B4?style=for-the-badge)

En exklusiv, modern och fullt responsiv webbapplikation för en tandvårdsklinik. Projektet kombinerar innovativ **Floating Island Navbar**-arkitektur, ett högteknologiskt **Glassmorphism Design System**, dynamiska bakgrundsvideo-sektioner, interaktiv nätbokning samt komplett flerspråksstöd på svenska, persiska och engelska.

---

## ✨ Huvudfunktioner (Key Features)

- 🛸 **Floating Island Navbar (Flytande Kapselmeny):**
  - Svävande kapsel-header med rundat logotypsmärke till vänster, behandlingsdropdown i mitten och språkbytare samt flytande glas-bokningsknapp (*Liquid Glass Button*) till höger.
  - Fixerad högst upp med `position: fixed` och perfekt anpassat topputrymme som aldrig skymmer bakgrundsvideon.

- 🌍 **Flerspråksstöd (Multi-Language i18n):**
  - Fullständigt stöd för **Svenska (SV)**, **Persiska (FA)** och **Engelska (EN)** med direkt språkväxling utan omvisning.

- 💎 **Glassmorphic Design System:**
  - Frostat glas-effekter (`backdrop-filter: blur(24px)`), mjuka färgtoningsrubriker (*Glassmorphic Text Gradient*), svävande skuggor och mikro-animationer.

- 📅 **Interaktiv Akut- & Nätbokning:**
  - Komplett bokningssystem med behandlingstyp, kalenderväljare och tidslots-plockare.

- 🗺️ **Karta & Klinikinformation:**
  - Interaktiv Leaflet-karta med anpassad djupskuggad glasram och vägbeskrivning.

- 📱 **100% Responsiv:**
  - Sömlös anpassning för alla skärmstorlekar (Mobil, Surfplatta, Desktop).

---

## 🛠️ Teknikstack (Tech Stack)

| Kategori | Tekniker / Bibliotek |
| :--- | :--- |
| **Frontend Framework** | React 18, Vite |
| **Routing** | React Router DOM v6 |
| **Internationalisering** | i18next, react-i18next |
| **Kartor & Geo** | Leaflet, React Leaflet |
| **Styling** | Vanilla CSS3 (Custom Design System & Tokens) |
| **Typografi** | Google Fonts (*DM Serif Text*, *Holtwood One SC*, *Shrikhand*) |

---

## 📂 Projektstruktur (Project Structure)

```text
TandLäkare/
├── public/
├── src/
│   ├── assets/              # Bilder, logotyper & MP4-videor för hero & promo
│   ├── components/          # Reusable UI, layout & sektions-komponenter
│   │   ├── booking/         # Bokningsformulär & tidsval
│   │   ├── home/            # Hero, WelcomeSection, PromoSection, TreatmentPreview, Reviews
│   │   ├── layout/          # Navbar (Floating Island), Footer, Layout
│   │   ├── map/             # ClinicMap (Leaflet)
│   │   └── ui/              # Liquid Glass Button, LanguageSwitcher, AnimatedSection
│   ├── i18n/                # i18n konfiguration & översättningsfiler (sv, fa, en)
│   ├── pages/               # Huvudsidor (Home, Treatments, About, FindClinic, Booking)
│   └── styles/              # Global CSS & design tokens (variables.css, index.css)
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Kom Igång (Getting Started)

### Förutsättningar
- [Node.js](https://nodejs.org/) (version 18 eller nyare)
- npm (eller yarn / pnpm)

### Installation & Körning

1. **Klona repositoryt:**
   ```bash
   git clone https://github.com/Milad-code88/Dentist.git
   cd Dentist
   ```

2. **Installera beroenden:**
   ```bash
   npm install
   ```

3. **Starta utvecklingsservern:**
   ```bash
   npm run dev
   ```
   *Webbappen startas på `http://localhost:5173`.*

4. **Bygg för produktion:**
   ```bash
   npm run build
   ```

---

## 📝 Licens & Upphovsrätt

Skapat av [Milad-code88](https://github.com/Milad-code88). Alla rättigheter förbehållna.
