import React from "react";
import earthPicture from "../../assets/earth-picture.png";
import { TbArrowCurveRight, TbArrowCurveLeft } from "react-icons/tb";
import { HiArrowTrendingDown } from "react-icons/hi2";
import Nav from "../common/Nav";

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
        <HiArrowTrendingDown
          className="text-primary"
          size={300}
          style={{ transform: "rotate(100deg)" }}
        />
      </div>
    </main>
  );
};

export default LandingPage;
