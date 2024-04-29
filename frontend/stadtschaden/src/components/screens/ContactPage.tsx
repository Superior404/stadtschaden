import React, { useState } from "react";
import FormInput from "../common/FormInput";
import ActionButton from "../common/ActionButton";

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

      <div className="flex justify-center items-center mt-16">
        <button className="mr-4 h-[27.5rem] w-[20.25rem] flex justify-center items-center rounded-xl border-2 border-dashed border-white ">
          <p className="w-[10rem] font-montserrat font-semibold text-[#999999]">
            Datei hier ablegen oder klicken, um zu durchsuchen.
          </p>
        </button>

        <div className="flex flex-col">
          <div className="flex">
            <FormInput
              placeholder={"Vorname"}
              type={"text"}
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />

            <FormInput
              placeholder={"Nachname"}
              type={"text"}
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>

          <FormInput
            placeholder={"Kategorie"}
            type={"text"}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />

          <FormInput
            placeholder={"Email"}
            type={"text"}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <FormInput
            placeholder={"Telefonnummer"}
            type={"text"}
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />

          <FormInput
            placeholder={"Nachricht"}
            type={"text"}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />

          <ActionButton title={"Absenden"} onClick={() => {}}></ActionButton>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
