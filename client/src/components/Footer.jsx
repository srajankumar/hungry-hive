import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="bg-black shadow-sm shadow-white">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Hungry Hives
          </p>
          <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
            Culinary adventures await!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
