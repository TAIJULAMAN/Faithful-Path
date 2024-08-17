import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function AfterSleeps() {
  const item = [
    {
      id: 1,
      desc: "ঘুম থেকে উঠেই উভয় হাত দ্বারা মুখমন্ডল এবং চক্ষুদ্বয়কে হালকাভাবে মর্দন করা, যাতে ঘুমের ভাব দূর হয়ে যায়।",
    },
    {
      id: 2,
      desc: "ঘুম থেকে ওঠার পর এই দোয়া পড়া: الحمد لله الذي احيانا بعد ما اماتنا واليه النشور",
    },
    {
      id: 3,
      desc: " যখনই ঘুম হতে উঠা হয় তখনই মিসওয়াক করা, অজু করার সময় ওযুর সুন্নত হিসেবে মিসওয়াক করা।",
    },
    {
      id: 4,
      desc: "ঘুম থেকে উঠার পর উভয় হাত ভালোভাবে ধৌত করা।",
    },
  ];
  return (
    <section className="text-[#2e424d] px-[100px] py-24 text-xl bg-[#f8ebd5]">
      <div className="bg-[#e49733] py-5 flex justify-between my-10 rounded-md px-10">
        <h1 className=" text-[#2e424d] text-center  font-bold text-2xl">
          ঘুম থেকে ওঠা
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

export default AfterSleeps;
