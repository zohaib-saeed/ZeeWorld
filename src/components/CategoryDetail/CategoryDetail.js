import React from "react";

import Hero from "./Hero";
import RestaurantDetail from "./RestaurantDetail";
import CTA from "./CTA";
import Map from "./Map";
import Events from "./Events";
import Footer from "../Shared/Layout/Footer";

<Events />;

const CategoryDetail = () => {
  return (
    <div className="w-full  flex flex-col items-center justify-start">
      <Hero />
      <RestaurantDetail />
      <CTA />
      <Map />
      <Events />
      <Footer />
    </div>
  );
};

export default CategoryDetail;
