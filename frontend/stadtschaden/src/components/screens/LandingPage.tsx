import React from "react";
import earthPicture from "../../assets/earth-picture.png";


const LandingPage = () => {
  return (
    <div className="">
      <div className="flex flex-1 items-center justify-center mt-20">
        <img
          src={earthPicture}
          alt="EarthPicture"
          className="h-auto w-auto max-w-xl"
        />
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        {/* TODO: Schrift und ArrowImages suchen und implementieren */}
        <p></p>
        <img src="" alt="" />
        <p></p>
        <img src="" alt="" />
        <button
          className="flex mt-10 justify-center 
    items-center px-16 py-5 text-white rounded-full
    font-montserrat text-2xl font-bold bg-primary"
        >
          <a href="/contact">Melden</a>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
