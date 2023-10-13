import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhatIDo from "../components/WhatIDo";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <div className="main-container dark:bg-darkGrey">
        <Navbar />
        <Hero />
        <WhatIDo />
        <Skills />
      </div>
    </>
  );
};

export default Home;
