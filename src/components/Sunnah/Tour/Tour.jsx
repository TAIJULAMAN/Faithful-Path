import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Tours() {
  const item = [
    {
      id: 1,
      desc: " কমপক্ষে দুই ব্যক্তি এক সাথে সফরে যাওয়া, পারতপক্ষে একা সফর না করা।",
    },
    {
      id: 2,
      desc: "বাড়ী থেকে بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ পড়ে বের হওয়া।",
    },
    {
      id: 3,
      desc: "যানবাহনের দরজায় বিসমিল্লাহ বলতে বলতে পা রাখা।",
    },
    {
      id: 4,
      desc: "সফরে কোথাও অবস্থানের প্রয়োজন হলে কোনো জায়গায় এমনভাবে অবস্থান করা যাতে মানুষের চলাফেরা ইত্যাদির ব্যাঘাত না ঘটে।",
    },
    {
      id: 5,
      desc: "নিজে বা যানবাহন উপরের দিকে উঠতে লাগলে আল্লাহু আকবার বলা।",
    },
    {
      id: 6,
      desc: " নিজে বা যানবাহন নীচের দিকে নামতে বা অবতরণ করতে লাগলে সুবহানাল্লাহ বলা।",
    },
    {
      id: 7,
      desc: " দূর হতে গন্তব্যস্থান দৃষ্টিগোচর হতেই এই দুআ তিন বার পাঠ করাঃ- اللَّهُمَّ بَارِكْ لَنَا فِيهَا",
    },
    {
      id: 8,
      desc: "গন্তব্যস্থানে প্রবেশ করে এই দুআ পড়াঃ اَللّٰهُمَّ ارْزُقْنَا جَنَاهَا وَحَبِّبْنَا اِلٰی اَهْلِهَا وَحَبِّبْ صَالِحِىْ اَهْلِهَا اِلَيْنَا",
    },
    {
      id: 9,
      desc: "রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম ইরশাদ করেছেন সফরের কার্য শেষ হলেই তাড়াতাড়ি বাড়ী ফিরে আসবে। অযথা সফরকে দীর্ঘ করা ভাল নয়।",
    },
    {
      id: 10,
      desc: " সফর হতে প্রত্যাবর্তন করে এই দুআ পড়াঃ اٰئِـبُوْنَ تَائِبُوْنَ عَا بِدُوْنَ لِرَبِّنَا حَامِدُوْنَ",
    },
  ];
  return (
    <section className="text-[#2e424d] px-[100px] py-10 text-xl bg-[#f8ebd5]">
      <div className="bg-[#e49733] py-5 flex justify-between my-10 rounded-md px-10">
        <h1 className=" text-[#2e424d] text-center  font-bold text-2xl">সফর</h1>
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

export default Tours;
