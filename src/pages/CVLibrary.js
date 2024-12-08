import React, { useState } from "react";

const CVLibrary = () => {
  // Sample data for generated CVs
  const [cvs, setCvs] = useState([
    { id: 1, name: "John Doe", size: "344KB" },
    { id: 2, name: "Jane Smith", size: "344KB" },
    { id: 3, name: "Donald Trump", size: "344KB" },
  ]);

  // Handle CV deletion
  const handleDelete = (id) => {
    setCvs(cvs.filter((cv) => cv.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-200 p-6 flex flex-col">
        <div className="text-center">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-24 h-24 mx-auto rounded-full bg-blue-400"></div>
            <button className="absolute top-0 right-10 text-blue-600">
              <i className="fas fa-bell"></i>
            </button>
          </div>

          {/* User Details */}
          <h2 className="mt-4 text-2xl font-bold text-blue-700">John Doe</h2>
          <p className="text-lg text-blue-700">Student</p>

          <div className="mt-4 text-left text-blue-700">
            <p>
              <strong>Age:</strong> 22
            </p>
            <p>
              <strong>Location:</strong> Western
            </p>
            <p>
              <strong>E-Mail:</strong> johndoe@mail.com
            </p>
          </div>

          {/* User Bio */}
          <div className="mt-4 text-blue-700 bg-blue-100 p-4 rounded-md border-blue-500 border">
            <p>
              “Aspiring Data Scientist with 2 years of experience in analytics.
              Passionate about machine learning and currently seeking
              opportunities in AI development.”
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <button className="mt-auto bg-red-500 text-white text-xl py-2 rounded-md hover:bg-red-600">
          LOG OUT
        </button>
      </div>

      {/* CV Library */}
      <div className="w-3/4 bg-green-50 p-8">
        <div className="flex items-center">
          <button className="text-green-600 text-2xl">
            <i className="fas fa-arrow-left"></i>
          </button>
          <h1 className="text-3xl font-bold text-center flex-1 text-green-700">
            CV Library
          </h1>
        </div>
        <div className="mt-8 max-w-3xl mx-auto space-y-4">
          {cvs.map((cv) => (
            <div
              key={cv.id}
              className="flex items-center justify-between bg-green-400 text-white p-4 rounded-md"
            >
              <div>
                <p className="text-lg font-medium">{cv.name}</p>
                <p className="text-sm">{cv.size}</p>
              </div>
              <div className="flex space-x-4">
                {/* Download Button */}
                <button
                  className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700"
                  onClick={() => alert(`Downloading ${cv.name}`)}
                >
                  <i className="fas fa-download"></i>
                </button>
                {/* Delete Button */}
                <button
                  className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(cv.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CVLibrary;
