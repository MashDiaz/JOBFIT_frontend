import React, { useState } from "react";

const CVLibrary = () => {
  
  const [cvs, setCvs] = useState([
    { id: 1, name: "John Doe", size: "344KB" },
    { id: 2, name: "Jane Smith", size: "344KB" },
    { id: 3, name: "Donald Trump", size: "344KB" },
  ]);

  
  const handleDelete = (id) => {
    setCvs(cvs.filter((cv) => cv.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      

      
      <div className="w-full bg-green-200 p-8 mx-2 rounded-lg mb-5 border-green-600 border-2"
      style={{
        backgroundImage: "url('cvbg.png')", 
        backgroundSize: "cover",  
        backgroundPosition: "center",
        backgroundColor:"bg-gradient-to-b from-blue-500 to-blue-900 rounded-lg shadow-lg w-[90%] md:w-[1200px] max-h-[92.5%] p-20 overflow-y-auto"  // Keeps the image centered
      }}>
        <div className="flex items-center w-full">
          <button className="text-green-600 text-2xl">
            <i className="fas fa-arrow-left"></i>
          </button>
          <h1 className="text-3xl font-bold text-center flex-1 text-green-700">
            CV Library
          </h1>
        </div>
        <div className="mt-8 max-w-full mx-auto space-y-4">
          {cvs.map((cv) => (
            <div
              key={cv.id}
              className="flex items-center justify-between bg-green-400  text-white p-4 rounded-md  shadow-md"
            >
              <div>
                <p className="text-lg font-medium">{cv.name}</p>
                <p className="text-sm">{cv.size}</p>
              </div>
              <div className="flex space-x-4">
                
                <button
                  className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700"
                  onClick={() => alert(`Downloading ${cv.name}`)}
                >
                  <i className="fas fa-download"></i>
                </button>
                
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
