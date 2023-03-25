import React from "react";
import Image from "next/image";

import Container from "../Shared/Container/Container";

const WelcomeZeeworld = () => {
  return (
    <Container>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mdl:gap-8 lg:gap-12 sxl:gap-20 pt-24 md:pt-28 sxl:pt-40 pb-10 md:pb-14">
        {/* Col 1 */}
        <div className="w-[80%] vsm:w-[68%] sm:w-[60%] md:w-full grid grid-cols-2 gap-3 mdl:gap-4 lg:gap-5 sxl:gap-8">
          <div className="w-full flex flex-col items-center justify-between gap-3 mdl:gap-4 lg:gap-6">
            <div className="w-full h-[230px] xs:h-[250px] vsm:h-[270px] md:h-[250px] mdl:h-[300px] lg:h-[330px] rounded-2xl overflow-hidden relative flex items-center justify-center ">
              <Image
                src="/images/welkom-zeewolde/1.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-[230px] xs:h-[250px] vsm:h-[270px] md:h-[250px] mdl:h-[300px] lg:h-[330px]  rounded-2xl overflow-hidden relative flex items-center justify-center ">
              <Image
                src="/images/welkom-zeewolde/2.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full h-[250px] xs:h-[270px] vsm:h-[290px] mdl:h-[320px] lg:h-[370px] sxl:h-[400px] my-auto rounded-2xl overflow-hidden relative flex items-center justify-center ">
            <Image
              src="/images/welkom-zeewolde/3.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Col 2  */}
        <div className="w-full flex flex-col items-start justify-center gap-6 sm:gap-7 mdl:gap-10">
          <div className="w-full flex flex-col items-start justify-start gap-[2px] sm:gap-1 mdl:gap-3">
            <h3 className="font-semibold text-[15px] sm:text-base mdl:text-[18px] text-azure ">
              WELKOM
            </h3>
            <h2 className="font-bold text-[28px] sm:text-3xl mdl:text-4xl text-black-dune capitalize">
              Welkom in Zeewolde
            </h2>
            <p className="text-xl sm:text-[22px] mdl:text-2xl font-medium ">
              Al plannen gemaakt voor dit jaar?
            </p>
            <p className="w-[95%] sm:w-[80%] md:w-full text-[15px] mdl:text-base text-grey-storm text-left">
              Nog even en het toeristisch seizoen gaat weer van start. Het
              eerste weekend waarop je met het gezin eropuit kunt trekken staat
              dan alweer voor de deur, het paasweekend.
            </p>
            <p className="w-[95%] sm:w-[80%] md:w-full text-base text-grey-storm text-left">
              Boek een van de vele accommodaties in Zeewolde en trek heerlijk de
              natuur in. Stap op de fiets of maak een heerlijke wandeling in een
              van vele natuurgebieden van Zeewolde.
            </p>
          </div>
          <button
            className={` border-none transition-all flex items-center justify-center rounded-full px-12 mdl:px-14 py-[11px] mdl:py-[13px] text-white text-base font-medium bg-conifer`}
          >
            Bekijken
          </button>
        </div>
      </div>
    </Container>
  );
};

export default WelcomeZeeworld;
