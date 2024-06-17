import teamPicture from "../../assets/images/team-picture.jpeg";

const AboutUsSection = () => {
  return (
    <div className="flex flex-col justify-center m-6 mb-12 gap-8">
      <p className="self-center font-palanquin text-primary font-bold text-4xl">
        Über uns
      </p>
      <div className="flex flex-col items-center justify-center lg:flex-row gap-6">
        <img
          src={teamPicture}
          alt="teamPicture"
          className="max:w-1/2 md:h-[55vh] h-[35vh] rounded-3xl ml-12 mr-12"
        />

        <div className="lg:w-1/2">
          <p className="text-center lg:text-left text-md lg:text-xl font-semibold mx-6 lg:mr-24">
            Willkommen bei{" "}
            <span className="text-primary font-bold">StadtSchaden</span>
            !<br />
            <br />
            Wir sind ein engagiertes Team, das sich leidenschaftlich für unsere
            Umwelt und unsere Stadt einsetzt. Unser Ziel ist es, die Schönheit
            und Sauberkeit unserer Stadt zu erhalten und zu verbessern. Als Team
            von <span className="text-primary font-bold">
              StadtSchaden
            </span>{" "}
            setzen wir uns dafür ein, Schäden wie{" "}
            <span className="text-primary font-bold">Graffiti</span>,{" "}
            <span className="text-primary font-bold">Müll</span> und Vandalismus
            zu beseitigen und präventive Maßnahmen zu ergreifen, um zukünftige
            Schäden zu verhindern. <br />
            <br /> Unsere Arbeit konzentriert sich auf Nachhaltigkeit durch den
            Einsatz umweltfreundlicher Materialien und Methoden, um unsere Stadt
            sauber zu halten. Mit
            <span className="text-primary font-bold"> StadtSchaden</span> können
            Sie Schäden melden und wir helfen Ihnen, diese zu beseitigen und
            Maßnahmen zur Prävention zu ergreifen. Schließen Sie sich unserem
            Team an, um gemeinsam eine nachhaltige und saubere Umgebung zu
            schaffen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
