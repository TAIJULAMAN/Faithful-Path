import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Dress() {
  const item = [
    {
      id: 1,
      desc: "প্রিয়নবী সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম সাদা কাপড় বেশি পছন্দ করতেন।",
    },
    {
      id: 2,
      desc: "জামা-পায়জামাসহ সকল প্রকার পোশাক পরিধানের সময় ডান হাত ও ডান পা আগে প্রবেশ করানো।",
    },
    {
      id: 3,
      desc: "পুরুষদের জন্য পায়জামা, লুঙ্গি এবং জামা, জুব্বা ও আবা-কাবা পায়ের টাখনুর উপরে রাখা।",
    },
    {
      id: 4,
      desc: " সাধারণভাবে কাপড় পরিধান করার সময় এই দুআ পড়া : اَلْحَمْدُ لِلّٰهِ الَّذِيْ كَسَانِـيْ هٰذَا وَرَزَقَنِيْهِ مِنْ غَيْرِ حَوْلٍ مِّنِّىْ وَلَا قُوَّةٍ",
    },
    {
      id: 5,
      desc: "নতুন কাপড় পরিধান করে এই দুআ পড়া: اَلْحَمْدُ لِلّٰهِ الَّذِيْ كَسَانِىْ مَا اُوَارِيْ بِه عَوْرَتِـيْ وَاَتَجَمَّلُ بِه فِيْ حَيَاتِيْ",
    },
    {
      id: 6,
      desc: "টুপি পরা। টুপির উপর পাগড়ী পরা মুস্তাহাব এবং লেবাসের আদব। ",
    },
    {
      id: 7,
      desc: " বিসমিল্লাহ বলে কাপড় খোলা আরম্ভ করা এবং খোলার সময় বাম হাত ও বাম পা আগে বের করা।",
    },
    {
      id: 8,
      desc: "পাগড়ী বাঁধার পর মাথার পিছন দিকে এক হাত পরিমাণ ঝুলিয়ে রাখা।",
    },
    {
      id: 9,
      desc: " জুতা প্রথমে ডান পায়ে পরা, অতঃপর বাম পায়ে পরা।",
    },
    {
      id: 10,
      desc: "জুতা খোলার সময় প্রথমে বাম পা থেকে অতঃপর ডান পা থেকে খোলা।",
    },
  ];
  return (
    <section className="text-[#2e424d] px-[100px] py-10 text-xl bg-[#f8ebd5]">
      <div className="bg-[#e49733] py-5 flex justify-between my-10 rounded-md px-10">
        <h1 className=" text-[#2e424d] text-center  font-bold text-2xl">
        পোশাক
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

export default Dress;
