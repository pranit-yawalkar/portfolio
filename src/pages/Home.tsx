import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Home;
