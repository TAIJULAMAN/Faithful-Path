import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Hair() {
  const item = [
    {
      id: 1,
      desc: "রাসূল (ﷺ) এর মাথার চুলের দৈর্ঘ এক বর্ণনা অনুযায়ী কানের মাঝখান পর্যন্ত এবং অন্য বর্ণনা অনুযায়ী কাধ পর্যন্ত এবং অপর বর্ণনা মোতাবেক কানের লতি পর্যন্ত ছিল।",
    },
    {
      id: 2,
      desc: "পূর্ণ মাথা মুন্ডানো জায়েজ। কেউ যদি চুল ছেটে ছোট করে রাখতে চায়, তাহলে গোটা মাথার চুল সমানভাবে বরাবর করে রাখতে হবে। পিছন দিকে ছোট আর সামনের দিকে লম্বা চুল রাখা জায়েয নয়।",
    },
    {
      id: 3,
      desc: "এক মুষ্ঠি পরিমাণ দাড়ি রাখা ওয়াজিব, এর থেকে ছোট করা হারাম। দাড়ি রাখা সকল নবী-রাসূলদের সুন্নাত।",
    },
    {
      id: 4,
      desc: "গোঁফ একেবারে ছোট করে রাখা সুন্নাত। লম্বা মোচ রাখার প্রতি হাদীস শরীফে সতর্ক করা হয়েছে।",
    },
    {
      id: 5,
      desc: "বগলের নিচের পশম ও নাভির নিচের পশম কেটে পরিষ্কার রাখা। চল্লিশ দিন অতিক্রম করলে গুনাহগার হবে।",
    },
    {
      id: 6,
      desc: "চুলে ও দাড়িতে তেল দেয়া ও মাঝে মধ্যে চিরুনী করা।",
    },
    {
      id: 7,
      desc: "মাথার ডান দিকে থেকে চিরুনী করা।",
    },
    {
      id: 8,
      desc: "আয়না দেখার সময় এই দোয়া পড়া- اللهم حسنت خلقي فحسن خلقی অর্থ: হে আল্লাহ আপনি আমার যেরুপ সুন্দও চেহারা দান করেছেন তদ্রুপ আমার স্বভাব-চরিত্রকেও সুন্দর করে দিন।",
    },
  ];
  return (
    <section className="text-[#2e424d] px-[100px] py-10 text-xl bg-[#f8ebd5]">
      <div className="bg-[#e49733] py-5 flex justify-between my-10 rounded-md px-10">
        <h1 className=" text-[#2e424d] text-center  font-bold text-2xl">চুল</h1>
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

export default Hair;
