import { render, waitFor } from "@testing-library/react";
import ContactPage from "../src/components/screens/ContactPage";
import fetch from "jest-fetch-mock";

// Mocking the fetch function
fetch.enableMocks();

describe("ContactPage component", () => {
  test("submits form data to server and receives 200 response", async () => {
    const { getByText } = render(<ContactPage />);

    // Fill out form fields
    const formData = new FormData();
    formData.append("Forename", "John");
    formData.append("Surname", "Doe");
    formData.append("Street_name", "Sample Street");
    formData.append("Postal_code", "12345");
    formData.append("City", "Sample City");
    formData.append("Email", "john.doe@example.com");
    formData.append("Phone_Number", "123456789");
    formData.append("Description", "Sample message");

    // Create a sample image file
    const imageFile = new File(["sample image"], "sample.jpg", {
      type: "image/jpeg",
    });
    formData.append("File_Path", imageFile);

    // Mock the server response
    fetch.mockResponseOnce(JSON.stringify({ status: 200 }));

    // Submit form
    const submitButton = getByText("Absenden");
    submitButton.click();
    console.log("Form submitted", formData);

    // Wait for server response
    await waitFor(
      () => {
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
          "http://localhost:5020/api/Tickets",
          {
            method: "POST",
            body: formData,
          },
        );
      },
      {
        timeout: 10000, // Increase timeout to 10000 ms
      },
    );

    // Verify server response
    expect(fetch).toHaveBeenCalledWith("http://localhost:5020/api/Tickets", {
      method: "POST",
      body: formData,
    });

    // Log the response from the server
    const response = await fetch("http://localhost:5020/api/Tickets");
    const responseData = await response.json();
    console.log("Server Response:", responseData);
  });
});
