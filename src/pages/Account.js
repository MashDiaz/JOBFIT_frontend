import React from "react";
import { useNavigate } from "react-router-dom";

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
      <div className="w-1/6 bg-blue-200 rounded-lg p-6 flex flex-col mx-4 mt-6 mb-5">
        {/* Profile Section */}
        <div className="text-center">
          {/* Notification Icon */}
          <div className="flex justify-end">
            <button className="text-blue-600">
              <i className="fas fa-bell"></i>
            </button>
          </div>
          {/* Profile Image */}
          <div className="w-24 h-24 mx-auto rounded-full bg-blue-400 "></div>
          {/* Name and Role */}
          <h2 className="text-[19px] text-blue-700 font-bold">John Doe</h2>
          <p className="text-[17.5px]  text-blue-700 ">Student</p>
        </div>
        {/* Info Section */}
        <div className="mt-1 ">
          <div className="text-[17.5px] mb-4  text-blue-700 bg-blue-200 p-5 border-blue-700 border-2 rounded-lg">
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
          {/* Bio */}
          <div className="text-[17px] text-blue-700 bg-blue-200 p-5 mb-4 border-blue-700 border-2 rounded-lg">
            <p>
              “Aspiring Data Scientist with 2 years of experience in analytics.
              Passionate about machine learning and currently seeking
              opportunities in AI development.”
            </p>
          </div>
        </div>
        {/* Logout Button */}
        <div className="mt-auto">
          <button className="w-full bg-red-500 text-white text-xl py-2 rounded font-bold hover:bg-red-600">
            LOG OUT
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="w-5/6 p-5 space-y-4 rounded-lg ml-auto mr-2 mt-auto mb-auto" >
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
            onButtonClick2={handleGenerateCV}// Pass navigation handler
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
            onButtonClick2={() => alert("View Applied Jobs functionality coming soon!")}
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
            onButtonClick1={handleViewCL
            }
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
          {/* Title and Count (1/4 Width) */}
          <div
            className="flex flex-col items-center justify-center w-1/4 p-4 rounded-md border-white border-2"
            style={{ height: "180px" }} // Ensure consistent height
          >
            <h3
              className={`text-xl font-bold ${textColor} text-center line-clamp-2`}
            >
              {title}
            </h3>
            <p
              className={`text-7xl font-bold mt-2 ${textColor} text-center`}
            >
              {count}
            </p>
            {subText && (
              <p
                className={`text-sm mt-1 ${textColor} text-center`}
              >
                {subText}
              </p>
            )}
          </div>
      
          {/* Combined Section for Description and Buttons (3/4 Width) */}
          <div className="flex flex-col w-3/4 gap-4">
            {/* Description (2/3 of 3/4 Width) */}
            <div
              className="w-full flex p-4 rounded-md  border-white border-2"
              style={{ flex: 2, height: "180px" }} // Occupies 2/3 of the height
            >
              <p className={`text-xl ${textColor} text-center m-auto`}>
                {description}
              </p>
            </div>
      
            {/* Buttons (1/3 of 3/4 Width) */}
            <div
              className="w-full flex flex-row items-center justify-center gap-4 p-4 rounded-md "
              style={{ flex: 1, height: "180px" }} // Occupies 1/3 of the height
            >
              <button
              onClick={onButtonClick2}
                className={`w-full px-4 py-2 rounded-lg shadow ${buttonColor} ${buttonHoverColor} text-white font-bold`}
              >
                {buttonText1}
              </button>
              <button
              onClick={onButtonClick1}
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