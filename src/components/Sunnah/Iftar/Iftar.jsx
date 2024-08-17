import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Iftars() {
  const item = [
    {
      id: 1,
      desc: "খেজুর দ্বারা ইফতার করা সুন্নত। খেজুর না পেলে পানি দ্বারা ইফতারের সুচনা করবে।",
    },
    {
      id: 2,
      desc: "সূর্যাস্তের সাথে সাথে ইফতার করা উত্তম।",
    },
  ];
  return (
    <section className="text-[#2e424d] px-[100px] pt-10 pb-72 text-xl bg-[#f8ebd5]">
      <div className="bg-[#e49733] py-5 flex justify-between my-10 rounded-md px-10">
        <h1 className=" text-[#2e424d] text-center  font-bold text-2xl">
        ইফতার
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

export default Iftars;
