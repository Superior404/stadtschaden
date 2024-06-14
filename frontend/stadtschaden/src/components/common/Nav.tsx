import { useState } from "react";
import { navLinks } from "../../constants/NavLinks";
import { useNavigate } from "react-router-dom";
import stadtschadenLogo from "../../assets/images/stadtschaden-logo.png";
import { Outlet, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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
      <header className="flex bg-darkgray h-20">
        <Link to="">
          <img
            src={stadtschadenLogo}
            alt="Logo"
            className="absolute 2xl:w-64 xl:w-56 lg:w-48 w-48 ml-6 lg:ml-16 2xl:ml-24 mt-6"
          />
        </Link>
        <div className="flex w-full justify-end pr-6 bg-red-500">
          <button onClick={toggleNav} className="lg:hidden">
            {showNav ? (
              <FontAwesomeIcon icon={faTimes} className="text-2xl text-white" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-2xl text-white" />
            )}
          </button>

          <ul
            className={`${
              showNav ? "flex" : "hidden"
            } lg:flex-row flex-col flex-1 lg:justify-center lg:items-center 2xl:gap-10 xl:gap-4 gap-1 bg-green-200`}
          >
            {navLinks.map((link) => (
              <li key={link.label} className="flex justify-end">
                {link.label === "Über uns" || link.label === "Neuigkeiten" ? (
                  <a
                    className="font-palanquin font-bold text-sm 2xl:text-xl xl:text-md justify-center items-center text-black"
                    href={`#${link.to}`}
                    onClick={() => handleNavToSection(link.to)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    className={({ isActive }) =>
                      "font-palanquin font-bold text-sm 2xl:text-xl xl:text-md justify-center items-center " +
                      (isActive ? "text-primary" : "text-black")
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
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Nav;
