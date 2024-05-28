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
  const [isSubmitted, setIsSubmitted] = useState(false);
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
        setImageUri(imageUrl);

        formData.append("image", file);
        setFormErrors((prev) => ({
          ...prev,
          imageUri: "",
        }));
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
    };

    requiredFields.forEach((field) => {
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

    formData.append("Forename", firstName);
    formData.append("Surname", lastName);
    formData.append("Email", email);
    formData.append("Phone_Number", phoneNumber);
    formData.append("Description", message);
    formData.append("Category", category);
    formData.append("Street_name", streetName);
    formData.append("Postal_code", postalCode);
    formData.append("City", city);

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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [streetName, setStreetName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");

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
          className="mr-4 h-[34.9rem] w-[23.25rem] flex justify-center items-center rounded-xl border-2 border-dashed border-black bg-zinc-500 bg-opacity-25"
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
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
                clearError("firstName");
              }}
              error={formErrors.firstName}
            />

            <FormInput
              placeholder={"Nachname"}
              type="text"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
                clearError("lastName");
              }}
              error={formErrors.lastName}
            />
          </div>

          <div className="flex">
            <FormInput
              placeholder={"Straße *"}
              type="text"
              value={streetName}
              onChange={(event) => {
                setStreetName(event.target.value);
                clearError("streetName");
              }}
              error={formErrors.streetName}
            />

            <FormInput
              placeholder={"Postleitzahl *"}
              type="text"
              value={postalCode}
              onChange={(event) => {
                setPostalCode(event.target.value);
                clearError("postalCode");
              }}
              error={formErrors.postalCode}
            />
          </div>

          <FormInput
            placeholder={"Stadt *"}
            type="text"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
              clearError("city");
            }}
            error={formErrors.city}
          />

          <SelectButton
            options={streetDamageCategories.map(
              (category) => category.category,
            )}
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
              clearError("category");
            }}
            error={formErrors.category}
          />

          <FormInput
            placeholder={"Email"}
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              clearError("email");
            }}
            error={formErrors.email}
          />

          <FormInput
            placeholder={"Telefonnummer"}
            type="text"
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
              clearError("phoneNumber");
            }}
            error={formErrors.phoneNumber}
          />

          <FormInput
            placeholder={"Nachricht *"}
            type={"textarea"}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
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
