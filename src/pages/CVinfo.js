import React from 'react';

const CVInfo = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="w-full mx-2 bg-green-100 rounded-2xl p-6 shadow-lg relative"style={{
        backgroundImage: "url('cvbg.png') ", // Replace with your image path
        backgroundSize: "cover",  // Makes sure the image covers the entire background
        backgroundPosition: "center",
        backgroundColor:"bg-gradient-to-b from-blue-500 to-blue-900 rounded-lg shadow-lg w-[97%] md:w-[1200px] max-h-[92.5%] p-20 overflow-y-auto"  // Keeps the image centered
      }}>
        {/* Back Button */}
        <button
          className="absolute top-4 left-4 text-green-700 hover:text-green-900"
          aria-label="Go back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-center text-2xl font-extrabold text-green-700 mb-6">
          CV Generate
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Job Role */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Job Role
            </label>
            <select
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-3"
            >
              <option>Select Your Job Title</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Skills
            </label>
            <textarea
              placeholder="Type Your Skills"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-3"
              rows="2"
            ></textarea>
          </div>

          {/* Experience */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Experience
            </label>
            <select
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-3"
            >
              <option>Set Your Experience (Ex: years, months)</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Education */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Education
            </label>
            <input
              type="text"
              placeholder="Type Your Education (Ex: Undergraduate, Graduate)"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-3"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Description
            </label>
            <textarea
              placeholder="Briefly explain yourself (Ex: Projects that you worked on)"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-3"
              rows="3"
            ></textarea>
          </div>

          {/* Generate Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-md shadow hover:bg-green-600 transition"
          >
            Generate
          </button>
        </form>
      </div>
    </div>
  );
};

export default CVInfo;
