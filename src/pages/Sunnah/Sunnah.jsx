import React from "react";
import { Link } from "react-router-dom";

function Sunnah() {
  const sunnah = [
    {
      id: 1,
      name: "নামাজ",
      src: "/imaniat",
      color: "#e8e9f3",
    },
    {
      id: 2,
      name: "মসজিদে প্রবেশ করা",
      src: "/before",
      color: "#EFCDCC",
    },
    {
      id: 3,
      name: "মসজিদ থেকে বের হওয়া",
      src: "/basa",
      color: "#D3E0EA",
    },
    {
      id: 4,
      name: "টয়লেট / ইস্তিঞ্জা",
      src: "/food",
      color: "#FFE5B4",
    },
    {
      id: 5,
      name: "ওযু",
      src: "/pak",
      color: "#E4F9F5",
    },
    {
      id: 6,
      name: "গোসল",
      src: "/sleep",
      color: "#E2E2DF",
    },
    {
      id: 7,
      name: "তায়াম্মুম",
      src: "/tour",
      color: "#FFDAC1",
    },
    {
      id: 8,
      name: "ঘুমানো",
      src: "/society",
      color: "#FFB7B2",
    },
    {
      id: 9,
      name: "ঘুম থেকে ওঠা",
      src: "/parent",
      color: "#C7CEEA",
    },
    {
      id: 10,
      name: "খানা খাওয়া",
      src: "/sajj",
      color: "#FF9AA2",
    },
    {
      id: 11,
      name: "পান করা",
      src: "/healthy",
      color: "#B5EAD7",
    },
    {
      id: 12,
      name: "রামাদান",
      src: "/bipod",
      color: "#C6DEFF",
    },
    {
      id: 13,
      name: "সাহরি",
      src: "/voy",
      color: "#E0BBE4",
    },
    {
      id: 14,
      name: "ইফতার",
      src: "/storm",
      color: "#957DAD",
    },
    {
      id: 15,
      name: "রোযার আদব",
      src: "/durud",
      color: "#D291BC",
    },
    {
      id: 16,
      name: "ঈদের দিনের সুন্নত ও আদব",
      src: "/istigfar",
      color: "#FEC8D8",
    },
    {
      id: 17,
      name: "কুরবানী",
      src: "/rabbana",
      color: "#FFDFD3",
    },
    {
      id: 18,
      name: "পোশাক",
      src: "/allah",
      color: "#F6D6AD",
    },
    {
      id: 19,
      name: "সফর",
      src: "/azan",
      color: "#FFD3B6",
    },
    {
      id: 20,
      name: "বিবাহ",
      src: "/ozu",
      color: "#E8A87C",
    },
    {
      id: 21,
      name: "জুম'আর দিন",
      src: "/mosjid",
      color: "#C38D9E",
    },
    {
      id: 22,
      name: "ঘরে প্রবেশ",
      src: "/inamaz",
      color: "#41B3A3",
    }
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  font-bold mx-auto gap-5 p-5 bg-[#F7F3DE] text-[#2e424d] px-[100px]">
      {sunnah.map((item) => (
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
    // <div className="bg-[#e8e9f3] text-[#2e424d] px-[100px]">
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       নামাজ
    //     </h1>
    //     <Namaz />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       মসজিদে প্রবেশ করা
    //     </h1>
    //     <MosjideProvesh />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       মসজিদ থেকে বের হওয়া
    //     </h1>
    //     <MosjidThekeBer />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       টয়লেট / ইস্তিঞ্জা
    //     </h1>
    //     <Toilet />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       ওযু
    //     </h1>
    //     <Ozu />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       গোসল
    //     </h1>
    //     <Gosol />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       তায়াম্মুম
    //     </h1>
    //     <Tayammum />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       ঘুমানো
    //     </h1>
    //     <Sleep />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       ঘুম থেকে ওঠা
    //     </h1>
    //     <AfterSleep />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       খানা খাওয়া
    //     </h1>
    //     <Food />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       পান করা
    //     </h1>
    //     <Drink />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       রামাদান
    //     </h1>
    //     <Ramadan />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       সাহরি
    //     </h1>
    //     <Sehri />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       ইফতার
    //     </h1>
    //     <Iftar />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       রোযার আদব
    //     </h1>
    //     <Roja />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       ঈদের দিনের সুন্নত ও আদব
    //     </h1>
    //     <Eid />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       কুরবানী
    //     </h1>
    //     <Korbani />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       পোশাক
    //     </h1>
    //     <Dress />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       সফর
    //     </h1>
    //     <Tour />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       বিবাহ
    //     </h1>
    //     <Marry />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       জুম'আর দিন
    //     </h1>
    //     <Jumma />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       চুল-দাড়ি
    //     </h1>
    //     <Hair />
    //   </div>
    //   <div className="py-10">
    //     <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
    //       ঘরে প্রবেশ
    //     </h1>
    //     <Home />
    //   </div>
    // </div>
  );
}
export default Sunnah;
