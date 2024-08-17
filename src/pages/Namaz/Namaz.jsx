import React from "react";
import { Link } from "react-router-dom";

function Namaz() {
  const namaz = [
    {
      id: 1,
      name: "পাক-পবিত্রতা",
      src: "/pakPobitrota",
      color: "#e8e9f3",
    },
    {
      id: 2,
      name: "নামাজের সময়সীমা",
      src: "/time",
      color: "#EFCDCC",
    },
    {
      id: 3,
      name: "নামাজের ফাযায়েল",
      src: "/fazael",
      color: "#D3E0EA",
    },
    {
      id: 4,
      name: "নামায ভঙ্গের কারণ",
      src: "/namajVongerKaron",
      color: "#FFE5B4",
    },
    {
      id: 5,
      name: "মহিলাদের নামায",
      src: "/mohiladerNamaj",
      color: "#E4F9F5",
    },
    {
      id: 6,
      name: "পুরুষদের নামায",
      src: "/puruserNamaj",
      color: "#E2E2DF",
    },
    {
      id: 7,
      name: "নামাযের ফরয ওয়াজিব",
      src: "/namazerForoz",
      color: "#FFDAC1",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  font-bold mx-auto gap-5 py-28 bg-[#f8ebd5] text-[#2e424d] px-[100px]">
      {namaz.map((item) => (
        <div key={item.id}>
          <Link to={item.src}>
            <div
              className="
              surah__card 
             relative flex justify-center items-center 
             p-3 mx-2 mt-2 h-[80px] 
             rounded-md cursor-pointer 
             hover:shadow-[0_0px_40px_0px_rgba(1,0,0,0.2)] 
             ease-out duration-300 active:scale-95
             text-center"
            >
              <p>{item.name}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Namaz;
