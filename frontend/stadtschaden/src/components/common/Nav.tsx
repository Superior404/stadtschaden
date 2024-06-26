import { useState } from "react";
import { navLinks } from "../../constants/NavLinks";
import { useNavigate } from "react-router-dom";
import stadtschadenLogo from "../../assets/images/stadtschaden-logo.png";
import { Outlet, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setShowNav(false);
    }
  };

  const handleNavToSection = (sectionId: string) => {
    navigate("/");
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 800);
  };

  return (
    <>
      <header className="flex items-center bg-darkgray h-20 sticky w-full px-6 lg:px-16 2xl:px-24">
        <Link to="/">
          <img
            src={stadtschadenLogo}
            alt="Logo"
            className="2xl:w-64 xl:w-56 lg:w-48 w-48"
          />
        </Link>
        <div className="flex-1 flex justify-end lg:hidden">
          <button onClick={toggleNav} className="text-white text-2xl">
            {showNav ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
        <ul
          className={`lg:flex flex-1 lg:justify-center lg:items-center lg:flex-row 2xl:gap-10 xl:gap-4 gap-1 ${
            showNav
              ? "flex flex-col absolute top-12 right-2 bg-darkgray p-4 rounded-md z-50"
              : "hidden"
          } lg:flex lg:static lg:bg-transparent lg:p-0 lg:rounded-none`}
        >
          {navLinks.map((link) => (
            <li key={link.label} className="lg:mr-6">
              {link.label === "Über uns" || link.label === "Neuigkeiten" ? (
                <a
                  className="font-palanquin font-bold text-sm 2xl:text-xl xl:text-md text-white"
                  href={`#${link.to}`}
                  onClick={() => handleNavToSection(link.to)}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    "font-palanquin font-bold text-sm 2xl:text-xl xl:text-md " +
                    (isActive ? "text-primary" : "text-white")
                  }
                  to={link.to}
                  onClick={() => setShowNav(false)}
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Nav;
