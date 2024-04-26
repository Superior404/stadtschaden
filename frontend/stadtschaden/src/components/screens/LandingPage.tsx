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
          className="max-w-xs 2xl:max-w-xl xl:max-w-sm lg:mt-15 mt-12"
        />
      </div>

      <div className="flex justify-center mt-12 mb-5 lg:order-first">
        <button
          className="h-14 w-56 xl: text-white rounded-full font-montserrat text-3xl font-bold bg-primary hover:border-2 transition-transform duration-300 hover:scale-105"
          style={{ zIndex: 1 }}
        >
          <Link to="contact">Melden</Link>
        </button>
      </div>

      <div className="flex flex-row justify-center xl:gap-72">
        <div className="flex justify-start items-center flex-col xl:flex-row">
          <TbArrowCurveRight
            className="text-primary xl:max-w-3xl size-44 lg:order-last rotate-[10deg] lg:rotate-[110deg]"
          />
          <p
            className="rotate-[15deg] xl:text-3xl 2xl:text-6xl text-2xl text-start pr-5"
            style={styles.mainText}
          >
            Melde einen
            <br /> Schaden!
          </p>
        </div>

        <div className="flex justify-start items-center flex-col xl:flex-row">
          <TbArrowCurveLeft
            className="text-primary xl:max-w-3xl size-44 rotate-[-10deg] lg:rotate-[-110deg]"
          />
          <p
            className="rotate-[-15deg] xl:text-3xl 2xl:text-6xl text-2xl text-end pl-5"
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
