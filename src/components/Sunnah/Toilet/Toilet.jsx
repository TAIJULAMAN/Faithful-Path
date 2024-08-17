import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Toilet() {
  const item = [
    {
      id: 1,
      desc: "মাথা ঢেকে রাখা। ",
    },
    {
      id: 2,
      desc: "জুতা সেন্ডেল পরিধান করে যাওয়া।",
    },
    {
      id: 3,
      desc: "পায়খানায় প্রবেশের পূর্বে এই দোয়া পড়া: بسم الله اللهم اني اعوذ بك من الخبث والخبائث",
    },
    {
      id: 4,
      desc: "দোয়া পড়ার পর আগে বাম পা ঢুকানো।",
    },
    {
      id: 5,
      desc: "কিবলার দিকে মুখ বা পিঠ দিয়ে না বসা। ",
    },
    {
      id: 6,
      desc: "যথাসম্ভব বসার নিকটবর্তী হয়ে সতর খোলা এবং বসা অবস্থায় পেশাব ও পায়খানা করা। দাঁড়িয়ে পেশাব না করা।",
    },
    {
      id: 7,
      desc: " পেশাব ও নাপাক পানির ছিটা হতে অত্যন্ত সতর্কতার সাথে বেঁচে থাকা। ",
    },
    {
      id: 8,
      desc: "পানি খরচ করার পূর্বে ঢিলা কুলুপ বা টয়লেট পেপার ব্যবহার করা।",
    },

    {
      id: 9,
      desc: "ঢিলা ও পানির খরচ করার সময় বাম হাত ব্যবহার করা।",
    },
    {
      id: 10,
      desc: "পেশাবের ফোটা আসা বন্ধ হওয়ার জন্য আড়ালে সামান্য চলাফেরা করা।",
    },
    {
      id: 11,
      desc: "যেখানে পেশাবও পায়খানার জন্য নির্ধারিত কোন জায়গা নেই সেখানে এমন ভাবে বসা যেন সতর নজরে না পড়ে।",
    },
    {
      id: 12,
      desc: "পেশাবের জন্য নরম বা এমন স্থান তালাশ করা যেখান থেকে পেশাবের ছিটা শরীরে বা কাপড়ে না লাগে।",
    },
    {
      id: 13,
      desc: "ঢিলা কুলুপ ব্যবহারের পর পানি ব্যবহার করা।",
    },
    {
      id: 14,
      desc: " ডান পা দিয়ে বের হওয়া।",
    },
    {
      id: 15,
      desc: "বাইরে এসে এই দোয়া পড়া: غفرانك الحمد لله الذي اذهب عني الاذى وعافا ني",
    },
  ];
  return (
    <section className="text-[#2e424d] px-[100px] py-10 text-xl bg-[#f8ebd5]">
      <div className="bg-[#e49733] py-5 flex justify-between my-10 rounded-md px-10">
        <h1 className=" text-[#2e424d] text-center  font-bold text-2xl">
          টয়লেট / ইস্তিঞ্জা
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

export default Toilet;
