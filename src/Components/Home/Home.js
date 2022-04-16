import React from "react";
import Banner from "./Banner/Banner";
import Bio from "./Bio/Bio";
import "./Home.css";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Bio></Bio>
      <Services></Services>
    </div>
  );
};

export default Home;
