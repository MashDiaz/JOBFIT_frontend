import React from "react";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white mx-1 rounded-lg mb-2">
      
      <DashboardSidebar />

      
      <div className="w-5/6 p-6 space-y-6">
        
      <div className="grid grid-cols-3 gap-5">
  <StatCard
    title="TOTAL CV GENERATED"
    count="110"
    bgColor="bg-black"
    textColor="text-green-300"
  />

  <StatCard
    title="TOTAL JOBS APPLIED"
    count="89"
    bgColor="bg-black"
    textColor="text-purple-300"
  />

  <StatCard
    title="TOTAL COVER LETTERS GENERATED"
    count="52"
    bgColor="bg-black"
    textColor="text-yellow-300"
  />
</div>


        
        <div className="bg-black p-4 rounded-lg space-y-2">
          <h3 className="text-lg font-bold">Notification</h3>
          <Notification message="Successfully applied John Doe's CV for ABC Company!" />
          <Notification message="Successfully applied Jennifer's CV for BY Logistics!" />
          <Notification message="Successfully applied Kumara's CV for BY Logistics!" />
        </div>
      </div>
    </div>
  );
};

const DashboardSidebar = () => {
  return (
    <div className="w-1/6 bg-black rounded-lg p-6 flex flex-col mx-4 mt-6 mb-5">
      
      <div className="text-center">
        
        <div className="flex justify-end">
          <button className="text-blue-600">
            <i className="fas fa-bell"></i>
          </button>
        </div>
       
        <div className="w-24 h-24 mx-auto rounded-full bg-blue-300"></div>
        
        <h2 className="text-[19px] text-blue-700 font-bold">John Doe</h2>
        <p className="text-[17.5px] text-blue-700">Administrator</p>
      </div>

      
      <div className="mt-1">
        <div className="text-[17.5px] mb-4 text-blue-700 bg-black p-5 border-blue-700 border-2 rounded-lg">
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
        
        <div className="text-[17px] text-blue-700 bg-black p-5 mb-4 border-blue-700 border-2 rounded-lg">
          <p>
            “Aspiring Data Scientist with 2 years of experience in analytics.
            Passionate about machine learning and currently seeking
            opportunities in AI development.”
          </p>
        </div>
      </div>

      
      <button className="w-full py-2 bg-blue-500 text-white text-xl rounded-lg font-bold hover:bg-blue-600 mb-4">
        JOB SCRAPE
      </button>
      <button className="w-full py-2 bg-red-500 text-white text-xl rounded-lg font-bold hover:bg-red-600">
        LOG OUT
      </button>
    </div>
  );
};

const StatCard = ({ title, count, bgColor, textColor, height }) => {
    return (
      <div
        className={`${bgColor} ${height || "h-48"} p-4 rounded-lg shadow-lg flex flex-col items-center justify-center`}
      >
        
        <h3 className={`text-xl font-bold ${textColor} text-center`}>
          {title}
        </h3>
        <p className={`text-8xl font-bold mt-2 ${textColor}`}>
          {count}
        </p>
      </div>
    );
  };
  

const Notification = ({ message }) => {
  return (
    <div className="bg-blue-500 text-white p-2 rounded-lg shadow">
      {message}
    </div>
  );
};

export default AdminDashboard;
