import React from "react";
import { navLinks } from "../../constants/NavLinks";
import stadtschadenLogo from "../../assets/stadtschaden-logo.png";
import {Outlet, Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header className="flex justify-center items-center mt-10 ">
        <Link className="absolute left-0 ml-16" to="">
          <img src={stadtschadenLogo} alt="Logo" width={320} />
        </Link>
        <nav className="flex justify-center w-full">
          <div className="">
            <ul className="flex flex-row justify-center items-center gap-12">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    className={({ isActive }) =>
                      "font-palanquin font-semibold text-xl " +
                      (isActive
                        ? "text-primary"
                        : "text-white")
                    }
                    to={link.to}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Nav;
