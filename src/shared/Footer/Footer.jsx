import React from "react";

function Footer() {
  return (
    <div className="text-[#2e424d] bg-[#F7F3DE] px-10 pt-16 pb-10 text-center min-h-full">
      <p className=" ">
        "এটি একটি ওয়েবসাইট যা বাংলাদেশের মানুষকে ইসলামের শিক্ষা সম্পর্কে সচেতন
        করার মহৎ উদ্দেশ্য নিয়ে চালু করা হয়েছে। এই প্ল্যাটফর্মের বিকাশের পিছনে
        প্রধান কারণ হল মানুষকে ইসলামের সঠিক পথে পরিচালিত করার একটি হাতিয়ার
        হিসাবে ইন্টারনেটের সর্বাধিক ব্যবহার করা।"
      </p>
      <p className="py-5">
        আপনি যদি আমাদের ওয়েবসাইটে কোনো ত্রুটি খুঁজে পান বা আমাদের ওয়েবসাইটের
        জন্য আপনার কোনো পরামর্শ থাকে তাহলে আমাদের মেইল ​​করুন -
        mdshahamanpatwary@gmail.com
      </p>

      <div className=" flex gap-4 items-center font-normal md:font-bold justify-center text-[#98dad9]">
        <a href="/terms" className="hover:text-red-400">
          শর্তাবলী
        </a>
        <a href="" className="hover:text-red-400">
          Blogs
        </a>
        <a href="" className="hover:text-red-400">
          About Us
        </a>
        <a href="" className="hover:text-red-400">
          Privacy Policy
        </a>
        <a href="" className="hover:text-red-400">
          Contact Us
        </a>
      </div>
      <p className="pt-5">
        {"\u00a9"} {new Date().getFullYear()} বিশ্বস্ত পথ ।
      </p>
    </div>
  );
}

export default Footer;
