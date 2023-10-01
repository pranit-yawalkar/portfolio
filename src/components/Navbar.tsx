import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profilePhoto from "../assets/images/photo_square.jpg";
import { MdBrightness2 } from "react-icons/md";
import { BsBrightnessHighFill } from "react-icons/bs";

const Navbar = () => {
  const [userTheme, setUserTheme] = useState(localStorage.getItem("theme"));
  const systmeTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    checkTheme();
  }, []);

  const checkTheme = () => {
    if (userTheme === "dark" || (!userTheme && systmeTheme)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const changeTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setUserTheme("light");
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setUserTheme("dark");
  };

  return (
    <header className="max-w-[1200px] mx-auto">
      <nav className="flex justify-between items-center w-full py-6">
        <div className="flex items-center justify-center w-12 h-12 text-white">
          <Link to="/" className="text-xl font-bold w-full">
            <img
              className="w-full rounded-full border-[1px] border-primary text-center bg-primary"
              src={profilePhoto}
              alt="profile"
            />
          </Link>
        </div>
        <ul className="flex gap-10 items-center dark:text-white">
          <li className="text-lg hover:text-primary font-medium">
            <Link to="/">About Me</Link>
          </li>
          <li className="text-lg hover:text-primary font-medium">
            <Link to="/">Skills</Link>
          </li>
          <li className="text-lg hover:text-primary font-medium">
            <Link to="/">Projects</Link>
          </li>
          <li className="text-lg hover:text-primary font-medium">
            <Link to="/">Experience</Link>
          </li>
          <li
            onClick={changeTheme}
            className="text-lg hover:text-primary font-medium cursor-pointer"
          >
            {userTheme === "dark" ? (
              <BsBrightnessHighFill />
            ) : (
              <MdBrightness2 />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
