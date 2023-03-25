import React from "react";

import Hero from "./Hero";
import CateringInZeewolde from "./CateringInZeewolde";
import Footer from "../Shared/Layout/Footer";
import ToDiscover from "./ToDiscover";

const CategoryOverview = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <Hero />
      <CateringInZeewolde />
      <ToDiscover />
      <Footer />
    </div>
  );
};

export default CategoryOverview;
