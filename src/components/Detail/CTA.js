import React from "react";
import Link from "next/link";

import Container from "../Shared/Container/Container";

const CTA = () => {
  return (
    <div className="w-full flex items-start justify-center bg-black-ebony bg-[url('/images/cta-bg.png')] bg-cover bg-no-repeat bg-center">
      <Container styles="py-12 mdl:py-16">
        <div className="w-full grid grid-cols-1 mdl:grid-cols-[1.2fr_0.8fr] gap-7  mdl:gap-4">
          <div className="flex flex-col items-start justify-start">
            <div className="text-[15px] md:text-base font-semibold text-azure">
              Contact
            </div>
            <h1 className="text-[36px] md:text-[38px] leading-[43px] font-bold text-white w-[95%] xs:w-[80%] sm:w-[60%] mdl:w-[70%]">
              Bekijk Restaurant ’t Huus van Guus{" "}
            </h1>
            <div className="text-[13px] md:text-sm font-medium text-white mt-[2px]">
              3898 LN Zeewolde
            </div>
          </div>
          <div className="flex flex-col xs:flex-row  items-start sm:items-center justify-start mdl:justify-end  gap-2 mdl:gap-3">
            <Link href="/">
              <button
                className={`transition-all flex items-center justify-center rounded-full px-14 py-[12px] text-sm font-medium text-white bg-grey-storm `}
              >
                Website
              </button>
            </Link>
            <Link href="/">
              <button
                className={`transition-all flex items-center justify-center rounded-full px-[60px] xs:px-14 py-[12px] text-sm font-medium text-white bg-azure `}
              >
                E-mail
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CTA;
