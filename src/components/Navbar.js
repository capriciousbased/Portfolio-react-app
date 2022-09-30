import React from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "70px" }} />
      </div>
      {/* menu */}
      <div>
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Works</li>
          <li>Contacts</li>
        </ul>
      </div>
      {/* Hamburger */}
      <div className="hidden">
        <FaBars />
      </div>
      {/* Mobile Menu */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Works</li>
        <li>Contacts</li>
      </ul>
      {/* Social Media */}
    </div>
  );
};

export default Navbar;
