const InstructionPage = () => {
  const styles = {
    defaultTextContainer: {
      gap: "8px",
      fontSize: "1.3rem",
    },
    // Make a constant file for these primary color for consistency in react components
    importantWord: {
      color: "#087c4c",
      fontWeight: "bold",
    },
  };

  return (
    <div className="flex flex-col justify-start items-start min-h-svh lg:text-4xl md:text-3xl text-2xl md:mt-16 mt-10 md:mx-20 mx-10 gap-6 text-black font-montserrat">
      <p className="text-bold self-center font-bold text-center md:mb-12 mb-6">
        <span style={styles.importantWord}>Anleitung</span> zum Ausfüllen des
        Kontaktformulars auf unserer Website
      </p>
      <div style={styles.defaultTextContainer}>
        <p>
          <strong>
            <span style={styles.importantWord}>Schritt 1:</span> Zugriff auf das
            Kontaktformular
          </strong>
        </p>
        <ol className="list-decimal pl-8">
          <li>
            Navigieren Sie auf unserer Website zur Seite "
            <span style={styles.importantWord}>Schaden melden</span>" oder einem
            ähnlichen Abschnitt, der das Kontaktformular enthält.
          </li>
          <li>
            Klicken Sie auf die Schaltfläche "
            <span style={styles.importantWord}>Schaden melden</span>" oder "
            <span style={styles.importantWord}>Kontaktformular</span>", um das
            Formular zu öffnen.
          </li>
        </ol>
      </div>
      <div style={styles.defaultTextContainer}>
        <p>
          <strong>
            <span style={styles.importantWord}>Schritt 2:</span> Ausfüllen des
            Kontaktformulars
          </strong>
        </p>
        <ol className="list-decimal pl-8">
          <li>
            Geben Sie Ihren Namen in das Feld "
            <span style={styles.importantWord}>Name</span>" ein.
          </li>
          <li>
            Tragen Sie Ihre E-Mail-Adresse in das Feld "
            <span style={styles.importantWord}>E-Mail</span>" ein.
          </li>
          <li>
            Geben Sie Ihre Telefonnummer in das Feld "
            <span style={styles.importantWord}>Telefon</span>" ein (optional).
          </li>
          <li>
            Wählen Sie den Standort des Schadens aus der Dropdown-Liste aus.
          </li>
          <li>
            Beschreiben Sie den Schaden so detailliert wie möglich im Feld "
            <span style={styles.importantWord}>Beschreibung</span>".
          </li>
          <li>
            Klicken Sie auf die Schaltfläche "
            <span style={styles.importantWord}>Datei auswählen</span>", um ein
            Bild des Schadens hochzuladen.
          </li>
        </ol>
      </div>
      <div style={styles.defaultTextContainer}>
        <p>
          <strong>
            <span style={styles.importantWord}>Schritt 3:</span> Absenden des
            Kontaktformulars
          </strong>
        </p>
        <ol className="list-decimal pl-8">
          <li>
            Überprüfen Sie Ihre eingegebenen Informationen auf Richtigkeit.
          </li>
          <li>
            Klicken Sie auf die Schaltfläche "Absenden", um das Formular
            abzuschicken.
          </li>
        </ol>
      </div>
      <p style={styles.defaultTextContainer} className="md:mb-24 mb-12">
        <strong>Hinweis:</strong>
        <ul className="list-disc pl-8">
          <li>
            Nach dem Absenden wird Ihr Schadenbericht an unsere Mitarbeiter
            weitergeleitet.
          </li>
          <li>
            Sie erhalten eine Benachrichtigung über den Fortschritt der
            Schadensbearbeitung über die von Ihnen angegebene Kontaktmethode.
          </li>
          <li>
            Wenn der Schaden repariert wurde und eine Belohnung angeboten wird,
            werden Sie entsprechend benachrichtigt.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default InstructionPage;
