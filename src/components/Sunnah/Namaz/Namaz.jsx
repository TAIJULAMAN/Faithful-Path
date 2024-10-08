import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Snamaz() {
  const item = [
    {
      id: 1,
      desc: "উভয় পায়ের আঙ্গুল সমূহ কিবলামুখী রাখা এবং উভয় পায়ের মাঝখানে চার আঙ্গুল; ঊর্ধ্বে এক বিঘত পরিমান ফাঁকা রাখা।",
    },
    {
      id: 2,
      desc: "তাকবীরে তাহরিমার সময় চেহারা কেবলার দিকে রেখে নজর সিজদার জায়গায় রাখা এবং হাত উঠানোর সময় মাথা না ঝুঁকানো।",
    },
    {
      id: 3,
      desc: "পুরুষের জন্য তাকবীরে তাহরিমা বলার সময় উভয় হাত কান পর্যন্ত উঠানো –অর্থাৎ উভয় হাতের বৃদ্ধাঙ্গুলী কানের লতি পর্যন্ত উঠানো।",
    },
    {
      id: 4,
      desc: "হাত উঠানোর সময় উভয় হাতের তালু কিবলামুখী রাখা।",
    },
    {
      id: 5,
      desc: "হাত উঠানোর সময় আঙ্গুলসমূহ স্বাভাবিক ভাবে রাখা অর্থাৎ একেবারে মিলিয়েও না রাখা আবার বেশি ছড়িয়েও না রাখা।",
    },
    {
      id: 6,
      desc: "মুক্তাদির তাকবীরে তাহরীমা ইমামের তাকবীরে তাহরিমার পর সাথে সাথে হওয়া। তবে মনে রাখতে হবে মুক্তাদীর তাকবীরে তাহরিমা যদি ইমামের আগেই সমাপ্ত হয়ে যায় তাহলে ইকতিদা সহিহ হবে না।",
    },
    {
      id: 7,
      desc: "হাত বাধার সময় ডান হাতের তালু বাম হাতের পিঠের উপর রাখা।",
    },
    {
      id: 8,
      desc: "ডান হাতের বৃদ্ধাঙ্গুলি ও কনিষ্ঠাঙ্গুলি দ্বারা বৃত্ত বানিয়ে বাম হাতের কব্জি বেষ্টন করে ধরা।",
    },
    {
      id: 9,
      desc: "মাঝের তিন আঙ্গুল বাহুর উপর স্বাভাবিকভাবে রাখা।",
    },
    {
      id: 10,
      desc: "নাভির নিচে হাত বাধা (পুরুষের জন্য)।",
    },
    {
      id: 11,
      desc: "সানা অর্থাৎ সুবহানাকাল্লাহুম্মাহ শেষ পর্যন্ত পড়া।",
    },
    {
      id: 12,
      desc: "রুকুতে যাওয়ার সময় আল্লাহু আকবর বলা।",
    },
    {
      id: 13,
      desc: "উভয় হাত দ্বারা হাটু ধরা ।",
    },
    {
      id: 14,
      desc: "পুরুষের জন্য হাঁটু ধরার ক্ষেত্রে হাতের আঙ্গুলসমূহ ছড়িয়ে রাখা।",
    },
    {
      id: 15,
      desc: "উভয় হাত সম্পূর্ণ সোজা রাখা কনুই বাঁকা না করা।",
    },
    {
      id: 16,
      desc: "পায়ের গোছা, হাটু ও উরু সম্পূর্ণ সোজা রাখা। হাঁটু সামনে বা পিছনে বাঁকা না করা।",
    },
    {
      id: 17,
      desc: "পুরুষের জন্য মাথাপিঠ ও কোমর সমান রাখা। উঁচু-নিচু না করা এবং পায়ের দিকে নজর রাখা।",
    },
    {
      id: 18,
      desc: "রুকুতে কমপক্ষে তিনবার রুকুর তাসবিহ সুবহানা রাব্বিয়াল আজিম পড়া।",
    },
    {
      id: 19,
      desc: "রুকু থেকে উঠার সময় ইমামের উচ্চস্বরে সামি আল্লাহু লিমান হামিদাহ এবং মুক্তাদির আস্তে রাব্বানা লাকাল হামদ এবং মুনফারীদ তথা একাকী নামাজির উভয় বাক্যই বলা।",
    },
    {
      id: 20,
      desc: " সিজদায় যাওয়ার সময় আল্লাহু আকবার বলা।",
    },
    {
      id: 21,
      desc: "সিজদায় যাওয়ার সময় প্রথমে হাঁটুদ্বয় জমিনে রাখা।",
    },
    {
      id: 22,
      desc: "তারপর হাঁটু থেকে আনুমানিক এক হাত দূরে উভয় হাত রাখা এবং হাতের আঙ্গুলসমূহ কিবলামুখী করে সম্পূর্ণরূপে মিলিয়ে রাখা।",
    },
    {
      id: 23,
      desc: "তারপর উভয়ে বৃদ্ধাঙ্গুলির মাথা বরাবর নাক রাখা।",
    },
    {
      id: 24,
      desc: "অতঃপর কপাল রাখা।",
    },
    {
      id: 25,
      desc: "অতঃপর দুই হাতের মাঝে সেজদা করা এবং দৃষ্টি নাকের অগ্রভাগের দিকে রাখা।",
    },
    {
      id: 26,
      desc: "পাজরদ্বয় থেকে উভয়বাহু পৃথক রাখা।",
    },
    {
      id: 27,
      desc: "কনুই মাটি ও হাটু থেকে পৃথক রাখা।",
    },
    {
      id: 28,
      desc: "সিজদায় কমপক্ষে তিনবার সিজদার তাসবিহ সুবহানা রাব্বিয়াল আলা পরা।",
    },
    {
      id: 29,
      desc: "সিজদা থেকে উঠার সময় আল্লাহু আকবার বলা।",
    },
    {
      id: 30,
      desc: "সিজদা থেকে উঠার সময় প্রথমে কপাল, অতঃপর নাক, অতঃপর উভয় হাত, অতঃপর উপায় হাটু উঠানো।",
    },
    {
      id: 31,
      desc: "দুই সিজদার মাঝের বৈঠকে উভয় হাত উভয় রানের উপর রাখা।",
    },
    {
      id: 32,
      desc: " বাম পা বিছিয়ে তার উপর বসা। ডান পা সোজাভাবে খাড়া রাখা। উভয় পায়ের আঙুল সমূহ সাধ্যমত কিবলার দিকে মুড়িয়ে রাখা।",
    },
    {
      id: 33,
      desc: "উভয় হাত রানের উপর রাখা হাঁটু বরাবর করে রাখা এবং দৃষ্টি কোলের উপর রাখা।",
    },
    {
      id: 34,
      desc: "তাশাহুদের মধ্যে আশহাদু আললা ইলাহা ইল্লাল্লাহু বলার সময় মধ্যমা ও বৃদ্ধাঙ্গুলির মাথা একসঙ্গে মিলিয়ে গোলাকার বৃত্ত বানানো এবং শাহাদাত আঙ্গুল উঁচু করে ইশারা করা এবং ইল্লাল্লাহ বলার সময় তা নিচু করে ফেলা।",
    },
    {
      id: 35,
      desc: "শেষ বৈঠকে আত্তাহিয়াতু পড়ার পর দুরুদ শরীফ পড়া।",
    },
    {
      id: 36,
      desc: "দুরুদ শরীফের পর দোয়ায়ে মাসুরা পড়া।",
    },
    {
      id: 37,
      desc: "উভয় দিকে সালাম ফিরানো।",
    },
    {
      id: 38,
      desc: "ডানদিকে আগে সালাম ফিরানো। উভয় সালাম কিবলার দিক থেকে আরম্ভ করা এবং সালামের সময় দৃষ্টি কাধের দিকে রাখা।",
    },
    {
      id: 39,
      desc: " ইমামের উভয় সালামে মুক্তাদী, ফেরেশতা ও নামাজী জিনদের প্রতি সালাম করার নিয়ত করা।",
    },
    {
      id: 40,
      desc: "মুক্তাদীগণের উভয় সালামে ইমাম, অন্যান্য মুসল্লি, ফেরেশতা ও নামাজী জিনদের প্রতি সালাম করার নিয়ত করা।",
    },
    {
      id: 41,
      desc: "একাকী নামাজী ব্যক্তি শুধু ফেরেশতাগণের প্রতি সালাম করার নিয়ত করা।",
    },
    {
      id: 42,
      desc: "মুক্তাদীগণের ইমামের সালাম ফিরানোর পরপরই সালাম ফিরানো।",
    },
    {
      id: 43,
      desc: "দ্বিতীয় সালাম প্রথম সালাম অপেক্ষা আস্তে বলা।",
    },
    {
      id: 44,
      desc: "ইমামের দ্বিতীয় সালাম ফিরানো শেষ হলে মাসবুকের ছুটে যাওয়া নামাজ আদায়ের জন্য দাঁড়ানো।",
    },
    {
      id: 45,
      desc: "প্রতি রাকাতের শুরুতে বিসমিল্লাহ পূর্ণ পড়া।",
    },
    {
      id: 46,
      desc: "আউজুবিল্লাহি মিনাশ শাইতানির রাজিম পড়া।",
    },
    {
      id: 47,
      desc: "সূরা ফাতিহা শেষে নিম্নস্বরে আমীন বলা।",
    },
    {
      id: 48,
      desc: " ফজর ও যোহর নামাজে তিওয়ালে মুফাসসাল অর্থাৎ সুরা হুজুরাত থেকে সুরা বুরুজ পর্যন্ত সুরাসমুহের মধ্য হতে কোনো সুরা এবং আসর ও ইশার নামাযে আওসাতে মুফাসসাল অর্থাৎ সুরা ত্বরিক থেকে সুরা লামিয়াকুন পর্যন্ত সুরাসমুহের মধ্য থেকে কোনো সুরা এবং মাগরিবের ক্বিসারে মুফাসসাল অর্থাৎ সুরা যুলযিলাত থেকে সুরা নাস পর্যন্ত সুরাসমুহের মধ্য হতে কোনো সুরা পড়া।",
    },
    {
      id: 49,
      desc: "ফজরের প্রথম রাকাত দ্বিতীয় রাকাত অপেক্ষা দীর্ঘ করা।",
    },
    {
      id: 50,
      desc: "কিরাত অত্যন্ত তাড়াতাড়ি বা একেবারে ধীরে না পড়া; বরং মধ্যম গতিতে পড়া।",
    },
    {
      id: 51,
      desc: " ফরয নামাজের তৃতীয় ও চতুর্থ রাকাতে শুধু সুরা ফাতিহা পরা।",
    },
  ];
  return (
    <section className="text-[#2e424d] px-[100px] py-10 text-xl bg-[#f8ebd5]">
      <div className="bg-[#e49733] py-5 flex justify-between my-10 rounded-md px-10">
        <h1 className=" text-[#2e424d] text-center  font-bold text-2xl">
          নামাজ
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

export default Snamaz;
