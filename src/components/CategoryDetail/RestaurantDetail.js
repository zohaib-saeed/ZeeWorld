import React from "react";
import Image from "next/image";

const RestaurantDetail = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
      {/* Col 1 */}
      <div className="order-last md:order-first w-full py-12  flex items-center justify-start md:justify-end  bg-conifer">
        <div className="w-full md:max-w-[640px] pl-2 sm:pl-3 md:pl-4  md:pr-7 lg:pr-10 flex flex-col items-start justify-start text-white ">
          <div className="text-[15px] md:text-base font-semibold ">Over</div>
          <h1 className="font-bold text-[36px] md:text-[38px] leading-[43px] text-left w-[70%] sm:w-[50%] md:w-[85%] mdl:w-[70%] sxl:w-[50%] mt-[6px]">
            Restaurant ’t Huus van Guus
          </h1>
          <p className="w-[92%] sm:w-[85%] md:w-full text-[15px] md:text-base text-left mt-3">
            Het hele gebied wordt nog veel verder doorontwikkeld. Wat zitten we
            tochop een prachtige locatie!
          </p>
          <p className="w-[92%] sm:w-[85%] md:w-full text-[15px] md:text-base text-left mt-3">
            Op een mooie zomerse dag stonden zelfs de burgemeesters van
            Harderwijk enZeewolde ineens samen voor onze deur met een prachtig
            blauw plaatsnaambord‘Harderwijk Noord’. Een enorme eer en een zeer
            mooie benaming voor een fijnesamenwerking tussen beide gemeenten in
            dit unieke gebied aan het Veluwemeer.
          </p>
          <button
            className={`mt-3 transition-all flex items-center justify-center rounded-full px-9 mdl:px-11 py-[10px] mdl:py-[12px] text-sm font-medium border-2 border-solid border-white text-white cursor-pointer hover:bg-white hover:bg-opacity-25 hover:border-white hover:text-white`}
          >
            Bekijk website
          </button>
        </div>
      </div>
      {/* Col 2  */}
      <div className="w-full h-[400px] md:h-full flex items-center justify-center relative">
        <Image
          src="/images/restaurant-huus-van.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default RestaurantDetail;
