import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Korbani() {
  const item = [
    {
      id: 1,
      desc: "ছুরি খুব ভালো করে ধার করে নিজ হাতে জবাই করা।",
    },
    {
      id: 2,
      desc: " পশুকে টেনে হিচড়ে যবেহের স্থানে না নেওয়া।",
    },
  ];
  return (
    <section className="text-[#2e424d] px-[100px] pt-10 pb-72 text-xl bg-[#f8ebd5]">
      <div className="bg-[#e49733] py-5 flex justify-between my-10 rounded-md px-10">
        <h1 className=" text-[#2e424d] text-center  font-bold text-2xl">
          কুরবানী
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

export default Korbani;
