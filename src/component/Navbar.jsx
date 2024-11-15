import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#F4F2EE] text-[#521C14]">
      <div className="flex justify-between items-center p-6">
        {/* Logo */}
        <div className="text-3xl font-playwrite font-bold text-[#7E513B]">Portfolio</div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col space-y-2"
        >
          <span className="block w-8 h-1 bg-[#7E513B]"></span>
          <span className="block w-8 h-1 bg-[#7E513B]"></span>
          <span className="block w-8 h-1 bg-[#7E513B]"></span>
        </button>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex md:space-x-8 md:items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-[#7E513B] border-b-2 border-[#DCC2B6] pb-1 font-semibold tracking-wide flex items-center'
                : 'hover:text-[#7E513B] transition-colors font-semibold tracking-wide flex items-center'
            }
          >
            <FaHome className="mr-2" /> Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-[#7E513B] border-b-2 border-[#DCC2B6] pb-1 font-semibold tracking-wide flex items-center'
                : 'hover:text-[#7E513B] transition-colors font-semibold tracking-wide flex items-center'
            }
          >
            <SiAboutdotme className='mr-2' /> About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-[#7E513B] border-b-2 border-[#DCC2B6] pb-1 font-semibold tracking-wide flex items-center'
                : 'hover:text-[#7E513B] transition-colors font-semibold tracking-wide flex items-center'
            }
          >
            <IoMdContact className='mr-2' /> Contact
          </NavLink>
        </div>
      </div>

      {/* Mobile View - Dropdown menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} p-4 bg-[#F4F2EE]`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'block text-[#7E513B] border-b-2 pb-1 font-semibold tracking-wide flex items-center'
              : 'block hover:text-[#7E513B] transition-colors font-semibold tracking-wide flex items-center'
          }
        >
          <FaHome className="mr-2" /> Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'block text-[#7E513B] border-b-2 pb-1 font-semibold tracking-wide flex items-center'
              : 'block hover:text-[#7E513B] transition-colors font-semibold tracking-wide flex items-center'
          }
        >
          <SiAboutdotme className='mr-2' /> About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'block text-[#7E513B] border-b-2 pb-1 font-semibold tracking-wide flex items-center'
              : 'block hover:text-[#7E513B] transition-colors font-semibold tracking-wide flex items-center'
          }
        >
          <IoMdContact className='mr-2' /> Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
