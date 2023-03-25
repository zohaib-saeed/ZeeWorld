import React from "react";

import Hero from "./Hero";
import CTA from "./CTA";
import Events from "./Events";
import Footer from "../Shared/Layout/Footer";
import Map from "./Map";

<Events />;

const CategoryDetail = () => {
  return (
    <div className="w-full  flex flex-col items-center justify-start">
      <Hero />
      <CTA />
      <Map />
      <Events />
      <Footer />
    </div>
  );
};

export default CategoryDetail;
