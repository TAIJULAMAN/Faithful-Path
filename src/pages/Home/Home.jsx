import React from "react";
import { Helmet } from 'react-helmet-async';
import SliderBanner from "../../components/SliderBanner/SliderBanner";
import Donation from "../Donation/Donation";


function Home() {
  return (
    <div className="">
      <Helmet>
        <title>Faithful Path | Home</title>
        </Helmet>
       {/* <SliderBanner/> */}
       <Donation/>
    </div>
  );
}

export default Home;
