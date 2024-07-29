import React from "react";
import { Helmet } from 'react-helmet-async';
import SliderBanner from "../../components/SliderBanner/SliderBanner";


function Home() {
  return (
    <div className="">
      <Helmet>
        <title>Faithful Path | Home</title>
        </Helmet>
       <SliderBanner/>
    </div>
  );
}

export default Home;
