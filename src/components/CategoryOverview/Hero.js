import React from "react";

import Container from "../Shared/Container/Container";
import Navbar from "../Shared/Layout/Navbar";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start pt-2 sm:pt-3 lg:pt-6 sxl:pt-9 bg-[url('/images/overview-hero-bg.png')] bg-cover bg-center bg-no-repeat h-[370px] sm:h-[420px] mdl:h-[440px] lg:h-[470px] relative">
      <Navbar logoSize="w-[200px] sm:w-[230px] sxl:w-[275px] h-[75px] sm:h-[95px] sxl:h-[110px]" />
      {/* Hero section content */}
      <div className="w-full max-w-[1280px] flex items-center justify-start my-auto px-2 sm:px-3 md:px-4">
        <div className="w-full max-w-[500px] flex flex-col items-start justify-start gap-[6px]  md:ml-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-left text-white">
            Horeca in Zeewolde!
          </h1>
          <p className="w-[95%] xs:w-[75%] text-[15px] sm:text-base text-left text-white">
            Zeewolde kent, gerekend naar inwonertal, relatief veel restaurants,
            eetcafés, lunchrooms, cafetaria’s en fastfoodketens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
