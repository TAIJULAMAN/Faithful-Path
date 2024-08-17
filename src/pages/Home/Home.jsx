import React from "react";
import { Helmet } from 'react-helmet-async';
import SliderBanner from "../../components/SliderBanner/SliderBanner";
import Donation from "../Donation/Donation";
import QuranDetails2 from "../Quran/QuranDetails2";
import Quran2 from "../Quran/Quran2";


function Home() {
  return (
    <div className="bg-[#f8ebd5]">
      <Helmet>
        <title>Faithful Path | Home</title>
        </Helmet>
       {/* <SliderBanner/> */}
       {/* <Donation/> */}
       <Quran2/>
    </div>
  );
}

export default Home;
