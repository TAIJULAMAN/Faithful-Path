import React from "react";
import { Link } from "react-router-dom";

function Sunnah() {
  const sunnah = [
    {
      id: 1,
      name: "নামাজ",
      src: "/snamaz",
    },
    {
      id: 2,
      name: "মসজিদে প্রবেশ করা",
      src: "/mosjideProvesh",
    },
    {
      id: 3,
      name: "মসজিদ থেকে বের হওয়া",
      src: "/mosjidThekeBer",
    },
    {
      id: 4,
      name: "টয়লেট / ইস্তিঞ্জা",
      src: "/stoilet",
    },
    {
      id: 5,
      name: "ওযু",
      src: "/sozu",
    },
    {
      id: 6,
      name: "গোসল",
      src: "/sgosol",
    },
    {
      id: 7,
      name: "তায়াম্মুম",
      src: "/taiammums",
    },
    {
      id: 8,
      name: "ঘুমানো",
      src: "/sleeps",
    },
    {
      id: 9,
      name: "ঘুম থেকে ওঠা",
      src: "/asleep",
    },
    {
      id: 10,
      name: "খানা খাওয়া",
      src: "/sfood",
    },
    {
      id: 11,
      name: "পান করা",
      src: "/sdrink",
    },
    {
      id: 12,
      name: "রামাদান",
      src: "/sram",
    },
    {
      id: 13,
      name: "সাহরি",
      src: "/ssehri",
    },
    {
      id: 14,
      name: "ইফতার",
      src: "/siftar",
    },
    {
      id: 15,
      name: "রোযার আদব",
      src: "/sroja",
    },
    {
      id: 16,
      name: "ঈদের দিনের সুন্নত ও আদব",
      src: "/seid",
    },
    {
      id: 17,
      name: "কুরবানী",
      src: "/skor",
    },
    {
      id: 18,
      name: "পোশাক",
      src: "/sdes",
    },
    {
      id: 19,
      name: "সফর",
      src: "/str",
    },
    {
      id: 20,
      name: "বিবাহ",
      src: "/smr",
    },
    {
      id: 21,
      name: "জুম'আর দিন",
      src: "/sjm",
    },
    {
      id: 22,
      name: "ঘরে প্রবেশ",
      src: "/shm",
    },
    {
      id: 22,
      name: "চুল",
      src: "/hairs",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  font-bold mx-auto gap-5 p-5 bg-[#f8ebd5] text-[#2e424d] px-[100px]">
      {sunnah.map((item) => (
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
export default Sunnah;
