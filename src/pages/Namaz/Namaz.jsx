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
    <div className="grid grid-cols-1 md:grid-cols-3  font-bold mx-auto gap-5 p-5 bg-[#F7F3DE] text-[#2e424d] px-[100px]">
      {namaz.map((item) => (
        <div key={item.id}>
          <Link to={item.src}>
            <div
              style={{ backgroundColor: item.color || "#D7EAF8" }}
              className="flex justify-center text-center items-center rounded-md h-[150px]"
            >
              <p className="text-3xl  hover:scale-125">{item.name}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Namaz;