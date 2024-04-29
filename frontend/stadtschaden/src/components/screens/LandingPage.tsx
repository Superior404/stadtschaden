import React from "react";
import earthPicture from "../../assets/earth-picture.png";
import { TbArrowCurveRight, TbArrowCurveLeft } from "react-icons/tb";

// TODO Alessio: Make this page (and further pages) responsive ..

const styles = {
  mainText: {
    fontWeight: "bold",
    color: "white",
  },
};

const LandingPage = () => {
  return (
    <div className="relative">
      <div className="flex flex-1 flex-col items-center justify-center mt-20">
        <img
          src={earthPicture}
          alt="EarthPicture"
          className="h-auto w-auto max-w-xl"
        />
      </div>

      <div className="absolute left-[27%] -bottom-48">
        <p
          className="absolute bottom-64 -left-72 font-palanquin text-6xl transform -rotate-[24deg]"
          style={styles.mainText}
        >
          Melde einen
          <br /> Schaden!
        </p>
        <TbArrowCurveRight
          className="text-primary"
          size={300}
          style={{ transform: "rotate(100deg)" }}
        />
      </div>
      <div className="absolute right-[28%] -bottom-44">
        <p
          className="absolute bottom-64 -right-72 font-palanquin text-6xl transform rotate-[24deg]"
          style={styles.mainText}
        >
          Rette deine
          <br />
          Umgebung!
        </p>
        <TbArrowCurveLeft
          className="text-primary"
          size={300}
          style={{ transform: "rotate(100deg)" }}
        />
      </div>
      <button
        className="absolute -bottom-48 left-1/2 transform -translate-x-1/2 mb-16 px-20 py-4 text-white rounded-full font-montserrat text-3xl font-bold bg-primary hover:border-2 transition-transform duration-300 hover:scale-105"
        style={{ zIndex: 1 }}
      >
        <a href="/contact">Melden</a>
      </button>
    </div>
  );
};

export default LandingPage;
