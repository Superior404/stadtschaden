import React from 'react'
import { useState } from 'react'; // Import React and useState hook
import FormInput from '../common/FormInput';
import { Link } from 'react-router-dom';

const PersonalLogin = () => {

  const [email, setEmail] = useState(''); // State variable to store email input value
  const [password, setPassword] = useState(''); // State variable to store password input value

  // Event handler to update email state when the input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler to update password state when the input changes
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic
    console.log('Email:', email);
    console.log('Password:', password);
    // For a real application, you would typically send this data to a backend for authentication
  };

  


  return (
    <div className="min-h-screen w-full flex justify-center items-center ">
      {/* Form element */}
      <form onSubmit={handleSubmit} className='flex flex-col' style={{ width: '600px' }}>
        {/* Email input field */}
        <div className="mb-5 block w-full ">
          <label htmlFor="email" className="text-white block font-museo-moderno text-3xl ml-5">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block rounded-full px-5 py-2 text-3xl w-full"
            placeholder="Your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        {/* Password input field */}
        <div className="mb-5 block w-full">
          <label htmlFor="password" className="text-white block font-museo-moderno text-3xl  ml-5">Password</label>
          <input
            type="password"
            id="password"
            className="mt-1 block rounded-full px-5 py-2 text-3xl w-full"
            placeholder="Your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {/* Submit button */}
        <div className="flex justify-between w-full mt-6 ">
          <div className='w-full h-10 flex justify-center items-center mr-5'> 
            <button type="submit" className="bg-primary text-white py-3 px-6 rounded-full hover:border-2 transition-transform duration-300 hover:scale-105 transform scale-100 w-full  font-museo-moderno text-xl transform-origin-center">Login</button>
          </div>
          <div className='w-full h-10 flex justify-center items-center ml-5'> 
            <Link to="/worker/dement" className="bg-gray-500 text-white py-3 px-6 rounded-full hover:border-2 transition-transform duration-300 hover:scale-105 transform scale-100 w-full font-museo-moderno text-xl transform-origin-center">Kennwort vergessen?</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PersonalLogin