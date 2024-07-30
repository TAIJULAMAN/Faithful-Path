import React from "react";
import PakPobitrota from "../../components/Namaz/PakPobitrota/PakPobitrota";
import Time from "../../components/Namaz/Time/Time";
import Fazael from "../../components/Namaz/Fazael/Fazael";
import NamajVongerKaron from "../../components/Namaz/NamajVongerKaron/NamajVongerKaron";
import MohiladerNamaj from "../../components/Namaz/MohiladerNamaj/MohiladerNamaj";
import PuruserNamaj from "../../components/Namaz/PuruserNamaj/PuruserNamaj";
import NamazerForoz from "../../components/Namaz/NamazerForoz/NamazerForoz";

function Namaz() {
  return (
    <div className="bg-[#e8e9f3] text-[#2e424d] px-[100px]">
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          পাক-পবিত্রতা
        </h1>
        <PakPobitrota />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          নামাজের সময়সীমা
        </h1>
        <Time />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          নামাজের ফাযায়েল
        </h1>
        <Fazael />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          নামায ভঙ্গের কারণ
        </h1>
        <NamajVongerKaron />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          মহিলাদের নামায
        </h1>
        <MohiladerNamaj />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          পুরুষদের নামায
        </h1>
        <PuruserNamaj />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          নামাযের ফরয ওয়াজিব
        </h1>
        <NamazerForoz />
      </div>
    </div>
  );
}

export default Namaz;
