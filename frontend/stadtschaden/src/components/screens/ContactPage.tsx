import React, { useEffect, useRef, useState } from "react";
import FormInput from "../common/FormInput";
import ActionButton from "../common/ActionButton";
import SelectButton from "../common/SelectButton";
import { streetDamageCategories } from "../../constants/StreetDamageCategories";
import { validateForm } from "../../utils/services/formVerifcation";

const styles = {
  mainText: {
    fontWeight: "bold",
    color: "black",
  },
};

const ContactPage: React.FC = () => {
  const [formData] = useState(new FormData());
  const [formErrors, setFormErrors] = useState<Record<string, string>>({
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
  const [isSubmitted, setIsSubmitted] = useState<boolean>();
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageUri, setImageUri] = useState<string>("");

  useEffect(() => {
    setFormErrors({});
  }, [formData]);

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
      fileInputRef.current.value = "";
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileType = file.type;
      if (fileType.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(file);
        formData.set("imageUri", imageUrl);
        formData.set("image", file);

        setImageUri(imageUrl);
        clearError("imageUri");
      } else {
        setImageUri("");
        setFormErrors((prev) => ({
          ...prev,
          imageUri: "Falscher Dateityp. Bitte wählen Sie ein Bild aus.",
        }));
      }
    }
  };

  const handleFormSubmit = () => {
    setSubmitMessage("");
    setIsSubmitted(false);

    const errors = validateForm(Object.fromEntries(formData));
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    formData.append("Forename", formData.get("firstName") as string);
    formData.append("Surname", formData.get("lastName") as string);
    formData.append("Email", formData.get("email") as string);
    formData.append("Phone_Number", formData.get("phoneNumber") as string);
    formData.append("Description", formData.get("message") as string);
    formData.append("Category", formData.get("category") as string);
    formData.append("Street_name", formData.get("streetName") as string);
    formData.append("Postal_code", formData.get("postalCode") as string);
    formData.append("City", formData.get("city") as string);
    formData.append("File_Path", formData.get("image") as File);

    fetch("http://localhost:5020/api/Tickets", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
          setSubmitMessage("Formular erfolgreich gesendet!");
        } else {
          setIsSubmitted(false);
          setSubmitMessage("Fehler beim Senden des Formulars!");
        }
      })
      .catch(() => {
        setIsSubmitted(false);
        setSubmitMessage("Fehler beim Senden des Formulars!");
        // console.error("Error:", error);
      });
  };

  const clearError = (field: keyof typeof formErrors) => {
    setFormErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  return (
    <div className="my-12 mx-6 min-h-svh">
      {/* Main Text */}
      <div className="flex flex-col lg:mb-25 md:mb-10 mb-4 justify-center items-center text-center font-montserrat font-bold lg:text-4xl md:text-3xl text-2xl">
        <p style={styles.mainText}>
          Senden Sie uns Ihre gefundenen
          <span className="text-primary"> Schäden!</span>
        </p>
        <p style={styles.mainText}>
          <span className="text-primary">Wir </span>kümmern uns darum.
        </p>
        <p className="mt-2 lg:mt-8 font-semibold text-center text-slate-gray w-auto lg:text-2xl md:text-xl text-sm">
          Für die Meldung von Schäden oder Verschmutzungen in der Stadt ist ein
          präzises Ausfüllen des Formulars erforderlich.
        </p>
        <p className="mt-2 font-semibold text-center text-slate-gray w-auto lg:text-2xl md:text-xl text-sm">
          Bitte geben Sie genaue Informationen an, einschließlich Ort und
          Zeitpunkt des Vorfalls. Fotos sind obligatorisch.
        </p>
      </div>

      {/* Error Messages */}
      <div className="flex justify-center items-center mt-4 lg:mt-8">
        {Object.values(formErrors).some((error) => error) && (
          <div className="text-red-500 max-w-[80%] lg:max-w-[60%] mx-auto">
            <ul className="flex flex-wrap items-center justify-center gap-4">
              {Object.entries(formErrors).map(
                ([key, error]) => error && <li key={key}>{error}</li>,
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Form */}
      <div className="flex md:flex-row flex-col items-center justify-center mt-4">
        <button
          className={`w-full max-w-[25rem] h-[20rem] md:h-[38rem] mx-6 my-4 flex justify-center items-center rounded-xl border-2 border-dashed ${
            formErrors.imageUri ? "border-red-500" : "border-black"
          } bg-zinc-500 bg-opacity-25`}
          onClick={handleFileButtonClick}
        >
          {imageUri ? (
            <img
              src={imageUri}
              alt="Selected file"
              className="w-full h-full object-cover"
            />
          ) : (
            <p
              className="w-[10rem] font-montserrat text-black"
              data-testid="file-upload"
            >
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

        <div className="flex flex-col items-center justify-center gap-2">
          <FormInput
            placeholder={"Vorname"}
            type={"text"}
            value={formData.get("firstName") as string}
            onChange={(event) => {
              formData.set("firstName", event.target.value);
              clearError("firstName");
            }}
            error={formErrors.firstName}
          />

          <FormInput
            placeholder={"Nachname"}
            type="text"
            value={formData.get("lastName") as string}
            onChange={(event) => {
              formData.set("lastName", event.target.value);
              clearError("lastName");
            }}
            error={formErrors.lastName}
          />

          <FormInput
            placeholder={"Straße *"}
            type="text"
            value={formData.get("streetName") as string}
            onChange={(event) => {
              formData.set("streetName", event.target.value);
              clearError("streetName");
            }}
            error={formErrors.streetName}
          />

          <FormInput
            placeholder={"PLZ *"}
            type="text"
            value={formData.get("postalCode") as string}
            onChange={(event) => {
              formData.set("postalCode", event.target.value);
              clearError("postalCode");
            }}
            error={formErrors.postalCode}
          />

          <FormInput
            placeholder={"Stadt *"}
            type="text"
            value={formData.get("city") as string}
            onChange={(event) => {
              formData.set("city", event.target.value);
              clearError("city");
            }}
            error={formErrors.city}
          />

          <SelectButton
            options={streetDamageCategories.map(
              (category) => category.category,
            )}
            value={formData.get("category") as string}
            onChange={(event) => {
              formData.set("category", event.target.value);
              clearError("category");
            }}
            error={formErrors.category}
          />

          <FormInput
            placeholder={"E-Mail Adresse"}
            type="email"
            value={formData.get("email") as string}
            onChange={(event) => {
              formData.set("email", event.target.value);
              clearError("email");
            }}
            error={formErrors.email}
          />

          <FormInput
            placeholder={"Telefonnummer"}
            type="text"
            value={formData.get("phoneNumber") as string}
            onChange={(event) => {
              formData.set("phoneNumber", event.target.value);
              clearError("phoneNumber");
            }}
            error={formErrors.phoneNumber}
          />

          <FormInput
            placeholder={"Ihre Nachricht *"}
            type="text"
            value={formData.get("message") as string}
            onChange={(event) => {
              formData.set("message", event.target.value);
              clearError("message");
            }}
            error={formErrors.message}
            textArea
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center items-center mt-6">
        <ActionButton onClick={handleFormSubmit} title="Absenden" />
      </div>

      <div className="flex flex-col text-center justify-center items-center mt-10">
        {isSubmitted ? (
          <p className="text-green-500 text-2xl pb-2">{submitMessage}</p>
        ) : (
          <p className="text-red-500 text-2xl pb-2">{submitMessage}</p>
        )}{" "}
      </div>
    </div>
  );
};

export default ContactPage;
