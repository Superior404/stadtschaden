import { ChangeEvent, FormEvent } from "react";
import { useState } from "react"; // Import React and useState hook
// import FormInput from '../common/FormInput';
import { Link } from "react-router-dom";
import SHA256 from 'crypto-js/sha256';
import { useNavigate } from 'react-router-dom';

const PersonalLogin = () => {
  const [email, setEmail] = useState(""); // State variable to store email input value
  const [password, setPassword] = useState(""); // State variable to store password input value
  const navigate  = useNavigate();


  // Event handler to update email state when the input changes
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Event handler to update password state when the input changes
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const setCookie = (name: string, val: string, liveTime: number) => {
    const date = new Date();
    const value = val;

    // Set it expire in 7 days
    date.setTime(date.getTime() + (liveTime * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name+"="+value+"; expires="+date.toUTCString()+"; path=/";
  }

  // Event handler for form submission
  const handleSubmit = async  (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // hashing only offers limited protection 
    // rainbow table attack is possible 

    // Hash email and password
    const hashedEmail = SHA256(email).toString();
    const hashedPassword = SHA256(password).toString();

    console.log("Email:", email, hashedEmail);
    console.log("Password:", password, hashedPassword);

    // Prepare data for the request
    const requestData = {
      username: email,
      password: password
    };

    // try {
    //   // Send login request to the backend
    //   const response = await fetch('http://localhost:5020/api/Account/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(requestData)
    //   });
  
    //   // Handle response
    //   if (response.ok) {
    //     const responseData = await response.json();
    //     console.log('Login successful:', responseData);
    //     // Add further logic here based on the response from the backend
    //   } else {
    //     console.error('Login failed:', response.statusText);
    //     // Add error handling logic here
    //   }
    // } catch (error) {
    //   // Handle error
    //   console.error('Login failed:', error);
    //   // Add error handling logic here
    //}

    setCookie("session_cookie", "123_total_echte_cookie_ID_45_lala", 7);
    navigate('/staff/home');
  };





  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-lightgray ">
      {/* Form element */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-midlightgray shadow-2xl p-20 rounded-3xl"
        style={{ width: "800px" }}
      >
        <h1 className="text-black block font-primary text-center text-4xl mb-16">
          Mitarbeiter Login
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
              className="bg-primary text-white py-3 px-6 rounded-full hover:border-2 transition-transform duration-300 hover:scale-105 transform scale-100 w-full  font-museo-moderno text-2xl transform-origin-center"
            >
              Login
            </button>
          </div>
          <div className="w-full h-10 flex justify-center items-center ml-5">
            <Link
              to="/altzheimer"
              className="bg-darkgray text-white text-center py-3 px-6 rounded-full hover:border-2 transition-transform duration-300 hover:scale-105 transform scale-100 w-full font-museo-moderno text-2xl transform-origin-center"
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
