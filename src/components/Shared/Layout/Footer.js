import React from "react";

import Container from "../Container/Container";

const Footer = () => {
  return (
    <div className="w-full bg-black-ebony flex items-center justify-start flex-col">
      <Container styles="py-3 sm:py-5 lg:py-7">
        <div className="w-full flex flex-col vsm:flex-row items-center justify-between gap-4">
          {/* Links to other pages  */}
          <div className="flex items-center justify-start gap-4 sm:gap-5">
            <div className="text-[13px] sm:text-[15px] font-medium text-grey-regent cursor-pointer">
              Privacy policy
            </div>
            <div className="text-[13px] sm:text-[15px]  font-medium text-grey-regent cursor-pointer">
              Legal notice
            </div>
            <div className="text-[13px] sm:text-[15px]  font-medium text-grey-regent cursor-pointer">
              Terms of service
            </div>
          </div>
          {/* Copyright label  */}
          <div className="text-[13px] sm:text-[15px]  font-medium text-grey-regent">
            © Copyright 2023 - Puur
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
