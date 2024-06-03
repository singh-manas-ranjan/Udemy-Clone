import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import OvalButton from "./components/ovalButtons/OvalButtons";
import SubHeader from "./components/SubHeader/SubHeader";
import { useEffect, useState } from "react";
import MainNavLinks from "./assets/MainNavLinks";
import MostPopularLinks from "./assets/MostPopularLinks";
import CardCarousel from "./components/cardsCarousel/CardCarousel";
import CategoriesData from "./assets/CategoriesData";
import Language from "./components/language/Language";
import Languages from "./assets/Languages";
import PartnerLogos from "./components/partnerLogos/PartnerLogos";
import Logos from "./assets/Logos";
import GoalsList from "./assets/Goals";
import Goals from "./components/goals/Goals";
import SubscriptionPlans from "./assets/SubscriptionPlans";
import Subscription from "./components/subscription/Subscription";
import TestimonialsData from "./assets/TestimonialsData";
import Banner from "./components/banner/Banner";
import TrendReport from "./components/trendReport/TrendReport";
import TestimonialsContainer from "./components/Testimonials/TestimonialsContainer";
import Footer from "./components/footer/Footer";
import FooterData from "./assets/FooterData";

const App = () => {
  const mainNavLinks = MainNavLinks;
  const mostPopularLinks = MostPopularLinks;
  const [navActive, setNavActive] = useState(false);
  const [isLanguageActive, setLanguageActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  useEffect(() => {
    document.body.style.overflow = isLanguageActive ? "hidden" : "auto";
  }, [isLanguageActive]);

  const handleNavIconClick = () => {
    setNavActive((prev) => !prev);
  };

  const onLanguageBtnClick = () => {
    setLanguageActive((prev) => !prev);
  };

  const languageGroup = [];

  for (let i = 0; i < Languages.length; i += 3) {
    const group = Languages.slice(i, i + 3);
    languageGroup.push(group);
  }

  const onLanguageSelected = (lang: string) => {
    setSelectedLanguage(lang);
  };

  return (
    <div className="app">
      <Banner />
      <Language
        languages={languageGroup}
        isLanguageActive={isLanguageActive}
        onLanguageBtnClick={onLanguageBtnClick}
        onLanguageSelected={onLanguageSelected}
        selectedLang={selectedLanguage}
      />
      <Navbar
        categoriesLink={CategoriesData}
        mostPopularLinks={mostPopularLinks}
        mainNavLinks={mainNavLinks}
        isNavActive={navActive}
        onNavIconClick={handleNavIconClick}
        onLanguageBtnClick={onLanguageBtnClick}
      />
      <Hero />
      <SubHeader />
      <OvalButton />
      <CardCarousel />
      <PartnerLogos logos={Logos} />
      <Goals goalsList={GoalsList} />
      <Subscription plans={SubscriptionPlans} />
      <TestimonialsContainer testimonials={TestimonialsData} />
      <TrendReport />
      <Footer footerData={FooterData} />
    </div>
  );
};

export default App;
