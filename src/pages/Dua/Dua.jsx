import React from "react";
import Imaniat from "../../components/Dua/Imaniat/Imaniat";
import BeforeDeath from "../../components/Dua/BeforeDeath/BeforeDeath";
import Home from "../../components/Dua/Home/Home";
import Food from "../../components/Dua/Food/Food";
import Pak from "../../components/Dua/Pak/Pak";

function Dua() {
  return (
    <div className="bg-[#e8e9f3] text-[#2e424d] px-[100px]">
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          ঈমানিয়্যাত
        </h1>
        <Imaniat />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          মৃত্যুর পূর্বাপর
        </h1>
        <BeforeDeath />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          বাসস্থান
        </h1>
        <Home />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          পানাহার
        </h1>
        <Food />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          পাক পবিত্রতা
        </h1>
        <Pak/>
      </div>
    </div>
  );
}

export default Dua;
