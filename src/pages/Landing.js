import React from "react";


const Landing = () => {
  return (
    <duv>
      {/* Landing Section with Image and Text Side by Side */}
      <section className="bg-white py-6 px-12 mt-1">
        <div className="container mx-auto flex justify-between items-center">
          {/* Text Content Section */}
          <div className="w-1/2">
        <h2 className="text-3xl font-bold text-blue-600">
          Simplify the Search<br />
          Elevate Your Success<br />
          Start Your Dream Job Today
        </h2>
        <button className="mt-7 px-6 py-2 bg-blue-600 text-white text-lg rounded-lg shadow hover:bg-blue-500">
          Get Started
        </button>
        </div>

          {/* Image Section (Replace path below with actual image path) */}
          <div className="w-1/2">
            <img src="/bg img.png" alt="Animated Illustration" className="w-64 h-64 ml-auto" />
          </div>
        </div>
      </section>

      {/* JobFit Process */}
      
      <h3 className="text-inter text-xl font-bold text-center text-blue-600 mb-2 mx-1 py-1  bg-transparent border-2 border-[#43a3fd] p-3 rounded-md">
          JobFit Process
        </h3>
      
      <section className="mx-1 mt-1 py-11 px-11 bg-[#bedffd] border-2 border-[#43a3fd] p-3 rounded-md ">
        
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center text-blue-600">
          {[
            { label: "Add User Details", icon: "👤" },
            { label: "Build CV", icon: "📄" },
            { label: "Scraping Jobs", icon: "🔍" },
            { label: "Automated Apply", icon: "🤖" },
            { label: "Show Analytics", icon: "📊" },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg py-4 px-3">
              <span className="text-3xl">{item.icon}</span>
              <p className="mt-2 text-lg font-semibold text-blue-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JobFit Tools */}
      <section className="bg-transparent py-12">
      <h3 className="text-inter text-xl font-bold text-center text-blue-600 mb-2 mx-1 py-1  bg-transparent border-2 border-[#43a3fd] p-3 rounded-md">
          JobFit Tools
        </h3>
        <div className="flex flex-wrap justify-center gap-6 mx-1 mt-1 py-11 px-11 bg-[#bedffd] border-2 border-[#43a3fd] p-3 rounded-md ">
          {[
            { label: "Build Your Resume", buttonText: "Get Started" },
            { label: "Create Cover Letter", buttonText: "Get Started" },
            { label: "Job Tracking", buttonText: "Get Started" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg py-8 px-8 text-center w-96"
            >
              <h4 className="text-lg font-semibold text-blue-600">
                {item.label}
              </h4>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Insights */}
      <section className="container mx-auto py-12">
      <h3 className="text-inter text-xl font-bold text-center text-blue-600 mb-2 mx-1 py-1  bg-transparent border-2 border-[#43a3fd] p-3 rounded-md">
          Insights
        </h3>
        <div className="flex flex-wrap justify-center gap-16 mx-1 mt-1 py-11 px-11 bg-[#bedffd] border-2 border-[#43a3fd] p-3 rounded-md ">
          {[
            { label: "1.3K", description: "Number of CVs Generated" },
            { label: "811", description: "Number of Jobs Matched" },
            { label: "82.1%", description: "Success Rate of User Landing Jobs" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg py-12 px-12"
            >
              <p className="text-6xl font-bold text-center text-blue-600">{item.label}</p>
              <p className="mt-2 text-sm font-semibold text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription */}
      <section className="bg-pink-100 py-12 text-center">
        <h3 className="text-2xl font-bold text-pink-700 mb-4">
          Auto-Apply Jobs Subscription Plan
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto">
          Unlock the power of automation and streamline your job search with our
          Auto-Apply Jobs Subscription Plan. This plan takes the hassle out of
          job hunting by automatically applying to relevant positions for you.
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-600 text-white text-lg rounded-lg shadow hover:bg-pink-500">
          Get Premium
        </button>
      </section>
    </duv>
  );
};

export default Landing;
