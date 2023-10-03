import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <div className="main-container dark:bg-black">
        <div className="max-w-[1200px] px-5 mx-auto">
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Home;
