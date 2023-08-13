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
    </div>
  );
};

export default Hero;
