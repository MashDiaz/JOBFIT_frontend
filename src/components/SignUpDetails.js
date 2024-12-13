import React from "react";
import { CSSTransition } from 'react-transition-group'

const SignUpDetails = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <CSSTransition
      in={isOpen}
      timeout={300} 
      classNames="popup"
      unmountOnExit
    >
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 ">
      <div className="bg-gradient-to-b from-blue-500 to-blue-900 rounded-lg shadow-lg w-[90%] md:w-[1200px] max-h-[92.5%] p-20 overflow-y-auto"
      style={{
        backgroundImage: "url('detailsbg (1).png')", 
        backgroundSize: "cover",  
        backgroundPosition: "center",
        backgroundColor:"bg-gradient-to-b from-blue-500 to-blue-900 rounded-lg shadow-lg w-[90%] md:w-[1200px] max-h-[92.5%] p-20 overflow-y-auto"  // Keeps the image centered
      }}>
        <div className="relative bg-blue-100 rounded-xl p-16 shadow-lg">
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            ✕
          </button>

          <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
            Welcome to <span className="font-extrabold">JobFit</span>
          </h2>

         
          <form className="space-y-3">
            
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name Here"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

           
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                E-Mail
              </label>
              <input
                type="email"
                placeholder="Enter Your E-Mail Here"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

          
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Year
                </label>
                <input
                  type="number"
                  placeholder="YYYY"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Month
                </label>
                <input
                  type="number"
                  placeholder="MM"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Date
                </label>
                <input
                  type="number"
                  placeholder="DD"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                />
              </div>
            </div>

            
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  District
                </label>
                <input
                  type="text"
                  placeholder="District"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Province
                </label>
                <input
                  type="text"
                  placeholder="Province"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                />
              </div>
            </div>

            
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Current Status
              </label>
              <input
                type="text"
                placeholder="Set Your Status Here"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Job Role
              </label>
              <input
                type="text"
                placeholder="Select Your Job Title"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Skills
              </label>
              <input
                type="text"
                placeholder="Type Your Skills"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Experience
              </label>
              <input
                type="text"
                placeholder="Set Your Experience"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Education
              </label>
              <input
                type="text"
                placeholder="Type Your Education"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Description
              </label>
              <textarea
                placeholder="Briefly explain yourself"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                rows={3}
              ></textarea>
            </div>

            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <label htmlFor="terms" className="text-gray-700 text-sm">
                I agree to the Terms & Conditions and Privacy Policy
              </label>
            </div>

            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
    </CSSTransition>
  );
};

export default SignUpDetails;
