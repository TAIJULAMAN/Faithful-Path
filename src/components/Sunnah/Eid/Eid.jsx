import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Eids() {
  const item = [
    {
      id: 1,
      desc: "মেসওয়াক করা।",
    },
    {
      id: 2,
      desc: "গোসল করা।",
    },
    {
      id: 3,
      desc: " শরিয়তসম্মত সাজ-সজ্জা করা।",
    },
    {
      id: 4,
      desc: "উত্তম কাপড় পরিধান করা।",
    },
    {
      id: 5,
      desc: "সুগন্ধি ব্যবহার করা।",
    },
    {
      id: 6,
      desc: "খুব সকালে ঘুম থেকে জাগ্রত হওয়া।",
    },
    {
      id: 7,
      desc: "ঈদুল ফিতরের দিন কোন মিষ্টি দ্রব্য খেয়ে ঈদগাহে যাওয়া।",
    },
    {
      id: 8,
      desc: "ঈদুল আযহার দিন কিছু না খেয়ে ঈদগাহে যাওয়া।",
    },
    {
      id: 9,
      desc: "ঈদগাহ ঈদের নামাজ পড়া।",
    },
    {
      id: 10,
      desc: "যে রাস্তা দিয়ে ঈদগাহ গমন করবে প্রত্যাবর্তনের সময় ওই রাস্তা ছাড়া অন্য রাস্তা ব্যবহার করবে।",
    },
    {
      id: 11,
      desc: " ঈদগাহে যাওয়ার পূর্বে সদকাতুল ফিতর প্রদান করা।",
    },
    {
      id: 12,
      desc: "সকাল সকাল ঈদগাহে যাওয়া।",
    },
    {
      id: 13,
      desc: "পায়ে হেঁটে যাওয়া।",
    },
    {
      id: 14,
      desc: "ঈদগাহে যাওয়ার সময় এই তাকবীর বলতে বলতে যাওয়া: الله اكبر الله اكبر لا اله الا الله والله اكبر الله اكبر ولله الحمد",
    },
  ];
  return (
    <section className="text-[#2e424d] px-[100px] py-10 text-xl bg-[#f8ebd5]">
      <div className="bg-[#e49733] py-5 flex justify-between my-10 rounded-md px-10">
        <h1 className=" text-[#2e424d] text-center  font-bold text-2xl">
          ঈদের দিনের সুন্নত ও আদব
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

export default Eids;
