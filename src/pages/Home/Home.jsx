import React from "react";
import { Helmet } from 'react-helmet-async';
import SliderBanner from "../../components/SliderBanner/SliderBanner";
import Donation from "../Donation/Donation";
import QuranDetails2 from "../Quran/QuranDetails2";


function Home() {
  return (
    <div className="">
      <Helmet>
        <title>Faithful Path | Home</title>
        </Helmet>
       {/* <SliderBanner/> */}
       {/* <Donation/> */}
       <QuranDetails2/> 
    </div>
  );
}

export default Home;
