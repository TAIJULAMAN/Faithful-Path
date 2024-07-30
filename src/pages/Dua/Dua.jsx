import React from "react";
import Imaniat from "../../components/Dua/Imaniat/Imaniat";
import BeforeDeath from "../../components/Dua/BeforeDeath/BeforeDeath";

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
    </div>
  );
}

export default Dua;
