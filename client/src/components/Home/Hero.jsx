import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen text-white bg-white z-40 md:top-0 top-16">
      <div className="pt-32 flex justify-center items-center">
        <img
          src="/assets/Home/hero.jpg"
          className="w-[90vw] rounded-3xl md:h-[30vh] h-[20vh] object-cover"
          alt="hero-image"
        />
        <span className="main-heading w-[90vw] text-center px-5 md:text-3xl drop-shadow-lg absolute">
          Your Ultimate Recipe Destination for Foodie Adventures!
        </span>
      </div>
     <div className=" flex justify-center items-center h-1/2">
     <form>   
      <div className="relative w-[60vw]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " placeholder="Search Your Favourite Recipes" required/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
    </div>
</form>
     </div>
    </div>
  );
};

export default Hero;
