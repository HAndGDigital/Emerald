import React from "react";
import { FeaturedServices, Hero } from "../components";
import { services } from "../data";

export const loader = () => {
  return { services };
};

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedServices />
    </>
  );
}

export default Landing;
