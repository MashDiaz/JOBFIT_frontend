import React from "react";
import { useNavigate } from "react-router-dom";
import UserSidebar from "../components/UserSidebar.js"; // Import the UserSidebar component

const Dashboard = () => {
  const navigate = useNavigate();

  const handleViewCVs = () => {
    navigate("/cv-library");
  };

  const handleAppliedJobs = () => {
    navigate("/applied-jobs");
  };

  const handleViewCL = () => {
    navigate("/cl-library");
  };

  const handleGenerateCV = () => {
    alert("Generate CV functionality coming soon!"); // Placeholder action
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white rounded-lg mt-1 mb-5 mx-1 px-1">
      {/* Sidebar */}
      <UserSidebar /> {/* Use the new UserSidebar component */}

      {/* Main Section */}
      <div className="w-5/6 p-5 space-y-4 rounded-lg ml-auto mr-2 mt-auto mb-auto">
        <div className="grid grid-cols-1 gap-6">
          {/* Total CV Generated */}
          <Card
            title="Total CV Generated"
            count="23"
            description="This system utilizes advanced AI to generate personalized CVs
              based on the user’s profile data."
            bgColor="bg-green-200"
            textColor="text-green-800"
            buttonColor="bg-green-500"
            buttonHoverColor="hover:bg-green-600"
            buttonText1="Generate CV"
            buttonText2="View CVs"
            onButtonClick1={handleViewCVs}
            onButtonClick2={handleGenerateCV}
          />

          {/* Applied Jobs */}
          <Card
            title="Applied Jobs"
            count="5"
            description="This system automates job applications by submitting tailored CVs
              to selected listings."
            subText="Pending 1"
            bgColor="bg-purple-200"
            textColor="text-purple-800"
            buttonColor="bg-purple-500"
            buttonHoverColor="hover:bg-purple-600"
            buttonText1="Apply Job"
            buttonText2="View Applied Jobs"
            onButtonClick1={handleAppliedJobs}
            onButtonClick2={() =>
              alert("View Applied Jobs functionality coming soon!")
            }
          />

          {/* Total Cover Letters */}
          <Card
            title="Total Cover Letters Generated"
            count="23"
            description="This system generates customized cover letters by analyzing job
              descriptions and aligning them with user profiles."
            bgColor="bg-yellow-200"
            textColor="text-yellow-800"
            buttonColor="bg-yellow-500"
            buttonHoverColor="hover:bg-yellow-600"
            buttonText1="Generate Cover Letters"
            buttonText2="View Cover Letters"
            onButtonClick1={handleViewCL}
            onButtonClick2={() =>
              alert("View Cover Letters functionality coming soon!")
            }
          />
        </div>
      </div>
    </div>
  );
};

/* Card Component */
const Card = ({
  title,
  count,
  description,
  subText,
  bgColor,
  textColor,
  buttonColor,
  buttonHoverColor,
  buttonText1,
  buttonText2,
  onButtonClick1,
  onButtonClick2,
}) => {
  return (
    <div
      className={`${bgColor} w-full p-6 rounded-lg shadow-lg flex flex-row items-center justify-between gap-4`}
    >
      {/* Title and Count */}
      <div
        className="flex flex-col items-center justify-center w-1/4 p-4 rounded-md border-white border-2"
        style={{ height: "180px" }}
      >
        <h3 className={`text-xl font-bold ${textColor} text-center line-clamp-2`}>
          {title}
        </h3>
        <p className={`text-7xl font-bold mt-2 ${textColor} text-center`}>
          {count}
        </p>
        {subText && (
          <p className={`text-sm mt-1 ${textColor} text-center`}>{subText}</p>
        )}
      </div>

      {/* Description and Buttons */}
      <div className="flex flex-col w-3/4 gap-4">
        {/* Description */}
        <div
          className="w-full flex p-4 rounded-md border-white border-2"
          style={{ flex: 2, height: "180px" }}
        >
          <p className={`text-xl ${textColor} text-center m-auto`}>
            {description}
          </p>
        </div>

        {/* Buttons */}
        <div
          className="w-full flex flex-row items-center justify-center gap-4 p-4 rounded-md"
          style={{ flex: 1, height: "180px" }}
        >
          <button
            onClick={onButtonClick1}
            className={`w-full px-4 py-2 rounded-lg shadow ${buttonColor} ${buttonHoverColor} text-white font-bold`}
          >
            {buttonText1}
          </button>
          <button
            onClick={onButtonClick2}
            className={`w-full px-4 py-2 rounded-lg shadow ${buttonColor} ${buttonHoverColor} text-white font-bold`}
          >
            {buttonText2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
