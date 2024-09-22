// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SliderBanner.css";

// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../assets/SliderBanner/1.png";
import img2 from "../../assets/SliderBanner/2.png";
import img3 from "../../assets/SliderBanner/3.png";
import img4 from "../../assets/SliderBanner/4.png";



function SliderBanner() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <img src={img1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={img4} />
      </SwiperSlide>
     
     
    </Swiper>
  );
}

export default SliderBanner;
