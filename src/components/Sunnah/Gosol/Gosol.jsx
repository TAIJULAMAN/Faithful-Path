import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Gosol() {
  const item = [
    {
      id: 1,
      desc: "ফরজ গোসলের পূর্বে ইস্তিঞ্জা অর্থাৎ পেশাব করা।",
    },
    {
      id: 2,
      desc: "শুরুতে بسم الله الرحمن الرحيم পড়া।",
    },
    {
      id: 3,
      desc: "পৃথকভাবে উভয় হাত কব্জি সহ ধোয়া।",
    },
    {
      id: 4,
      desc: "শরীর বা কাপড়ের কোন স্থানে নাপাকি লেগে থাকলে প্রথমে তা তিনবার ধুয়ে পবিত্র করে নেওয়া।",
    },
    {
      id: 5,
      desc: "নাপাকি লেগে থাকলে বা না লেগে থাকলে সব অবস্থায় গুপ্তাঙ্গ ধৌত করা। এরপর উপরে হাত ভালোভাবে ধুয়ে নেওয়া।",
    },
    {
      id: 6,
      desc: "সুন্নত তরিকায় পূর্ণ অজু করা। তবে গোসলের স্থানে পানি জমা থাকলে গোসল শেষ করে পা ধৌত করবে।",
    },
    {
      id: 7,
      desc: " প্রথমে মাথায় পানি ঢালা।",
    },
    {
      id: 8,
      desc: "এরপর ডান কাঁধে।",
    },
    {
      id: 5,
      desc: "এরপর বাম কাঁধে",
    },
    {
      id: 6,
      desc: "অতঃপর অবশিষ্ট শরীর ভিজানো।",
    },
    {
      id: 7,
      desc: "সমস্ত শরীর এমন ভাবে তিনবার পানি পৌঁছানো যেন একটি পশমের গোড়াও শুষ্ক না থাকে।",
    },
    {
      id: 8,
      desc: "সমস্ত শরীর হাত দ্বারা ঘষে মেজে ধৌত করা।",
    },
  ];
  return (
    <section className="text-[#2e424d] px-[100px] py-10 text-xl bg-[#f8ebd5]">
      <div className="bg-[#e49733] py-5 flex justify-between my-10 rounded-md px-10">
        <h1 className=" text-[#2e424d] text-center  font-bold text-2xl">
          গোসল
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

export default Gosol;
