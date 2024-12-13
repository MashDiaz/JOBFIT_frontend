import React from "react";

const UserSidebar = () => {
  return (
    <div className="w-1/6 bg-blue-200 rounded-lg p-6 flex flex-col mx-4 mt-6 mb-5">
      
      <div className="text-center">
        
        <div className="flex justify-end">
          <button className="text-blue-600">
            <i className="fas fa-bell"></i>
          </button>
        </div>
        
        <div className="w-24 h-24 mx-auto rounded-full bg-blue-400"></div>
        
        <h2 className="text-[19px] text-blue-700 font-bold">John Doe</h2>
        <p className="text-[17.5px] text-blue-700">Student</p>
      </div>

      
      <div className="mt-1">
        <div className="text-[17.5px] mb-4 text-blue-700 bg-blue-200 p-5 border-blue-700 border-2 rounded-lg">
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
       
        <div className="text-[17px] text-blue-700 bg-blue-200 p-5 mb-4 border-blue-700 border-2 rounded-lg">
          <p>
            “Aspiring Data Scientist with 2 years of experience in analytics.
            Passionate about machine learning and currently seeking
            opportunities in AI development.”
          </p>
        </div>
      </div>

      
      <div className="mt-auto">
        <button className="w-full bg-red-500 text-white text-xl py-2 rounded font-bold hover:bg-red-600">
          LOG OUT
        </button>
      </div>
    </div>
  );
};

export default UserSidebar;
