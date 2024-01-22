import React, { useState } from "react";
import logoIcon from "../assets/d‏ira-logo.svg";
import { NavLink, useLocation, Link } from "react-router-dom";


const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gray-500 p-4 border-b ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand/logo */}
        <NavLink to="/" className="flex items-center" >
          <img src={logoIcon} alt="Logo" className="mr-2 w-24 bg-white p-1 relative" />
        </NavLink>

        {/* Mobile menu button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-textColor focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="h-10 w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="h-10 w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex space-x-8 font-medium text-base py-4">
          <NavLink to="/" className={`text-white mt-2 ${isActive("/") ? "bg-greenText p-1 rounded-xl" : ""}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={`text-white mt-2 ${isActive("/about") ? "bg-greenText p-1 rounded-xl" : ""}`}>
            About US
          </NavLink>
          <NavLink to="/what-we-do" className={`text-white mt-2 ${isActive("/what-we-do") ? "bg-greenText p-1 rounded-xl" : ""}`}>
            What We Do
          </NavLink>
          <NavLink to="/projects" className={`text-white mt-2 ${isActive("/projects") ? "bg-greenText p-1 rounded-xl" : ""}`}>
            Projects
          </NavLink>
          <NavLink to="/contacts" className={`text-white mt-2 ${isActive("/contacts") ? "bg-greenText p-1 rounded-xl" : ""}`}>
            Contacts
          </NavLink>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden  top-4 sticky left-28 bg-gray-500 p-4 rounded shadow">
            <Link to="/" className={`block text-white mb-2 ${isActive("/") ? "bg-greenText p-1 rounded-xl" : ""}`}>
              Home
            </Link>
            <Link to="/about" className={`block text-white mb-2 ${isActive("/about") ? "bg-greenText p-1 rounded-xl" : ""}`}>
              About US
            </Link>
            <Link to="/what-we-do" className={`block text-white mb-2 ${isActive("/what-we-do") ? "bg-greenText p-1 rounded-xl" : ""}`}>
              What We Do
            </Link>
            <Link to="/projects" className={`block text-white mb-2 ${isActive("/projects") ? "bg-greenText p-1 rounded-xl" : ""}`}>
              Projects
            </Link>
            <Link to="/contacts" className={`block text-white mb-2 ${isActive("/contacts") ? "bg-greenText p-1 rounded-xl" : ""}`}>
              Contacts
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
