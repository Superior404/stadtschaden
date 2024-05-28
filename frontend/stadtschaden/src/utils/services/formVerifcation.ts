export interface CustomFormData {
  [key: string]: string | File;
}

export interface FormErrors {
  [key: string]: string;
}

export const validateForm = (formData: CustomFormData): FormErrors => {
  console.log("formData", formData);

  const requiredFields: Array<keyof CustomFormData> = [
    "streetName",
    "postalCode",
    "city",
    "category",
    "message",
    "imageUri",
  ];
  const numberFields: Array<keyof CustomFormData> = [
    "postalCode",
    "phoneNumber",
  ];
  const errors: FormErrors = {};

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
    if (!formData[field]) {
      errors[field] = `${fieldNames[field]} ist erforderlich`;
    }
  });

  numberFields.forEach((field) => {
    if (formData[field] && !/^\d+$/.test(formData[field] as string)) {
      errors[field] = `${fieldNames[field]} muss eine Nummer sein`;
    }
  });

  if (formData.email && !/\S+@\S+\.\S+/.test(formData.email as string)) {
    errors.email = "Die E-Mail-Adresse ist ungültig";
  }

  return errors;
};
