import React from "react";
import { Link } from "react-router-dom";
function Dua() {
  const dua = [
    {
      id: 1,
      name: "ঈমানিয়্যাত",
      src: "/imaniat",
      color: "#e8e9f3",
    },
    {
      id: 2,
      name: "মৃত্যুর পূর্বাপর",
      src: "/before",
      color: "#EFCDCC",
    },
    {
      id: 3,
      name: "বাসস্থান",
      src: "/basa",
      color: "#D3E0EA",
    },
    {
      id: 4,
      name: "পানাহার",
      src: "/food",
      color: "#FFE5B4",
    },
    {
      id: 5,
      name: "পাক পবিত্রতা",
      src: "/pak",
      color: "#E4F9F5",
    },
    {
      id: 6,
      name: "ঘুম",
      src: "/sleep",
      color: "#E2E2DF",
    },
    {
      id: 7,
      name: "সফর",
      src: "/tour",
      color: "#FFDAC1",
    },
    {
      id: 8,
      name: "সামাজিকতা",
      src: "/society",
      color: "#FFB7B2",
    },
    {
      id: 9,
      name: "পিতামাতা-সংসার-সন্তান",
      src: "/parent",
      color: "#C7CEEA",
    },
    {
      id: 10,
      name: "সাজ সজ্জা",
      src: "/sajj",
      color: "#FF9AA2",
    },
    {
      id: 11,
      name: "সুস্থতা-অসুস্থতা",
      src: "/healthy",
      color: "#B5EAD7",
    },
    {
      id: 12,
      name: "বিপদ বালা মুসিবত",
      src: "/bipod",
      color: "#C6DEFF",
    },
    {
      id: 13,
      name: "ভয়ভীতি",
      src: "/voy",
      color: "#E0BBE4",
    },
    {
      id: 14,
      name: "ঝড়-বৃষ্টি",
      src: "/storm",
      color: "#957DAD",
    },
    {
      id: 15,
      name: "দরুদ শরীফ",
      src: "/durud",
      color: "#D291BC",
    },
    {
      id: 16,
      name: "ইস্তিগ্‌ফার",
      src: "/istigfar",
      color: "#FEC8D8",
    },
    {
      id: 17,
      name: "রব্বানা",
      src: "/rabbana",
      color: "#FFDFD3",
    },
    {
      id: 18,
      name: "আল্লাহুম্মা",
      src: "/allah",
      color: "#F6D6AD",
    },
    {
      id: 19,
      name: "আজান",
      src: "/azan",
      color: "#FFD3B6",
    },
    {
      id: 20,
      name: "ওজু",
      src: "/ozu",
      color: "#E8A87C",
    },
    {
      id: 21,
      name: "মসজিদ",
      src: "/mosjid",
      color: "#C38D9E",
    },
    {
      id: 22,
      name: "নামাজের মধ্যে",
      src: "/inamaz",
      color: "#41B3A3",
    },
    {
      id: 23,
      name: "নামাজের শেষে",
      src: "/onamaz",
      color: "#E27D60",
    },
    {
      id: 24,
      name: "রমযান",
      src: "/ramadan",
      color: "#85DCB0",
    },
    {
      id: 25,
      name: "হজ্জ",
      src: "/hajj",
      color: "#E8A87C",
    },
    {
      id: 26,
      name: "ঈদ",
      src: "/eid",
      color: "#C38D9E",
    },
    {
      id: 27,
      name: "ঋণ",
      src: "/loan",
      color: "#41B3A3",
    },
  ];
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3  font-bold mx-auto gap-5 p-5 bg-[#f8ebd5] text-[#2e424d] px-[100px]">
      {dua.map((item) => (
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
              <p className="text-xl">{item.name}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Dua;
