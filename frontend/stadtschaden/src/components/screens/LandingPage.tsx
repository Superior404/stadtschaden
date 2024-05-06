import earthPicture from "../../assets/images/earth-picture.png";
import { TbArrowCurveRight, TbArrowCurveLeft } from "react-icons/tb";
import { Link } from "react-router-dom";
import AboutUsSection from "../sections/AboutUsSection";
import NewsSection from "../sections/NewsSection";

// TODO Alessio: Make this page (and further pages) responsive ..
const styles = {
  mainText: {
    fontWeight: "bold",
    color: "black",
  },
};

const LandingPage = () => {
  return (
    <main>
      {/* Das auslagern in eigene Komponente - LandingFolder */}
      <div className="flex justify-center items-center h-screen w-full bg-lightLeafesBackground">
        <div className="flex flex-row justify-center items-center">
          <p
            className="rotate-[-0deg] xl:text-4xl 2xl:text-6xl font-montserrat text-black text-2xl text-end self-start mt-12"
            style={styles.mainText}
          >
            Melde einen
            <br /> Schaden!
          </p>

          <TbArrowCurveRight className=" text-black -m-6 size-48 rotate-[10deg] lg:rotate-[110deg]" />

          <div className="flex justify-center items-center">
            <Link to="/contact">
              <img
                src={earthPicture}
                alt="EarthPicture"
                className="max-w-xs 2xl:max-w-lg xl:max-w-md lg:mt-15 cursor-pointer transition duration-200 transform hover:scale-105"
              />
            </Link>
          </div>

          <TbArrowCurveLeft className="text-black -m-6 size-48 rotate-[-10deg] lg:rotate-[-110deg]" />

          <p
            className="rotate-[0deg] xl:text-4xl 2xl:text-6xl font-montserrat text-2xl text-center self-start mt-12"
            style={styles.mainText}
          >
            Rette deine
            <br />
            Umgebung!
          </p>
        </div>
      </div>

      {/* Das auslagern in eigene Komponente - AboutUsPage */}
      <section
        id="about-us"
        className="flex flex-col justify-center h-[50vh] mt-12 mb-12 gap-8"
      >
        <AboutUsSection />
      </section>

      {/* Das auslagern in eigene Komponente - NewsPage */}
      <section
        id="news"
        className="flex justify-center h-screen w-full bg-lightLeafesBackground"
      >
        <NewsSection />
      </section>
    </main>
  );
};

export default LandingPage;
