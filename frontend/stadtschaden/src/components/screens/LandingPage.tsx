import earthPicture from "../../assets/images/earth-picture.png";
import {
  TbArrowCurveRight,
  TbArrowCurveLeft,
  TbArrowBarUp,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import AboutUsSection from "../sections/AboutUsSection";
import NewsSection from "../sections/NewsSection";

const styles = {
  mainText: {
    fontWeight: "bold",
    color: "black",
  },
};

const LandingPage = () => {
  return (
    <main>
      {/* LandingPage */}
      <div className="flex justify-center items-center bg-center bg-cover bg-lightLeafesBackground">
        <div className="flex flex-col justify-center items-center md:flex-row h-screen ">
          <p
            className="rotate-[-0deg] xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-montserrat text-black text-end self-start lg:mt:36 md:mt-48  hidden md:block"
            style={styles.mainText}
          >
            Melde einen
            <br /> Schaden!
          </p>

          <TbArrowCurveRight className="text-black -m-6 size-48 rotate-[10deg] md:rotate-[110deg] hidden md:block" />

          <div className="flex justify-center items-center">
            <Link to="/contact">
              <img
                src={earthPicture}
                alt="EarthPicture"
                className="max-w-xs 2xl:max-w-lg xl:max-w-md md:mt-15 cursor-pointer transition duration-200 transform hover:scale-105"
              />
            </Link>
          </div>

          <TbArrowCurveLeft className="text-black -m-6 size-48 rotate-[-10deg] md:rotate-[-110deg] hidden md:block" />

          <p
            className="rotate-[-0deg] xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-montserrat text-black text-end self-start lg:mt:36 md:mt-48  hidden md:block"
            style={styles.mainText}
          >
            Rette deine
            <br />
            Umgebung!
          </p>

          <TbArrowBarUp className="text-black -m-6 size-48 md:hidden block mt-4" />

          <p
            className="font-montserrat text-4xl text-center self-start mt-4 md:hidden block"
            style={styles.mainText}
          >
            Rette deine
            <br />
            Umgebung!
          </p>
        </div>
      </div>

      <section id="about-us" className="flex flex-col items-center">
        <AboutUsSection />
      </section>

      <section
        id="news"
        className="flex justify-center bg-center bg-cover bg-lightLeafesBackground"
      >
        <NewsSection />
      </section>
    </main>
  );
};

export default LandingPage;
