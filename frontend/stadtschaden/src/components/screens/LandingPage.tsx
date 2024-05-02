import earthPicture from "../../assets/images/earth-picture.png";
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
    <main className="h-full w-full bg-leafesBackground">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-row justify-center items-center">
          <p
            className="rotate-[-20deg] xl:text-3xl 2xl:text-6xl font-montserrat text-2xl text-center self-start mt-12"
            style={styles.mainText}
          >
            Melde einen
            <br /> Schaden!
          </p>

          <TbArrowCurveRight className="text-white xl:max-w-3xl size-56 rotate-[10deg] lg:rotate-[110deg]" />

          <div className="flex justify-center items-center">
            <Link to="/contact">
              <img
                src={earthPicture}
                alt="EarthPicture"
                className="max-w-xs 2xl:max-w-lg xl:max-w-md lg:mt-15 cursor-pointer transition duration-200 transform hover:scale-105"
              />
            </Link>
          </div>

          <TbArrowCurveLeft className="text-white xl:max-w-3xl size-56 rotate-[-10deg] lg:rotate-[-110deg]" />

          <p
            className="rotate-[20deg] xl:text-3xl 2xl:text-6xl font-montserrat text-2xl text-center self-start mt-12"
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
