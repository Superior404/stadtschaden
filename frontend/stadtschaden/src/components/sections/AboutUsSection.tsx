import teamPicture from "../../assets/images/team-picture.jpeg";

const AboutUsSection = () => {
  return (
    <>
      <p className="self-center font-palanquin text-primary font-bold text-4xl mb-8">
        Über uns
      </p>
      <div className="flex flex-row items-center gap-6">
        <img
          src={teamPicture}
          alt="teamPicture"
          className="w-64 h-96 rounded-3xl ml-24 mr-12"
        />

        <div>
          <p className="text-center w-[50vw] text-lg font-semibold mr-24">
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
    </>
  );
};

export default AboutUsSection;
