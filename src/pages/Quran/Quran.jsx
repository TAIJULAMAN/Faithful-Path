import React from "react";
import { NavLink } from "react-router-dom";
import surainfo from "../../../public/Quran/surahInfo.json";

function Quran() {
  return (
    <div className="px-[100px] bg-[#f8ebd5]">
      <div className="lg:flex flex-col hidden justify-center items-center p-10">
        <h1 className="text-[34px]">কুরআনুল কারীম</h1>
        <h4 className="text-[20px]">বাংলা অনুবাদ ও সংক্ষিপ্ত তাফসীর</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my__container m-auto">
        {surainfo.map((surah) => (
          <div
            key={surah.id}
            className="
              surah__card 
              relative flex justify-between items-center 
              p-3 mx-2 mt-2 h-[80px] 
              rounded-md cursor-pointer 
              hover:shadow-[0_0px_40px_0px_rgba(1,0,0,0.2)] 
              ease-out duration-300 active:scale-95"
          >
            <div className="left-part flex justify-between items-center">
              <ul className="flex shadow-inner w-[2.7rem] h-[2.7rem] rounded-full items-center justify-center mr-4">
                <li className="text-[18px]">{surah.number}</li>
              </ul>
              <div className="flex flex-col justify-center">
                <h2 className="text-[18px] hind-siliguri-light">
                  {surah.name}
                </h2>
              </div>
            </div>
            <div className="right-part mr-2 flex flex-col items-end">
              <h3 className="text-[22px]">{surah.arabic}</h3>
              <NavLink
                className="absolute top-0 left-0 right-0 bottom-0 z-10"
                to={surah.url}
              ></NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quran;
