import React, { useState } from "react";

const AutoApplyJobs = () => {
  const [isAutoApplyActive, setIsAutoApplyActive] = useState(false);

  const handleAutoApplyToggle = () => {
    setIsAutoApplyActive(!isAutoApplyActive);
  };

  return (
    <div className="flex flex-col mx-2 bg-white items-center justify-center">
      {/* Header */}
      <div className="w-full bg-purple-600 p-6 rounded-lg shadow-lg">
        <button className="text-purple-200 text-2xl mb-4">
          <i className="fas fa-arrow-left"></i>
        </button>
        <h1 className="text-3xl font-bold text-center text-purple-100 mb-7">
          AUTO APPLY JOBS
        </h1>
        <p className="mt-4 text-purple-100 text-center">
          This function auto-applies using a generated customized CV for every
          job vacancy that matches your qualifications and skills.
        </p>
        <p className="text-purple-100 text-center mt-2 mb-7">
          First 5 job vacancies are free for each user. After that, a premium
          subscription is required.
        </p>

        {/* Buttons */}
        <div className="flex justify-center items-center mt-6 space-x-4 mb-3">
          {!isAutoApplyActive ? (
            <button
              className="bg-purple-300 text-white py-2 px-6 rounded-md hover:bg-purple-700"
              onClick={handleAutoApplyToggle}
            >
              START AUTO APPLY
            </button>
          ) : (
            <button
              className="bg-gray-400 text-gray-700 py-2 px-6 rounded-md cursor-not-allowed"
            >
              AUTO APPLY STARTED
            </button>
          )}
          {isAutoApplyActive && (
            <button
              className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600"
              onClick={handleAutoApplyToggle}
            >
              STOP AUTO APPLY
            </button>
          )}
          <button className="bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600">
            GET PREMIUM
          </button>
        </div>
      </div>

      {/* Suggested Jobs */}
      <div className="w-full mt-2 mb-3 bg-purple-200 p-6 rounded-lg ">
        <h2 className="text-lg font-bold text-purple-700 mb-4">SUGGESTED JOBS</h2>
        <div className="space-y-4">
          <div className="bg-purple-400 text-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-bold">Senior Software Engineer</h3>
            <p>ABC Company</p>
          </div>
          <div className="bg-purple-400 text-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-bold">Full Stack Developer</h3>
            <p>ABC Company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoApplyJobs;
