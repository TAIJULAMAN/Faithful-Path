import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Tayammum() {
  const item = [
    {
      id: 1,
      desc: "তায়াম্মুমের শুরুতে بسم الله الرحمن الرحيم পড়া।",
    },
    {
      id: 2,
      desc: "মাটিতে হাত রাখার সময় আঙ্গুলসমূহ ফাঁক করে রাখা।",
    },
    {
      id: 3,
      desc: "মাটিতে উভয় হাত রাখার পর হস্তদয় সামান্য আগে-পিছে নিয়ে মাটিতে ঘর্ষণ করা।",
    },
    {
      id: 4,
      desc: "তারপর উভয় হাত ঝেড়ে নেওয়া।",
    },
    {
      id: 5,
      desc: "তায়াম্মুমের অঙ্গসমূহ মাসাহ করার সময় ধারাবাহিকতা বজায় রাখা।",
    },
    {
      id: 6,
      desc: "চেহারা ও হাতে মাসাহের মাঝে বিলম্ব না করা।",
    },
  ];
  return (
    <section className="text-[#2e424d] px-[100px] py-14 text-xl bg-[#f8ebd5]">
      <div className="bg-[#e49733] py-5 flex justify-between my-10 rounded-md px-10">
        <h1 className=" text-[#2e424d] text-center  font-bold text-2xl">
          তায়াম্মুম
        </h1>
        <IoMdReturnRight size={40} />
      </div>
      <div className="relative">
        <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {item.map((data, index) => (
            <li key={index} className="space-y-3 p-4 border border-[#e49733]">
              <p>{data.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Tayammum;
