import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious apartments"
          subtitle="With a robust selection of popular properties on hand."
        >
          <Link to="/rooms" className="btn-primary">
            learn more
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    
    </>
  );
};

export default home;
