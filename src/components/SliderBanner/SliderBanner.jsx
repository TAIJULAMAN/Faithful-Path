import React, { useRef, useState } from "react";
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
import img5 from "../../assets/SliderBanner/5.png";
import img6 from "../../assets/SliderBanner/6.png";
import img7 from "../../assets/SliderBanner/7.png";
import img8 from "../../assets/SliderBanner/8.png";
import img9 from "../../assets/SliderBanner/9.png";


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
      <SwiperSlide>
        {" "}
        <img src={img5} />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={img6} />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={img7} />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={img8} />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={img9} />
      </SwiperSlide>
    </Swiper>
  );
}

export default SliderBanner;
