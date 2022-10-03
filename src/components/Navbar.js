import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "70px" }} />
      </div>
      {/* menu */}

      <ul className="hidden md:flex rounded">
        <li className=" hover:bg-blue-400 transition-all rounded">Home</li>
        <li className=" hover:bg-blue-400 transition-all rounded">About</li>
        <li className=" hover:bg-blue-400 transition-all rounded">Skills</li>
        <li className=" hover:bg-blue-400 transition-all rounded">Projects</li>
        <li className=" hover:bg-blue-400 transition-all rounded">Contacts</li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl  hover:bg-blue-400 transition-all rounded">
          Home
        </li>
        <li className="py-6 text-4xl  hover:bg-blue-400 transition-all rounded">
          About
        </li>
        <li className="py-6 text-4xl  hover:bg-blue-400 transition-all rounded">
          Skills
        </li>
        <li className="py-6 text-4xl  hover:bg-blue-400 transition-all rounded">
          Projects
        </li>
        <li className="py-6 text-4xl  hover:bg-blue-400 transition-all rounded">
          Contacts
        </li>
      </ul>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/md-anisul-hoque-khan-37582167/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/capriciousbased"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:mdanisulhoquekhan@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/Md_Anisul_Hoque_Khan_CV_DE.pdf"
              download
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
