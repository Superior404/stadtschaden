import { ChangeEvent, FormEvent } from "react";
import { useState } from "react"; // Import React and useState hook
// import FormInput from '../common/FormInput';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useToken from "../../staffSpecific/getToken";

const PersonalLogin = () => {
  const [email, setEmail] = useState(""); // State variable to store email input value
  const [password, setPassword] = useState(""); // State variable to store password input value
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const { setToken } = useToken();

  // Event handler to update email state when the input changes
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Event handler to update password state when the input changes
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5020/api/Account/login", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        loginfailed();
        console.log("login failed: Unauthorized: Invalid username or password");
      } else {
        console.log(`login failed: Error: ${response.statusText}`);
      }
    } else {
      const data = await response.json();
      setToken(data.token);
      navigate("/staff/home");
    }
  };

  const loginfailed = () => {
    setShowError(true);
    setPassword("");
  };

  return (
    <div className="py-20 w-full flex justify-center items-center bg-lightgray ">
      {/* Form element */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-midlightgray shadow-2xl p-20 rounded-3xl"
        style={{ width: "800px" }}
      >
        <h1 className="text-black block font-primary text-center text-4xl mb-8">
          Mitarbeiter Login
        </h1>

        <h1 className="text-red-600 block font-primary text-center text-2xl h-8">
          {showError ? "Wrong Email or Password" : ""}
        </h1>

        {/* Email input field */}
        <div className="mb-16 block w-full ">
          <label
            htmlFor="email"
            className="text-black block font-primary text-3xl ml-5 "
          >
            Email
          </label>
          <input
            // type="email"
            id="email"
            className="mt-1 block rounded-full px-5 text-2xl h-16 w-full border-2 border-darkgray"
            placeholder="Your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        {/* Password input field */}
        <div className="mb-16 block w-full">
          <label
            htmlFor="password"
            className="text-black block font-primary text-3xl  ml-5"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block rounded-full px-5 text-2xl h-16 w-full border-2 border-darkgray"
            placeholder="Your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {/* Submit button */}
        <div className="flex justify-between w-full mt-6 ">
          <div className="w-full h-10 flex justify-center items-center mr-5">
            <button
              type="submit"
              className="bg-primary text-white py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105 transform scale-100 w-full  font-museo-moderno text-2xl transform-origin-center"
            >
              Login
            </button>
          </div>
          <div className="w-full h-10 flex justify-center items-center ml-5">
            <Link
              to="/altzheimer"
              className="bg-darkgray text-white text-center py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105 transform scale-100 w-full font-museo-moderno text-2xl transform-origin-center"
            >
              Kennwort vergessen?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalLogin;
