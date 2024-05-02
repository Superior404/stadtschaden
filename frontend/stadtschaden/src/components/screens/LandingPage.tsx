import earthPicture from "../../assets/images/earth-picture.png";
import teamPicture from "../../assets/images/team-picture.jpeg";
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
      {/* Das auslagern in eigene Komponente - LandingFolder */}
      <div className="flex justify-center items-center h-screen w-full bg-leafesBackground">
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

      {/* Das auslagern in eigene Komponente - AboutUsPage */}
      <div className="flex flex-col justify-center h-[50vh] mt-20 mb-24 gap-8">
        <p className="self-center font-palanquin text-primary font-bold text-4xl mb-8">
          Über uns
        </p>
        <div className="flex flex-row items-center gap-6">
          <img
            src={teamPicture}
            alt="teamPicture"
            className="w-42 h-72 rounded-3xl ml-24 mr-12"
          />

          <div>
            <p className="text-center text-ms font-semibold mr-24">
              Willkommen bei{" "}
              <span className="text-primary font-bold">StadtSchaden</span>
              !<br />
              <br />
              Wir sind ein engagiertes Team, das sich leidenschaftlich für
              unsere Umwelt und unsere Stadt einsetzt. Unser Ziel ist es, die
              Schönheit und Sauberkeit unserer Stadt zu erhalten und zu
              verbessern. Als Team von{" "}
              <span className="text-primary font-bold">StadtSchaden</span>{" "}
              setzen wir uns dafür ein, Schäden wie{" "}
              <span className="text-primary font-bold">Graffiti</span>,{" "}
              <span className="text-primary font-bold">Müll</span> und
              Vandalismus zu beseitigen und präventive Maßnahmen zu ergreifen,
              um zukünftige Schäden zu verhindern. <br />
              <br /> Unsere Arbeit konzentriert sich auf Nachhaltigkeit durch
              den Einsatz umweltfreundlicher Materialien und Methoden, um unsere
              Stadt sauber zu halten. Mit
              <span className="text-primary font-bold">StadtSchaden</span>{" "}
              können Sie Schäden melden und wir helfen Ihnen, diese zu
              beseitigen und Maßnahmen zur Prävention zu ergreifen. Schließen
              Sie sich unserem Team an, um gemeinsam eine nachhaltige und
              saubere Umgebung zu schaffen.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen w-full bg-leafesBackground"></div>
    </main>
  );
};

export default LandingPage;
