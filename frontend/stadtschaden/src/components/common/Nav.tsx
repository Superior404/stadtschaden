import React, { useState } from "react";
import { navLinks } from "../../constants/NavLinks";
import stadtschadenLogo from "../../assets/stadtschaden-logo.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="mt-10">
      <Link to="">
        <img
          src={stadtschadenLogo}
          alt="Logo"
          className="absolute 2xl:w-64 xl:w-56 lg:w-48 w-48 ml-8 lg:ml-16 2xl:ml-24 -mt-1"
        />
      </Link>
      <div className="lg:hidden flex justify-end mr-8 mb-2">
        <button onClick={toggleNav}>
          {showNav ? (
            <FontAwesomeIcon icon={faTimes} className="text-2xl text-white" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-2xl text-white" />
          )}
        </button>
      </div>
      <ul
        className={`lg:flex flex-1 ${
          showNav ? "flex" : "hidden"
        } flex-col lg:justify-center lg:items-center lg:flex-row 2xl:gap-10 xl:gap-7 gap-4`}
      >
        {navLinks.map((link) => (
          <li key={link.label} className="flex justify-end mr-8">
            <NavLink
              className={({ isActive }) =>
                "font-palanquin font-semibold text-sm 2xl:text-xl xl:text-lg " +
                (isActive ? "text-primary" : "text-white")
              }
              to={link.to}
              onClick={() => setShowNav(false)}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Nav;
