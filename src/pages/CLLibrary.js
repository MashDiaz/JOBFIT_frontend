import React, { useState } from "react";

const CoverLetterLibrary = () => {
  // Sample data for generated cover letters
  const [coverLetters, setCoverLetters] = useState([
    { id: 1, name: "John Doe", size: "344KB" },
    { id: 2, name: "Jane Smith", size: "344KB" },
    { id: 3, name: "Donald Trump", size: "344KB" },
  ]);

  // Handle cover letter deletion
  const handleDelete = (id) => {
    setCoverLetters(coverLetters.filter((letter) => letter.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-yellow-100 p-6">
      {/* Sidebar (optional, not needed for this component) */}

      {/* Cover Letter Library */}
      <div className="w-full bg-yellow-200 p-4 mx-0 rounded-lg mb-5"
      style={{
        backgroundImage: "url('coverletterbg.png') ", // Replace with your image path
        backgroundSize: "cover",  // Makes sure the image covers the entire background
        backgroundPosition: "center",
        backgroundColor:"bg-gradient-to-b from-blue-500 to-blue-900 rounded-lg shadow-lg w-[97%] md:w-[1200px] max-h-[92.5%] p-20 overflow-y-auto"  // Keeps the image centered
      }}>
        <div className="flex items-center w-full">
          <button className="text-yellow-600 text-2xl">
            <i className="fas fa-arrow-left"></i>
          </button>
          <h1 className="text-3xl font-bold text-center flex-1 text-yellow-700">
            Cover Letter Library
          </h1>
        </div>
        <div className="mt-8 max-w-full mx-auto space-y-4">
          {coverLetters.map((letter) => (
            <div
              key={letter.id}
              className="flex items-center justify-between bg-yellow-400 text-white p-4 rounded-md  shadow-md"
            >
              <div>
                <p className="text-lg font-medium">{letter.name}</p>
                <p className="text-sm">{letter.size}</p>
              </div>
              <div className="flex space-x-4">
                {/* Download Button */}
                <button
                  className="bg-yellow-600 px-4 py-2 rounded-md hover:bg-yellow-700"
                  onClick={() => alert(`Downloading ${letter.name}`)}
                >
                  <i className="fas fa-download"></i>
                </button>
                {/* Delete Button */}
                <button
                  className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(letter.id)}
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

export default CoverLetterLibrary;
