import React from "react";
import { navLinks } from "../../constants/NavLinks";

const Nav = () => {
  return (
    <header className="flex relative justify-center items-center pt-10">
      <li className="absolute left-0 ml-16 list-none text-4xl font-bold text-primary">
        <a href="/">StadtSchaden</a>
      </li>
      <nav className="">
        <ul className="flex flex-row space-x-12">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="font-palanquin items-center font-semibold text-white text-xl"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
