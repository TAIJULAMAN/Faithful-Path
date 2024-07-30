import React from "react";
import RojaFazael from "../../components/Roja/RojaFazael/RojaFazael";
import Tarabih from "../../components/Roja/Tarabih/Tarabih";
import Sahri from "../../components/Roja/Sahri/Sahri";
import RojarNiyat from "../../components/Roja/RojarNiyat/RojarNiyat";
import Iftar from "../../components/Roja/Iftar/Iftar";
import RojaVangarKaron from "../../components/Roja/RojaVangarKaron/RojaVangarKaron";

function Roja() {
  return (
    <>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          রমজানের ফাযায়েল
        </h1>
        <RojaFazael />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          তারাবীর নামায
        </h1>
        <Tarabih />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          সাহরী
        </h1>
        <Sahri />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          রোযার নিয়্যাত
        </h1>
        <RojarNiyat />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          ইফতার
        </h1>
        <Iftar />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          যে সমস্ত কারণে রোযা ভেঙ্গে যায়
        </h1>
        <RojaVangarKaron />
      </div>
    </>
  );
}

export default Roja;
