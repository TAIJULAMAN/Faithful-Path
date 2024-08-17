import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Ramadans() {
  const item = [
    {
      id: 1,
      desc: "সাহরি খাওয়া।",
    },
    {
      id: 2,
      desc: "রোজাদারের জন্য ইফতার করা।",
    },
    {
      id: 3,
      desc: "কিআমুল লাইল ও তারাবীর নামাজ পড়া।",
    },
    {
      id: 4,
      desc: " বেশি বেশি কুরআন তেলাওয়াত করা।",
    },
    {
      id: 5,
      desc: "বেশি বেশি দুআ করা।",
    },
    {
      id: 6,
      desc: "মসজিদে ইতিকাফ করা। বিশেষত শেষ দশ দিন।",
    },
    {
      id: 7,
      desc: "রামাদান মাসে উমরাহ করা।",
    },
    {
      id: 8,
      desc: "কেউ গালি দিলে কিংবা অসৌজন্যমুলক আচরন করলে তার সাথে মন্দ ব্যবহার না করে বলে দিবে,”আমি রোযাদার”।",
    },
  ];
  return (
    <section className="text-[#2e424d] px-[100px] py-10 text-xl bg-[#f8ebd5]">
      <div className="bg-[#e49733] py-5 flex justify-between my-10 rounded-md px-10">
        <h1 className=" text-[#2e424d] text-center  font-bold text-2xl">
          রামাদান
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

export default Ramadans;
