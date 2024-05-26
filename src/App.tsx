import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import OvalButton from "./components/ovalButtons/OvalButtons";
import SubHeader from "./components/SubHeader/SubHeader";
import { useState } from "react";
import MainNavLinks from "./assets/MainNavLinks";
import MostPopularLinks from "./assets/MostPopularLinks";
import CardCarousel from "./components/cardsCarousel/CardCarousel";

const App = () => {
  const mainNavLinks = MainNavLinks;
  const mostPopularLinks = MostPopularLinks;
  const [navActive, setNavActive] = useState(false);

  const handleNavIconClick = () => {
    setNavActive((prev) => !prev);
  };

  return (
    <div className="app">
      {/* <Banner /> */}
      <Navbar
        mostPopularLinks={mostPopularLinks}
        mainNavLinks={mainNavLinks}
        isNavActive={navActive}
        onNavIconClick={handleNavIconClick}
      />
      <Hero />
      <SubHeader />
      <OvalButton />
      <CardCarousel />
    </div>
  );
};

export default App;
