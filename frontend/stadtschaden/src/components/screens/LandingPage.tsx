import React from "react";
import earthPicture from "../../assets/earth-picture.png";
import { TbArrowCurveRight, TbArrowCurveLeft } from "react-icons/tb";
import { Link } from "react-router-dom";

// TODO Alessio: Make this page (and further pages) responsive ..
const styles = {
  mainText: {
    fontWeight: "bold",
    color: "white",
  },
};

const LandingPage = () => {
  return (
    <main>
      <div className="flex justify-center items-center">
        <img
          src={earthPicture}
          alt="EarthPicture"
          className="max-w-xs 2xl:max-w-2xl xl:max-w-xl md:max-w-sm xl:mt-20 mt-10"
        />
      </div>

      <div className="flex justify-center mt-10 mb-5">
        <button
          className="h-16 w-44 text-white rounded-full font-montserrat text-3xl font-bold bg-primary hover:border-2 transition-transform duration-300 hover:scale-105"
          style={{ zIndex: 1 }}
        >
          <Link to="contact">Melden</Link>
        </button>
      </div>

      <div className="flex flex-row justify-center">
        <div className="flex justify-start items-center flex-col xl:flex-row">
          <TbArrowCurveRight
            className="text-primary xl:max-w-3xl size-44 lg:order-last"
            style={{ transform: "rotate(10deg)" }}
          />
          <p
            className="rotate-[15deg] xl:text-3xl 2xl:text-6xl text-2xl text-start pr-6"
            style={styles.mainText}
          >
            Melde einen
            <br /> Schaden!
          </p>
        </div>

        <div className="flex justify-start items-center flex-col xl:flex-row">
          <TbArrowCurveLeft
            className="text-primary xl:max-w-3xl size-44"
            style={{ transform: "rotate(-10deg)" }}
          />
          <p
            className="rotate-[-15deg] xl:text-3xl 2xl:text-6xl text-2xl text-end pl-6"
            style={styles.mainText}
          >
            Rette deine
            <br />
            Umgebung!
          </p>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
