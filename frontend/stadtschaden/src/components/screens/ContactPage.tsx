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

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(new FormData());
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
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageUri, setImageUri] = useState<string>("");

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
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

  const validateForm = (): boolean => {
    const requiredFields = [
      "streetName",
      "postalCode",
      "city",
      "category",
      "message",
      "imageUri",
    ];
    const numberFields = ["postalCode", "phoneNumber"];
    const errors: Partial<Record<string, string>> = {};
    let isValid = true;

    const fieldNames: Record<string, string> = {
      streetName: "Straße",
      postalCode: "Postleitzahl",
      city: "Stadt",
      category: "Kategorie",
      message: "Nachricht",
      imageUri: "Bild",
      phoneNumber: "Telefonnummer",
    };

    requiredFields.forEach((field) => {
      if (field === "imageUri") {
        console.log("imageUri", imageUri, !formData.get(field));
      }
      if (!formData.get(field)) {
        errors[field] = `${fieldNames[field]} ist erforderlich`;
        isValid = false;
      }
    });

    numberFields.forEach((field) => {
      if (formData.get(field) && !/^\d+$/.test(formData.get(field) as string)) {
        errors[field] = `${fieldNames[field]} muss eine Nummer sein`;
        isValid = false;
      }
    });

    const email = formData.get("email");
    if (email && !/\S+@\S+\.\S+/.test(email as string)) {
      errors.email = "Die E-Mail-Adresse ist ungültig";
      isValid = false;
    }

    setFormErrors(errors as Record<string, string>);
    return isValid;
  };

  const handleFormSubmit = () => {
    if (!validateForm()) {
      return;
    }

    {
      /* Backend is sleeping, so we need this (not) wonderful type of code */
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

    fetch("http://localhost:5020/api/Tickets", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
        } else {
          console.error("Failed to submit form");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleNewForm = () => {
    setFormData(new FormData());
    setImageUri("");
    setIsSubmitted(false);
  };

  const clearError = (field: keyof typeof formErrors) => {
    setFormErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Form submitted successfully!</h1>
        <button
          className="mt-5 p-2 bg-blue-500 text-white rounded"
          onClick={handleNewForm}
        >
          Submit New Form
        </button>
      </div>
    );
  }

  return (
    <div className="mt-12 mb-12">
      {/* Main Text */}
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

      {/* Error Messages */}
      <div className="flex justify-center items-center mt-4">
        {Object.values(formErrors).some((error) => error) && (
          <div className="text-red-500 max-w-[60%] mx-auto">
            <ul className="flex flex-wrap gap-4">
              {Object.entries(formErrors).map(
                ([key, error]) => error && <li key={key}>{error}</li>,
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Form */}
      <div className="flex justify-center items-center mt-4">
        <button
          className={`mr-4 h-[34.9rem] w-[23.25rem] flex justify-center items-center rounded-xl border-2 border-dashed ${
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
          </div>

          <div className="flex">
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
              placeholder={"Postleitzahl *"}
              type="text"
              value={formData.get("postalCode") as string}
              onChange={(event) => {
                formData.set("postalCode", event.target.value);
                clearError("postalCode");
              }}
              error={formErrors.postalCode}
            />
          </div>

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
            placeholder={"Email"}
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
            placeholder={"Nachricht *"}
            type={"textarea"}
            value={formData.get("message") as string}
            onChange={(event) => {
              formData.set("message", event.target.value);
              clearError("message");
            }}
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
