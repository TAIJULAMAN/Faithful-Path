import { NavLink } from "react-router-dom";
import surainfo from "../../../public/Quran/surahInfo.json";

function Quran() {
  return (
    <div className="px-4 lg:px-[100px] bg-[#f8ebd5] min-h-screen">
      <div className="lg:flex flex-col hidden justify-center items-center py-10 text-center">
        <h1 className="text-[34px] font-bold text-[#2b2b2b]">কুরআনুল কারীম</h1>
        <h4 className="text-[20px] text-[#444]">
          বাংলা অনুবাদ ও সংক্ষিপ্ত তাফসীর
        </h4>
      </div>

      {/* Surah Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my__container mx-auto">
        {surainfo.map((surah) => (
          <div
            key={surah.id}
            className="relative flex justify-between items-center p-4 mx-2 mt-4 h-[100px] 
                       rounded-lg bg-white shadow-lg transform transition-transform hover:-translate-y-2 
                       hover:shadow-2xl hover:bg-[#fff8f0] duration-300 active:scale-95"
          >
            {/* Left Part */}
            <div className="left-part flex items-center">
              <ul className="flex shadow-inner bg-[#e2d3b3] w-[3rem] h-[3rem] rounded-full items-center justify-center mr-4">
                <li className="text-[20px] font-bold text-[#2b2b2b]">
                  {surah.number}
                </li>
              </ul>
              <div className="flex flex-col justify-center">
                <h2 className="text-[20px] font-semibold hind-siliguri-light text-[#2b2b2b]">
                  {surah.name}
                </h2>
              </div>
            </div>

            {/* Right Part */}
            <div className="right-part flex flex-col items-end">
              <h3 className="text-[24px] font-bold text-[#1a1a1a]">
                {surah.arabic}
              </h3>
              <NavLink
                className="absolute inset-0 z-10"
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
