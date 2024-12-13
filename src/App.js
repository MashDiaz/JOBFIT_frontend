import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Account from"./pages/Account"
import CVLibrary from "./pages/CVLibrary"; 
import AppliedJobs from "./pages/JobLibrary"; 
import CLLibrary from "./pages/CLLibrary";
import CVInfo from "./pages/CVinfo";
import AutoApplyJobs from "./pages/JobApply";
import CLInfo from"./pages/CLinfo";
import AdminDashboard from "./pages/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
  };

  const closeLoginModal = () => setIsLoginOpen(false);

  const openSignUpModal = () => {
    setIsSignUpOpen(true);
    setIsLoginOpen(false);
  };

  const closeSignUpModal = () => setIsSignUpOpen(false);

  return (
    <Router>
      <div className="font-sans bg-white-50 text-gray-900">
        <Navbar onSignIn={openLoginModal} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Landing/>}/>
          <Route path="/account" element={<Account />} />
          <Route path="/cv-library" element={<CVLibrary />} /> 
          <Route path="/applied-jobs" element={<AppliedJobs />} /> 
          <Route path="/cl-library" element={<CLLibrary />} /> 
          <Route path="/cv-info" element={<CVInfo />} /> 
          <Route path="/job-apply" element={<AutoApplyJobs />} /> 
          <Route path="/cl-info" element={<CLInfo />} /> 
          <Route path="/admin" element={<AdminDashboard />} /> 
        </Routes>
        <Footer />

        
        <Login
          isOpen={isLoginOpen}
          onClose={closeLoginModal}
          onSignUp={openSignUpModal}
        />

        
        <SignUp
          isOpen={isSignUpOpen}
          onClose={closeSignUpModal}
          onLogin={openLoginModal}
        />
      </div>
    </Router>
  );
};

export default App;
