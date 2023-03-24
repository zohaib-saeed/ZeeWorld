import React from "react";
import Container from "../Shared/Container/Container";

import Navbar from "../Shared/Layout/Navbar";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start pt-9 bg-[url('/images/overview-hero-bg.png')] bg-cover bg-center bg-no-repeat h-[470px] relative">
      <Navbar logoSize="w-[275px] h-[110px]" />
      {/* Hero section content */}
      <div className="w-full max-w-[1280px] flex items-center justify-start my-auto px-8">
        <div className="w-full max-w-[500px] flex flex-col items-start justify-start gap-3">
          <h1 className="text-4xl font-bold text-left text-white">
            Horeca in Zeewolde!
          </h1>
          <p className="w-[75%] text-base text-left text-white">
            Zeewolde kent, gerekend naar inwonertal, relatief veel restaurants,
            eetcafés, lunchrooms, cafetaria’s en fastfoodketens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
