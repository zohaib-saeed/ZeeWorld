import React from "react";
import Container from "../Shared/Container/Container";

import Navbar from "../Shared/Layout/Navbar";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start pt-2 sm:pt-3 lg:pt-6 sxl:pt-9 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat h-screen min-h-[540px] md:min-h-[570px] mdl:min-h-[650px] relative">
      <Navbar logoSize="w-[200px] sm:w-[230px] sxl:w-[275px] h-[75px] sm:h-[95px] sxl:h-[110px]" />
      {/* Hero section content */}
      <div className="w-full max-w-[1280px] flex items-center justify-start my-auto px-2 sm:px-3 md:px-4 ">
        <div className="w-full max-w-[500px] flex flex-col items-start justify-start gap-[6px] ml-12 md:ml-16">
          <h1 className="w-[80%] sm:w-full text-3xl sm:text-4xl font-bold text-left text-white">
            Ontdek de mogelijkheden van{" "}
            <span className="text-azure "> Zeewolde</span>
          </h1>
          <p className="w-[75%] text-[15px] sm:text-base text-left text-white">
            De ideale omgeving om te recreëren, te verblijven, te werken en te
            wonen.
          </p>
        </div>
      </div>
      {/* Frames  */}
      <div className="w-full flex items-center justify-center gap-[4px] xs:gap-2 mdl:gap-4 sxl:gap-6 absolute bottom-[-30px] xs:bottom-[-40px] sm:bottom-[-50px] mdl:bottom-[-60px] sxl:bottom-[-80px] transition-all">
        {[0, 1, 2, 3, 4].map((item, index) => (
          <div
            key={index}
            className="w-[65px] xs:w-[80px] sm:w-[100px] mdl:w-[125px] sxl:w-[167px] h-[65px] xs:h-[80px] sm:h-[100px] mdl:h-[125px] sxl:h-[167px] bg-azure rounded-xl sm:rounded-3xl "
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
