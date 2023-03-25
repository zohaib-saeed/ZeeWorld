import React from "react";

import CategoryCard from "../Shared/CategoryCard/CategoryCard";
import Container from "../Shared/Container/Container";

const Events = () => {
  return (
    <Container styles="pt-8 md:pt-10 lg:pt-16 pb-24 md:pb-28 lg:pb-32 gap-8 sm:gap-12 mdl:gap-16">
      <div className="w-full max-w-[95%] xs:max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]  flex flex-col items-center justify-start gap-[2px] xs:gap-[4px]">
        <h3 className="font-semibold text-base md:text-[18px] text-azure ">
          Evenementen
        </h3>
        <h2 className="font-bold text-[28px] md:text-4xl text-black-dune capitalize">
          Wat is er te doen?
        </h2>
      </div>
      <div className="w-full flex flex-col items-center justify-start xs:grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xs:gap-x-2 sm:gap-x-3 mdl:gap-x-4 lg:gap-x-5  xs:gap-y-20 sm:gap-y-20 mdl:gap-y-24 gap-20 ">
        {[0, 1, 2].map((item, index) => (
          <CategoryCard key={index} />
        ))}
      </div>
    </Container>
  );
};

export default Events;
