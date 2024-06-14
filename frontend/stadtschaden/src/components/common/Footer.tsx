import React from "react";
import { Link } from "react-router-dom";
import stadtschadenLogo from "../../assets/images/stadtschaden-logo.png";

const Footer = () => {
  return (
    <footer className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between bg-darkgray pt-6 pb-6 gap-4">
      <div className="flex items-center gap-4">
        <Link to="">
          <img
            src={stadtschadenLogo}
            alt="Logo"
            className="2xl:w-64 xl:w-56 w-48 md:ml-12"
          />
        </Link>
      </div>
      <p className="text-white text-wrap md:mr-12">
        © 2024 All Rights Reserved To StadtSchaden
      </p>
    </footer>
  );
};

export default Footer;
