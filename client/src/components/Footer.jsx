import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black shadow-sm shadow-white">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Hungry Hives
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
            Culinary adventures await!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
