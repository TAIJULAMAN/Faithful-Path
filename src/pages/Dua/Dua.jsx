import React from "react";
import Imaniat from "../../components/Dua/Imaniat/Imaniat";
import BeforeDeath from "../../components/Dua/BeforeDeath/BeforeDeath";
import Home from "../../components/Dua/Home/Home";
import Food from "../../components/Dua/Food/Food";
import Pak from "../../components/Dua/Pak/Pak";
import Sleep from "../../components/Dua/Sleep/Sleep";
import Tour from "../../components/Dua/Tour/Tour";
import Society from "../../components/Dua/Society/Society";
import Parents from "../../components/Dua/Parents/Parents";
import Sajj from "../../components/Dua/Sajj/Sajj";
import Healthy from "../../components/Dua/Healthy/Healthy";
import Bipod from "../../components/Dua/Bipod/Bipod";
import Voy from "../../components/Dua/Voy/Voy";
import Storm from "../../components/Dua/Storm/Storm";
import Durud from "../../components/Dua/Durud/Durud";
import Istigfar from "../../components/Dua/Istigfar/Istigfar";
import Rabbana from "../../components/Dua/Rabbana/Rabbana";
import AllahHumma from "../../components/Dua/AllahHumma/AllahHumma";
import Azan from "../../components/Dua/Azan/Azan";
import Ozu from "../../components/Dua/Ozu/Ozu";
import Mosjid from "../../components/Dua/Mosjid/Mosjid";
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
    <div className="grid grid-cols-1 md:grid-cols-3  font-bold mx-auto gap-5 p-5 bg-[#F7F3DE] text-[#2e424d] px-[100px]">
      {dua.map((item) => (
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
export default Dua;
