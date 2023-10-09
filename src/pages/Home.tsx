import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <div className="main-container dark:bg-darkGrey">
        <Navbar />
        <Hero />
        <Skills />
      </div>
    </>
  );
};

export default Home;
