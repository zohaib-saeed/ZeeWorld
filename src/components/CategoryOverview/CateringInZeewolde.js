import React from "react";

import Container from "../Shared/Container/Container";

const CateringInZeewolde = () => {
  return (
    <div className="w-full bg-black-ebony flex flex-col items-center justify-start">
      <Container styles="py-7 vsm:py-8 md:py-12">
        <div className="w-full flex flex-col items-center justify-start ">
          <div className="text-base md:text-[18px] text-conifer font-semibold">
            Horeca in Zeewolde!
          </div>
          <h2 className="text-white text-[28px] md:text-[32px] font-bold w-full text-center">
            Ontdek het in Zeewolde
          </h2>
        </div>
        <div className="w-[75%] flex items-center justify-between gap-4 mt-5 xs:mt-7 md:mt-12">
          <div className="flex flex-col items-center justify-between gap-[6px] md:gap-2">
            <div className="font-bold text-3xl vsm:text-4xl md:text-5xl text-white">
              42
            </div>
            <div className="text-[15px] vsm:text-base md:text-[18px] font-medium text-white">
              Locaties
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-[6px] md:gap-2">
            <div className="font-bold text-3xl vsm:text-4xl md:text-5xl text-white">
              3
            </div>
            <div className="text-[15px] vsm:text-base md:text-[18px] font-medium text-white">
              Evenementen
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-[6px] md:gap-2">
            <div className="font-bold text-3xl vsm:text-4xl md:text-5xl text-white">
              33
            </div>
            <div className="text-[15px] vsm:text-base md:text-[18px] font-medium text-white">
              Iets anders
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CateringInZeewolde;
