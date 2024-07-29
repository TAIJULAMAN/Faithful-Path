import React from "react";
import PakPobitrota from "./PakPobitrota/PakPobitrota";
import Time from "./Time/Time";
import Fazael from "./Fazael/Fazael";
import NamajVongerKaron from "./NamajVongerKaron/NamajVongerKaron";
import MohiladerNamaj from "./MohiladerNamaj/MohiladerNamaj";
import PuruserNamaj from "./PuruserNamaj/PuruserNamaj";
import NamazerForoz from "./NamazerForoz/NamazerForoz";

function Namaz() {
  return (
    <div className="text-[#2e424d]">
      <PakPobitrota/>
      <Time/>
      <Fazael/>
      <NamajVongerKaron/>
      <MohiladerNamaj/>
      <PuruserNamaj/>
      <NamazerForoz/>
     
    </div>
  );
}

export default Namaz;



 {/* <div className="flex font-bold  md:flex-row flex-col justify-center items-center gap-5 p-5">
        <div className="flex justify-center text-center items-center rounded-md bg-[#E4E4E4] w-[250px] h-[150px]">
          <p className="text-3xl hover:scale-125">পাক-পবিত্রতা</p>
          
  
        </div>
        <div className="flex justify-center text-center items-center rounded-md bg-[#EFCDCC] w-[250px] h-[150px]">
          <p className="text-3xl  hover:scale-125">নামাজের সময়সীমা</p>
        </div>
        <div className="flex justify-center text-center items-center rounded-md bg-[#D7EAF8] w-[250px] h-[150px]">
          <p className="text-3xl  hover:scale-125">নামাজের ফাযায়েল</p>
        </div>
        <div className="flex justify-center text-center items-center rounded-md bg-[#E4E4E4] w-[250px] h-[150px]">
          <p className="text-3xl hover:scale-125">পাক-পবিত্রতা</p>
        </div>
        <div className="flex justify-center text-center items-center rounded-md bg-[#EBE2D0] w-[250px] h-[150px]">
          <p className="text-3xl hover:scale-125">Salah</p>
        </div>
      </div> */}