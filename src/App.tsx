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
      {/* <Banner /> */}
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
    </div>
  );
};

export default App;
