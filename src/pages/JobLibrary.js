import React, { useState } from "react";

const CVLibrary = () => {
  // Sample data for generated CVs
  const [cvs, setCvs] = useState([
    { id: 1, name: "John Doe", company: "ABC Company", size: "344KB" },
    { id: 2, name: "Jane Smith", company: "IPS Company", size: "344KB" },
    { id: 3, name: "Donald Trump", company: "Surge", size: "344KB" },
  ]);

  // Handle CV deletion
  const handleDelete = (id) => {
    setCvs(cvs.filter((cv) => cv.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-purple-100 p-6">
      {/* Main Content */}
      <div className="w-full bg-purple-300 p-8 rounded-lg shadow-lg"
      style={{
        backgroundImage: "url('jobbg.png')", // Replace with your image path
        backgroundSize: "cover",  // Makes sure the image covers the entire background
        backgroundPosition: "center",
        backgroundColor:"bg-gradient-to-b from-blue-500 to-blue-900 rounded-lg shadow-lg w-[90%] md:w-[1200px] max-h-[92.5%] p-20 overflow-y-auto"  // Keeps the image centered
      }}>
        {/* Header */}
        <div className="flex items-center mb-6">
          <button
            className="text-purple-800 text-2xl"
            onClick={() => alert("Back button clicked!")}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <h1 className="text-3xl font-bold text-purple-900 flex-1 text-center">
            Applied Job
          </h1>
        </div>

        {/* List of CVs */}
        <div className="space-y-6">
          {cvs.map((cv) => (
            <div
              key={cv.id}
              className="flex items-center justify-between bg-purple-500 text-white p-4 rounded-lg shadow-md"
            >
              <div>
                <p className="text-lg font-semibold">{cv.name}</p>
                <p className="text-sm italic">{cv.company}</p>
              </div>
              <div className="flex items-center space-x-4">
                {/* View CV Button */}
                <button
                  className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                  onClick={() => alert(`Viewing CV of ${cv.name}`)}
                >
                  View CV
                </button>
                {/* Status */}
                <div className="flex items-center space-x-2 bg-green-600 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">Applied</span>
                  <i className="fas fa-check"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CVLibrary;
