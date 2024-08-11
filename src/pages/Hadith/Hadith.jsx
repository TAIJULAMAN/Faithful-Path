import React from "react";
import HadithBangla from "../../../public/Data/HadithBangla.json";

function Hadith() {
  return (
    <div className="relative text-xl bg-[#e8e9f3] text-[#2e424d] px-[100px] py-10">
      <h1 className="bg-[#98dad9] text-center py-5 my-10 rounded-md font-bold text-xl">
        হাদিস
      </h1>
      <ul className="space-y-2">
        {HadithBangla.map((data) => (
          <li
            key={data.id}
            className="space-y-3 p-4 border border-[#a6a6a8] rounded-lg"
          >
            <h1 className="text-xl font-bold mb-2 mt-2">{data.name}</h1>
            <p>{data.description}</p>
            <p>{data.references}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hadith;
