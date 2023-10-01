import React from "react";
import profilePhoto from "../assets/images/hero_img.svg";

const Hero = () => {
  return (
    <div className="flex h-[600px] justify-between items-center">
      <div className="w-3/5">
        <div className="flex flex-col gap-2">
          <h6 className="font-medium text-2xl">HELLO, I'M</h6>
          <h2 className="font-extrabold text-7xl font-bolsomiq">
            Pranit Yawalkar
          </h2>
          <p className="font-semibold text-4xl text-primary">
            Full Stack Developer
          </p>
        </div>
        <div className="my-5">
          <p className="text-xl font-light">
            I am a passionate Full Stack Developer with expertise in crafting
            visually stunning and user-friendly web applications.
          </p>
        </div>
        <div className="flex gap-4 mt-8">
          <button className="bg-primary text-white py-3 px-8 text-lg rounded-lg shadow-md">
            Download CV
          </button>
          <button className="border-primary border-2 py-3 px-8 text-lg rounded-lg shadow-md">
            Contact Me
          </button>
        </div>
      </div>
      <div className="rounded-full w-2/5 text-center -mt-20">
        <img className="w-full mx-auto" src={profilePhoto} alt="profile" />
      </div>
    </div>
  );
};

export default Hero;
