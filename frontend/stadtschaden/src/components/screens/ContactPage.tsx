import React, { useRef, useState } from "react";
import FormInput from "../common/FormInput";
import ActionButton from "../common/ActionButton";
import SelectButton from "../common/SelectButton";
import { streetDamageCategories } from "../../constants/StreetDamageCategories";

const styles = {
  mainText: {
    fontWeight: "bold",
    color: "black",
  },
};

const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [streetName, setStreetName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [imageUri, setImageUri] = useState<string>("");
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    category: "",
    email: "",
    phoneNumber: "",
    message: "",
    streetName: "",
    postalCode: "",
    city: "",
    imageUri: "",
  });
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileButtonClick = () => {
    console.log("File button clicked");
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileType = file.type;
      if (fileType.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(file);
        setImageUri(imageUrl);
        console.log("Image URL:", imageUrl);
      } else {
        // TODO: Remove log and add error message
        console.log("Invalid file type. Please select an image file.");
      }
    }
  };

  const validateForm = () => {
    const errors = {
      firstName: "",
      lastName: "",
      category: "",
      email: "",
      phoneNumber: "",
      message: "",
      streetName: "",
      postalCode: "",
      city: "",
      imageUri: "",
    };

    if (!streetName) {
      errors.streetName = "Straßenname ist erforderlich";
    }
    if (!postalCode) {
      errors.postalCode = "Postleitzahl ist erforderlich";
    }
    if (!city) {
      errors.city = "Stadt ist erforderlich";
    }
    if (!category) {
      errors.category = "Kategorie ist erforderlich";
    }
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      errors.email = "E-Mail ist ungültig";
    }
    if (!message) {
      errors.message = "Nachricht ist erforderlich";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = () => {
    if (!validateForm()) {
      return;
    }
    const formData = {
      Forename: firstName,
      Surname: lastName,
      StreetName: streetName,
      Postalcode: postalCode,
      City: city,
      Email: email,
      Phonenumber: phoneNumber,
      Description: message,
      Category: category,
      ImageURL: imageUri,
    };

    const jsonData = JSON.stringify(formData);

    fetch("http://localhost:5020/api/Tickets", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then((response) => {
        console.log("Response:", response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="mt-12 mb-12">
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
        <button
          className="mr-4 h-[34.9rem] w-[23.25rem] flex justify-center items-center rounded-xl border-2 border-dashed border-black bg-zinc-500 bg-opacity-25"
          onClick={handleFileButtonClick}
        >
          {" "}
          {imageUri ? (
            <img
              src={imageUri}
              alt="Selected file"
              className="w-full h-full object-cover"
            />
          ) : (
            <p className="w-[10rem] font-montserrat text-black">
              Datei hier ablegen oder klicken, um zu durchsuchen. *
            </p>
          )}
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </button>

        <div className="flex flex-col">
          <div className="flex">
            <FormInput
              placeholder={"Vorname"}
              type={"text"}
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              error={formErrors.firstName}
            />

            <FormInput
              placeholder={"Nachname"}
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              error={formErrors.lastName}
            />
          </div>

          <div className="flex">
            <FormInput
              placeholder={"Straße *"}
              type="text"
              value={streetName}
              onChange={(event) => setStreetName(event.target.value)}
              error={formErrors.streetName}
            />

            <FormInput
              placeholder={"Postleitzahl *"}
              type="numeric"
              value={postalCode}
              onChange={(event) => setPostalCode(event.target.value)}
              error={formErrors.postalCode}
            />
          </div>

          <FormInput
            placeholder={"Stadt *"}
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            error={formErrors.city}
          />

          <SelectButton
            options={streetDamageCategories.map(
              (category) => category.category,
            )}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            error={formErrors.category}
          />

          <FormInput
            placeholder={"Email"}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={formErrors.email}
          />

          <FormInput
            placeholder={"Telefonnummer"}
            type="text"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            error={formErrors.phoneNumber}
          />

          <FormInput
            placeholder={"Nachricht *"}
            type={"textarea"}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            textArea
            error={formErrors.message}
          />

          <ActionButton title={"Absenden"} onClick={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
