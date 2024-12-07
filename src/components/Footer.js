import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto text-center">
          <h4 className="text-lg font-semibold">Join Our Quarterly Newsletter</h4>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your e-mail here"
              className="px-4 py-2 w-64 rounded-md"
            />
            <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
              Submit
            </button>
          </form>
          <p className="mt-6">© 2024 JobMatcher. All rights reserved.</p>
        </div>
      </footer>
  );
};

export default Footer;
