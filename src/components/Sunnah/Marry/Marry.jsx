import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Marry() {
  const item = [
    {
      id: 1,
      desc: "মাসনূন বিবাহ সাদাসিধে ও অনাড়ম্বর হবে, যা অপচয়, অপব্যয়, বেপর্দা ও বিজাতীয় সংস্কৃতি, গান-বাদ্য, ভিডিও-অডিও মুক্ত হবে এবং তাতে যৌতুকের শর্ত বা সামর্থ্যের অধিক মোহরানার শর্ত থাকবে না।",
    },
    {
      id: 2,
      desc: "সৎ ও খোদাভীরু পাত্র-পাত্রীর সন্ধান করে বিবাহের পয়গাম পাঠানো। কোন বাহানা বা সুযোগে পাত্রী দেখা সম্ভব হলে, দেখে নেয়া মুস্তাহাব। কিন্তু আনুষ্ঠানিকভাবে ঘটা করে পাত্রী দেখানোর যে প্রথা আমাদের সমাজে প্রচলিত, তা সুন্নাতের পরিপন্থী ও পরিত্যাজ্য।",
    },
    {
      id: 3,
      desc: "শাওয়াল মাসে এবং জুমুআর দিনে মসজিদে বিবাহ সম্পাদন করা। উল্লেখ্য, সকল মাসের যে কোন দিন বিবাহ করা জায়েয আছে।",
    },
    {
      id: 4,
      desc: "বিবাহের খবর ব্যাপকভাবে প্রচার করে বিবাহ করা এবং বিবাহের পরে আকদ অনুষ্ঠানে উপস্থিত লোকদের মাঝে খেজুর বণ্টন করা।",
    },
    {
      id: 5,
      desc: "সামর্থ্যানুযায়ী মোহর ধার্য করা।",
    },
    {
      id: 6,
      desc: "বাসর রাতে স্ত্রীর কপালের উপরের চুল হাতে নিয়ে এই দুআ পড়াঃ اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِهَا وَخَيْر مَا جَبَلْتَ عَلَيْهِ . وَأعُوذُ بِكَ مِنْ شَرهَا وَشَرَ مَا جَبَلْتَ عَلَيْهِ .",
    },
    {
      id: 7,
      desc: "স্ত্রীর সঙ্গে প্রথমে অন্তরঙ্গতা সৃষ্টি করবে, তারপর যখনই সহবাস-এর ইচ্ছা হয়, তখন প্রথমে নিম্নোক্ত দুআ পড়ে নেবেঃ بِسْمِ اللّٰهِ اَللّٰهُمَّ جَنِّبْنَا الشَّيْطَانَ وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا",
    },
    {
      id: 8,
      desc: "বাসর রাতের পর আত্মীয়-স্বজন-বন্ধু-বান্ধব এবং গরীব মিসকীনদের তাওফীক অনুযায়ী ওলিমা খাওয়ানোর আয়োজন করা।",
    },
  ];
  return (
    <section className="text-[#2e424d] px-[100px] py-10 text-xl bg-[#f8ebd5]">
      <div className="bg-[#e49733] py-5 flex justify-between my-10 rounded-md px-10">
        <h1 className=" text-[#2e424d] text-center  font-bold text-2xl">
          বিবাহ
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
export default Marry;
