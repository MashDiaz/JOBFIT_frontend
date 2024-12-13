import React from "react";

const CoverLetterGenerator = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-yellow-300 to-yellow-100 mx-2 rounded-md mb-2">
      <div className="w-full bg-yellow-200 p-8 rounded-md shadow-lg relative"
      style={{
        backgroundImage: "url('coverletterbg.png') ", 
        backgroundSize: "cover",  
        backgroundPosition: "center",
        backgroundColor:"bg-gradient-to-b from-blue-500 to-blue-900 rounded-lg shadow-lg w-[97%] md:w-[1200px] max-h-[92.5%] p-20 overflow-y-auto"  // Keeps the image centered
      }}>
        
        <button
          className="absolute top-4 left-4 text-yellow-600 hover:text-yellow-800"
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

       
        <h1 className="text-center text-3xl font-bold text-yellow-600 mb-8">
          Cover Letter Generate
        </h1>

       
        <form className="space-y-6">
          
          <div>
            <label className="block text-yellow-800 font-semibold mb-2">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Enter Company Name Here"
              className="w-full border border-yellow-300 rounded-md p-3 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          
          <div>
            <label className="block text-yellow-800 font-semibold mb-2">
              Job Title
            </label>
            <input
              type="text"
              placeholder="Enter Job Title Here"
              className="w-full border border-yellow-300 rounded-md p-3 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          
          <div>
            <label className="block text-yellow-800 font-semibold mb-2">
              Hiring Manager's Name (Optional)
            </label>
            <input
              type="text"
              placeholder="Ex: 'Dear [Hiring Manager's Name]'"
              className="w-full border border-yellow-300 rounded-md p-3 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          
          <div>
            <label className="block text-yellow-800 font-semibold mb-2">
              Relevant Skills
            </label>
            <textarea
              placeholder="Enter Your Relevant Skills Here"
              className="w-full border border-yellow-300 rounded-md p-3 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              rows="2"
            ></textarea>
          </div>

          
          <div>
            <label className="block text-yellow-800 font-semibold mb-2">
              Experience/Projects
            </label>
            <textarea
              placeholder="Demonstrate Your Qualifications Here"
              className="w-full border border-yellow-300 rounded-md p-3 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              rows="3"
            ></textarea>
          </div>

          
          <div>
            <label className="block text-yellow-800 font-semibold mb-2">
              Reason for Applying
            </label>
            <textarea
              placeholder="Explains why you're interested in the role"
              className="w-full border border-yellow-300 rounded-md p-3 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              rows="3"
            ></textarea>
          </div>

          
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-md shadow hover:bg-yellow-600 transition"
          >
            Generate
          </button>
        </form>
      </div>
    </div>
  );
};

export default CoverLetterGenerator;
