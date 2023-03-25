import React from "react";
import Image from "next/image";

const CategoryCard = () => {
  return (
    <div className="w-full max-w-[83%] xs:max-w-none flex flex-col items-center justify-start relative">
      <div className="w-full h-[240px] xs:h-[190px] vsm:h-[210px] sm:h-[250px] md:h-[200px] mdl:h-[240px] lg:h-[270px] sxl:h-[300px] rounded-3xl overflow-hidden flex items-center justify-center relative">
        <Image
          src="/images/category-sample.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="w-[85%] p-3 xs:p-4 mdl:p-5 lg:p-6 rounded-2xl flex flex-col items-center justify-center gap-[2px] bg-white absolute bottom-[-60px] shadow-category-card">
        <div className="text-sm font-semibold text-azure">Category</div>
        <h3 className="font-bold text-xl text-black-ebony mb-[3px]">
          Lorem Ipsum
        </h3>
        <button
          className={`transition-all flex items-center justify-center rounded-full px-9 mdl:px-11 py-[8px] mdl:py-[10px] text-sm font-medium border-2 border-solid border-grey-storm text-grey-storm cursor-pointer hover:bg-conifer hover:border-conifer hover:text-white`}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
