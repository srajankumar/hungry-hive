import React from "react";

const Hero = () => {
  return (
    <div className="w-full fixed -z-40 md:top-0 top-16">
      <img
        src="/assets/Home/hero.jpg"
        alt="hero-image"
        className="object-cover"
      />
    </div>
  );
};

export default Hero;
