import React from "react";
import { Link } from "react-router-dom";
import profilePhoto from "../assets/images/photo_square.jpg";
const Navbar = () => {
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
        <ul className="flex gap-10 items-center">
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
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
