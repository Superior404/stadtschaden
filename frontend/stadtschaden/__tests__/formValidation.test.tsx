import { validateForm } from "../src/utils/services/formVerifcation";

// Test suite for validateForm function
describe("validateForm function", () => {
  // Test case for empty form data
  test("returns errors for empty form data", () => {
    const formData = {
      streetName: "",
      postalCode: "",
      city: "",
      category: "",
      message: "",
      imageUri: "",
      email: "",
      phoneNumber: "",
    };
    const errors = validateForm(formData);
    expect(errors).toEqual({
      streetName: "Straße ist erforderlich",
      postalCode: "Postleitzahl ist erforderlich",
      city: "Stadt ist erforderlich",
      category: "Kategorie ist erforderlich",
      message: "Nachricht ist erforderlich",
      imageUri: "Bild ist erforderlich",
    });
  });

  // Test case for invalid email
  test("returns error for invalid email", () => {
    const formData = {
      email: "invalidemail",
    };
    const errors = validateForm(formData);
    expect(errors.email).toEqual("Die E-Mail-Adresse ist ungültig");
  });

  // Test case for non-numeric postal code
  test("returns error for non-numeric postal code", () => {
    const formData = {
      postalCode: "ABC",
    };
    const errors = validateForm(formData);
    expect(errors.postalCode).toEqual("Postleitzahl muss eine Nummer sein");
  });

  // Test case for non-numeric phone number
  test("returns error for non-numeric phone number", () => {
    const formData = {
      phoneNumber: "XYZ",
    };
    const errors = validateForm(formData);
    expect(errors.phoneNumber).toEqual("Telefonnummer muss eine Nummer sein");
  });
});
