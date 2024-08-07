import React from "react";
import Ozu from "./Ozu/Ozu";
import Gosol from "./Gosol/Gosol";
import Tayammum from "./Tayammum/Tayammum";
import Istinja from "./Istinja/Istinja";

function PakPobitrota() {
  return (
    <div className="relative text-xl bg-[#F7F3DE] text-[#2e424d] px-[100px] py-10 space-y-5">
      <h1 className="bg-[#98dad9] text-center py-5 my-10 rounded-md font-bold text-xl">
      পাক-পবিত্রতা
      </h1>
      <div>
        <h1 className="text-2xl text-center mb-5 font-bold">উযু</h1>
        <Ozu />
      </div>
      <div>
        <h1 className="text-2xl text-center mb-5 font-bold">গোসল</h1>
        <Gosol />
      </div>
      <div>
        <h1 className="text-2xl text-center mb-5 font-bold">তায়াম্মুম</h1>
        <Tayammum />
      </div>
      <div>
        <h1 className="text-2xl text-center mb-5 font-bold">ইস্তিঞ্জার আদব</h1>
        <Istinja />
      </div>
    </div>
  );
}

export default PakPobitrota;
