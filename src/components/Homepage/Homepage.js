import React from "react";

import Hero from "./Hero";
import ToDiscover from "./ToDiscover";
import WelcomeZeeworld from "./WelcomeZeeworld";
import Experience from "./Experience/Experience";
import Clients from "./Clients";
import Footer from "../Shared/Layout/Footer";

const Homepage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <Hero />
      <WelcomeZeeworld />
      <ToDiscover />
      <Experience />
      <Clients />
      <Footer />
    </div>
  );
};

export default Homepage;
