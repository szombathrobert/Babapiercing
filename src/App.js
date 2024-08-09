import React, { useState } from "react";

// import components
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import GallerySection from "./components/GallerySection";
import Skills from "./components/Skills";
import PriceList from "./components/PriceList";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

const App = () => {
  const [navMobile, setNavMobile] = useState(false);

  const toggleMenu = () => {
    setNavMobile(!navMobile);
  };

  const closeMenu = () => {
    setNavMobile(false);
  };

  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        navMobile={navMobile}
      />
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <Testimonial />
      <PriceList />
      <Contact />
      <Footer />
      <Copyright />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
