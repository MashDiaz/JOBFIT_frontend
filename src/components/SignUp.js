import React, { useState } from "react";
import SignUpDetails from "./SignUpDetails";

const SignUp = ({ isOpen, onClose, onLogin }) => {
  const [isSignUpDetailsOpen, setIsSignUpDetailsOpen] = useState(false);

  
  const openSignUpDetails = (e) => {
    e.preventDefault(); 
    setIsSignUpDetailsOpen(true); 
  };

  
  const closeSignUpDetails = () => {
    setIsSignUpDetailsOpen(false); 
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-gradient-to-b from-blue-500 to-blue-900 rounded-lg shadow-lg w-[90%] md:w-[1000px] p-8 flex gap-3">
         
          <div className="w-1/2 bg-blue-600 rounded-2xl overflow-auto">
            <img
              src="login bg (1).png" 
              alt="Sign Up Illustration"
              className="w-full h-full object-cover rounded-r-lg"
            />
          </div>

          
          <div className="w-full md:w-1/2 p-8 bg-blue-300 rounded-xl">
            <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
              Sign Up
            </h2>

            
            <form className="flex flex-col" onSubmit={openSignUpDetails}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Full Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="repassword"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Re-enter Password
                </label>
                <input
                  type="password"
                  id="repassword"
                  placeholder="Re-enter Your Password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold mb-4"
              >
                Sign Up
              </button>
            </form>

            
            <div className="text-center">
              <span>Already have an account? </span>
              <a
                href="#"
                onClick={onLogin} 
                className="text-blue-600 font-semibold hover:underline"
              >
                Login
              </a>
            </div>

            
            <button
              onClick={onClose}
              className="absolute top-2 right-2 z-10 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="https://img.icons8.com/?size=100&id=EYnXuvqJDgzX&format=png&color=000000"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      <SignUpDetails isOpen={isSignUpDetailsOpen} onClose={closeSignUpDetails} />
    </>
  );
};

export default SignUp;
