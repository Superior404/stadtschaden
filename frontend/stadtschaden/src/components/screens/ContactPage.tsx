import React, { useState } from "react";
import FormInput from "../common/FormInput";

const styles = {
  mainText: {
    fontWeight: "bold",
    color: "white",
  },
};

const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  //const [imageUri, setImageUri] = useState("");

  return (
    <div className="mt-36">
      <div className="flex flex-col justify-center items-center font-montserrat font-bold text-4xl">
        <p style={styles.mainText}>
          Senden Sie uns Ihre gefundenen{" "}
          <span className="text-primary">Schäden!</span>
        </p>
        <p style={styles.mainText} className="">
          <span className="text-primary">Wir </span>kümmern uns darum.
        </p>
        <p className="mt-5 text-base font-semibold text-center text-slate-gray w-auto text">
          Für die Meldung von Schäden oder Verschmutzungen in der Stadt ist ein
          präzises Ausfüllen des Formulars erforderlich.
        </p>
        <p className="mt-2 text-base font-semibold text-center text-slate-gray w-auto text">
          Bitte geben Sie genaue Informationen an, einschließlich Ort und
          Zeitpunkt des Vorfalls. Fotos sind obligatorisch.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mt-16">
        <div className="flex">
          <FormInput
            text={"Vorname"}
            type={"text"}
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />

          <FormInput
            text={"Nachname"}
            type={"text"}
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>

        <FormInput
          text={"Kategorie"}
          type={"text"}
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <FormInput
          text={"Email"}
          type={"text"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <FormInput
          text={"Telefonnummer"}
          type={"text"}
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />

        <FormInput
          text={"Nachricht"}
          type={"text"}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
    </div>
  );
};

export default ContactPage;
