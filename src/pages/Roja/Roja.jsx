import React from "react";
import { Link } from "react-router-dom";

function Roja() {
  const roja = [
    {
      id: 1,
      name: "রমজানের ফাযায়েল",
      src: "/RojaFazael",
      color: "#e8e9f3",
    },
    {
      id: 2,
      name: "তারাবীর নামায",
      src: "/tarabih",
      color: "#EFCDCC",
    },
    {
      id: 3,
      name: "সাহরী",
      src: "/Sahri",
      color: "#D3E0EA",
    },
    {
      id: 4,
      name: "রোযার নিয়্যাত",
      src: "/RojarNiyat",
      color: "#FFE5B4",
    },
    {
      id: 5,
      name: "ইফতার",
      src: "/Iftar",
      color: "#E4F9F5",
    },
    {
      id: 6,
      name: "যে সমস্ত কারণে রোযা ভেঙ্গে যায়",
      src: "/RojaVangarKaron",
      color: "#E2E2DF",
    },
    {
      id: 7,
      name: "যে সব কারণে রোযা ভঙ্গ হয় না",
      src: "/RojaNaVangarKaron",
      color: "#FFDAC1",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  font-bold mx-auto gap-5 py-28 bg-[#f8ebd5]  text-[#2e424d] px-[100px]">
      {roja.map((item) => (
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

export default Roja;
