import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Jumma() {
  const item = [
    {
      id: 1,
      desc: "জুমুআর নামাযের উদ্দেশ্যে ভালভাবে গোসল করা।",
    },
    {
      id: 2,
      desc: "উত্তম ও পরিষ্কার কাপড় পরিধান করা।",
    },
    {
      id: 3,
      desc: "আতর লাগানো",
    },
    {
      id: 4,
      desc: "ওয়াক্ত হওয়ার সাথে সাথে (আযানের অপেক্ষা না করে) মসজিদে যাওয়া।",
    },
    {
      id: 5,
      desc: " পায়ে হেঁটে মসজিদে যাওয়া।",
    },
    {
      id: 6,
      desc: "ইমাম সাহেবের নিকটে বসা। অর্থাৎ, যতদূর সম্ভব সামনের কাতারে বসা।",
    },
    {
      id: 7,
      desc: "মনোযোগ সহকারে খুতবা শুনা।",
    },
    {
      id: 8,
      desc: "খুতবার সময় কোন কথা না বলা ও কোন কাজ না করা।",
    },
    {
      id: 9,
      desc: "সূরায়ে কাহফ তিলাওয়াত করা।",
    },
    {
      id: 10,
      desc: "সালাতুত তাসবীহ পড়া।",
    },
  ];
  return (
    <section className="text-[#2e424d] px-[100px] py-10 text-xl bg-[#f8ebd5]">
      <div className="bg-[#e49733] py-5 flex justify-between my-10 rounded-md px-10">
        <h1 className=" text-[#2e424d] text-center  font-bold text-2xl">
          জুম'আর দিন
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

export default Jumma;
