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
import Rabbana from "../../components/Rabbana/Rabbana";
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
      src: "/home",
      color: "",
    },
    {
      id: 4,
      name: "পানাহার",
      src: "",
      color: "",
    },
    {
      id: 5,
      name: "পাক পবিত্রতা",
      src: "",
      color: "",
    },
    {
      id: 6,
      name: "ঘুম",
      src: "",
      color: "",
    },
    {
      id: 7,
      name: "সফর",
      src: "",
      color: "",
    },
    {
      id: 8,
      name: "সামাজিকতা",
      src: "",
      color: "",
    },
    {
      id: 9,
      name: "পিতামাতা-সংসার-সন্তান",
      src: "",
      color: "",
    },
    {
      id: 10,
      name: "সাজ সজ্জা",
      src: "",
      color: "",
    },
    {
      id: 11,
      name: "সুস্থতা-অসুস্থতা",
      src: "",
      color: "",
    },
    {
      id: 12,
      name: "বিপদ বালা মুসিবত",
      src: "",
      color: "",
    },
    {
      id: 13,
      name: "ভয়ভীতি",
      src: "",
      color: "",
    },
    {
      id: 14,
      name: "ঝড়-বৃষ্টি",
      src: "",
      color: "",
    },
    {
      id: 15,
      name: "দরুদ শরীফ",
      src: "",
      color: "",
    },
    {
      id: 16,
      name: "ইস্তিগ্‌ফার",
      src: "",
      color: "",
    },
    {
      id: 17,
      name: "রব্বানা",
      src: "",
      color: "",
    },
    {
      id: 18,
      name: "আল্লাহুম্মা",
      src: "",
      color: "",
    },
    {
      id: 19,
      name: "আজান",
      src: "",
      color: "",
    },
    {
      id: 20,
      name: "ওজু",
      src: "",
      color: "",
    },
    {
      id: 21,
      name: "মসজিদ",
      src: "",
      color: "",
    },
    {
      id: 22,
      name: "নামাজের মধ্যে",
      src: "",
      color: "",
    },
    {
      id: 23,
      name: "নামাজের শেষে",
      src: "",
      color: "",
    },
    {
      id: 24,
      name: "রমযান",
      src: "",
      color: "",
    },
    {
      id: 25,
      name: "হজ্জ",
      src: "",
      color: "",
    },
    {
      id: 26,
      name: "ঈদ",
      src: "",
      color: "",
    },
    {
      id: 27,
      name: "ঋণ",
      src: "",
      color: "",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  font-bold mx-auto gap-5 p-5 bg-[#F7F3DE] text-[#2e424d] px-[100px]">
      {dua.map((item) => (
        <div key={item.id}>
          <Link to={item.src}>
            <div className="flex justify-center text-center items-center rounded-md bg-[#D7EAF8]  h-[150px]">
              <p className="text-3xl  hover:scale-125">{item.name}</p>
            </div>
          </Link>
        </div>
      ))}
      ;
    </div>

    // <div className="bg-[#e8e9f3] text-[#2e424d] px-[100px]">
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       ঈমানিয়্যাত
    //     </h1>
    //     <Imaniat />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       মৃত্যুর পূর্বাপর
    //     </h1>
    //     <BeforeDeath />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       বাসস্থান
    //     </h1>
    //     <Home />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       পানাহার
    //     </h1>
    //     <Food />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       পাক পবিত্রতা
    //     </h1>
    //     <Pak />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       ঘুম
    //     </h1>
    //     <Sleep />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       সফর
    //     </h1>
    //     <Tour />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       সামাজিকতা
    //     </h1>
    //     <Society />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       পিতামাতা-সংসার-সন্তান
    //     </h1>
    //     <Parents />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       সাজ সজ্জা
    //     </h1>
    //     <Sajj />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       সুস্থতা-অসুস্থতা
    //     </h1>
    //     <Healthy />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       বিপদ বালা মুসিবত
    //     </h1>
    //     <Bipod />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       ভয়ভীতি
    //     </h1>
    //     <Voy />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       ঝড়-বৃষ্টি
    //     </h1>
    //     <Storm />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       দরুদ শরীফ
    //     </h1>
    //     <Durud />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       ইস্তিগ্‌ফার
    //     </h1>
    //     <Istigfar />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       রব্বানা
    //     </h1>
    //     <Rabbana />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       আল্লাহুম্মা
    //     </h1>
    //     <AllahHumma />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       আজান
    //     </h1>
    //     <Azan />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       ওজু
    //     </h1>
    //     <Ozu />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       মসজিদ
    //     </h1>
    //     <Mosjid />
    //   </div>
    //   {/* <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       নামাজের মধ্যে
    //     </h1>
    //     <InNamaz />
    //   </div> */}
    //   {/* <div className="py-10">
    //   <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //     নামাজের শেষে
    //   </h1>
    //   <OutNamaz />
    // </div> */}
    //   {/* <div className="py-10">
    //   <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //     রমাযান
    //   </h1>
    //   <Ramadan />
    // </div> */}
    //   {/* <div className="py-10">
    //   <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //     হজ্জ
    //   </h1>
    //   <Hajj />
    // </div> */}
    //   {/* <div className="py-10">
    //   <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //     ঈদ
    //   </h1>
    //   <Eid />
    // </div> */}
    //   {/* <div className="py-10">
    //   <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //     ঋণ
    //   </h1>
    //   <Loan />
    // </div> */}
    // </div>
  );
}
export default Dua;
