import React from "react";
import profilePhoto from "../assets/images/hero_img.svg";

const Hero = () => {
  return (
    <div id="home" className="max-w-[1200px] px-5 mx-auto">
      <div className="flex min-h-[600px] flex-col-reverse py-5 md:flex-row justify-between items-center">
        <div className="md:w-3/5">
          <div className="flex flex-col gap-2">
            <h6 className="font-medium text-2xl dark:text-white">HELLO, I'M</h6>
            <h2 className="font-extrabold text-7xl font-bolsomiq dark:text-white">
              Pranit Yawalkar
            </h2>
            <p className="font-semibold text-4xl text-primary">
              Full Stack Developer
            </p>
          </div>
          <div className="my-5">
            <p className="text-xl font-light dark:text-white">
              I am a passionate Full Stack Developer with expertise in crafting
              visually stunning and user-friendly web applications.
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <button className="bg-primary text-white py-3 px-8 text-lg rounded-lg shadow-md">
              Download CV
            </button>
            <button className="border-primary border-2 py-3 px-8 text-lg rounded-lg shadow-md text-primary">
              Contact Me
            </button>
          </div>
        </div>
        <div className="rounded-full md:w-2/5 text-center md:-mt-20">
          <img className="w-full mx-auto" src={profilePhoto} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
