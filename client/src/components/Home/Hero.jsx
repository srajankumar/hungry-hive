import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen text-white bg-white z-40 md:top-0 top-16">
      <div className="md:pt-32 flex justify-center items-center">
        <img
          src="/assets/Home/hero1.jpg"
          className="w-[80vw] rounded-3xl h-[30vh] object-cover"
          alt="hero-image"
        />
        <span className="main-heading text-3xl drop-shadow-lg absolute">
          Your Ultimate Recipe Destination for Foodie Adventures!
        </span>
      </div>
    </div>
  );
};

export default Hero;
