import React from "react";

import Hero from "./Hero";
import CateringInZeewolde from "./CateringInZeewolde";

const CategoryOverview = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <Hero />
      <CateringInZeewolde />
    </div>
  );
};

export default CategoryOverview;
