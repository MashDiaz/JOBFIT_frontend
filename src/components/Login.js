import React from "react";

const Login = ({ isOpen, onClose, onSignUp }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-gradient-to-b from-blue-500 to-blue-900 rounded-lg shadow-lg w-[90%]  md:w-[800px] p-8 flex gap-3">
        
        {/* Right Side: Image Section */}
        <div className="w-1/2 bg-blue-600 rounded-2xl overflow-auto ">
          <img
            src="login bg (1).png"  // Path from the public folder
            alt="Login Illustration"
            className="w-full h-full object-cover rounded-r-lg"
          />
        </div>
        
        {/* Left Side: Login Form */}
        <div className="w-full md:w-1/2 p-8  bg-blue-300 rounded-xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Login</h2>

          {/* Login Form */}
          <form className="flex flex-col">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-colors duration-500 ease-in-out  text-white py-3 rounded-md font-semibold mb-2"
            >
              LOGIN
            </button>
            <p className="block text-sm text-center font-semibold text-gray-700 mb-2">--------------- or login using ---------------</p>
          </form>

          {/* Social Login Section */}
          <div className="flex items-center justify-between space-x-2 my-4">
            {/* Facebook Login Button */}
            <button className="w-full flex items-center justify-center bg-blue-800 text-white py-3 rounded-md hover:bg-blue-400 transition-colors duration-500 ease-in-out mb-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                alt="Facebook Logo"
                className="w-6 h-6 mr-2"
              />
              Facebook
            </button>

            {/* Google Login Button */}
            <button className="w-full flex items-center justify-center bg-blue-800 text-white py-3 rounded-md hover:bg-red-600 transition-colors duration-500 ease-in-out mb-2">
              <img
                src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
                alt="Google Logo"
                className="w-6 h-6 mr-2"
              />
              Google
            </button>
          </div>

          {/* Sign Up Prompt */}
          <div className="text-center">
            <span>Don't have an account? </span>
            <a
              href="#"
              onClick={onSignUp} // Open Sign Up modal
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </a>
          </div>

          {/* Close Button */}
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
  );
};

export default Login;
