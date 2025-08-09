# City Damage Reporting Web Application

> **Note:** This application was developed as a student project during a single academic semester.

This is a web application consisting of a **React frontend** and an **ASP.NET backend**. The purpose of this application is to enable users to report damages occurring within a city. Users can upload pictures of the damage, provide details about what the damage is, and specify its location.

Once a report is submitted, city workers can review the uploaded damage reports through the system.

<div style="text-align: center; padding: 20px;">
    <img src="screenshots/main_page.png" alt="App Screenshot"  style="width: 80%;" />
</div>

---

## Features

- User-friendly frontend interface to report city damages
- Upload pictures to document the damage
- Provide detailed information and location for each report
- Backend API built with ASP.NET to handle report data
- Swagger UI available to view and test API endpoints

---

## Getting Started

### Frontend

1. Navigate to the frontend directory:

    ```bash
    cd frontend/stadtschaden
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

The frontend will be accessible at `http://localhost:5173`.

---

### Backend

1. Navigate to the backend API directory:

    ```bash
    cd backend/API
    ```

2. Run the ASP.NET backend:

    ```bash
    dotnet run
    ```

3. View the available API endpoints and test them using Swagger UI by opening the following URL in your browser:

    ```
    http://localhost:<port>/swagger
    ```

*(Replace `<port>` with the port number shown in the console when running the backend.)*

---

## Notes

- Ensure both frontend and backend servers are running simultaneously to use the application fully.
- This project was completed as part of a university course project over one semester.