import React from "react";
import Image from "next/image";

import Container from "../Shared/Container/Container";

const Clients = () => {
  return (
    <Container styles="py-4 sm:py-6">
      <div className="w-full flex items-center justify-center flex-wrap xs:flex-nowrap xs:justify-between">
        {/* Client 1  */}
        <div className="w-[180px] vsm:w-[200px] sm:-[220px] md:w-[250px] lg:w-[300px] h-[80px] vsm:h-[100px] sm:h-[115px] md:h-[145px] lg:h-[185px] flex items-center justify-center relative">
          <Image
            src="/images/clients/actueel.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        {/* Client 2 */}
        <div className="w-[180px] vsm:w-[200px] sm:w-[220px] md:w-[250px] lg:w-[300px] h-[80px] vsm:h-[100px]  sm:h-[115px] md:h-[145px] lg:h-[185px] flex items-center justify-center relative">
          <Image
            src="/images/clients/bilk.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        {/* Client 3 */}
        <div className="w-[180px] vsm:w-[200px] sm:w-[220px] md:w-[250px] lg:w-[300px] h-[80px] vsm:h-[100px]  sm:h-[115px] md:h-[145px] lg:h-[185px] flex items-center justify-center relative">
          <Image
            src="/images/clients/locale-omreop.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
    </Container>
  );
};

export default Clients;
