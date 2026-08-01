import "./Home.css";
import Hero from "../../components/home/Hero/Hero";
import WelcomeSection from "../../components/home/WelcomeSection/WelcomeSection";
import PromoSection from "../../components/home/PromoSection/PromoSection";
import TreatmentPreview from "../../components/home/TreatmentPreview/TreatmentPreview";
import Reviews from "../../components/home/Reviews/Reviews";

const Home = () => (
  <main className="page home-page">
    <Hero />
    <WelcomeSection />
    <PromoSection />
    <TreatmentPreview />
    <Reviews />
  </main>
);

export default Home;
