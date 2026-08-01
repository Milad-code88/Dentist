import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "./components/layout/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Booking from "./pages/Booking/Booking";
import Treatments from "./pages/Treatments/Treatments";
import FindClinic from "./pages/FindClinic/FindClinic";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const applyDirection = (lang) => {
      const dir = lang === "fa" ? "rtl" : "ltr";
      document.documentElement.dir = dir;
      document.documentElement.lang = lang || "sv";
    };

    applyDirection(i18n.language);

    const handler = (lang) => applyDirection(lang);
    i18n.on("languageChanged", handler);

    return () => {
      i18n.off("languageChanged", handler);
    };
  }, [i18n]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="booking" element={<Booking />} />
          <Route path="treatments" element={<Treatments />} />
          <Route path="find-clinic" element={<FindClinic />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
