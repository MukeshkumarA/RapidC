import React, { useState, useContext } from 'react';
import { UserContext } from '../utils/Context';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [gmail, setGmail] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [gmailError, setGmailError] = useState('');
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming you have a function to send OTP, you can call it here
    // await sendOTP();
    submit();
  };

  const sendOTP = () => {
    // Code to send OTP to the entered Gmail address
    const otp = Math.floor(1000 + Math.random() * 9000);
    console.log('OTP sent to:', gmail);
    console.log('otp ', otp);
  };

    const validateUserName = (userName) => {
        if (userName.trim() === "" || userName === null) {
            return "Username should not be empty.";
        } else if (!isNaN(userName)) {
            return "Username should not be a number.";
        }
        return null; // No error
    };

    const validateEmail = (gmail) => {
        if (gmail.trim() === "" || gmail === null) {
            return "Email field cannot be left blank.";
        }
        const gmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!gmailRegex.test(gmail)) {
            return "Invalid email format.";
        }
        return null; // No error
    };

    const submit = () => {
        const userNameError = validateUserName(userName);
        const gmailError = validateEmail(gmail);

        if (userNameError) {
            setUserNameError(userNameError);
        } else {
            setUserNameError(null); // Clear previous error
        }

        if (gmailError) {
            setGmailError(gmailError);
        } else {
            setGmailError(null); // Clear previous error
        }

        if (!userNameError && !gmailError) {
            // Update user data in context
            updateUser({ userName, gmail, isLoggedIn: true });
            alert("Successfully logged in");
            navigate("/");
        }
    };


  return (
    <div className="min-h-[78vh] pb-[-5%] max-w-sm mx-auto my-[4%] ">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {userNameError && <p className='text-red-500 font-semibold'>{userNameError}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gmail">
            Gmail
          </label>
          <input
            className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="gmail"
            type="email"
            placeholder="example@gmail.com"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
          />
          {gmailError && <p className='text-red-500 font-semibold'>{gmailError}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
