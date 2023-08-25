import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div>
      <div class="bg-black">
        <div class="mx-auto py-5 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
          <p class="text-gray-100 text-center sm:text-left">
            © {currentYear} Hungry Hive
          </p>
          <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-100">
            Culinary adventures await!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
