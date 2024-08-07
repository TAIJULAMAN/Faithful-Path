import React from "react";

function Pak() {
  const pak = [
    {
      id: 1,
      name: " টয়লেটে প্রবেশের পূর্বে",
      arabic:
        "بِسْمِ اللهِ اَللّٰهُمَّ اِنِّيْ اَعُوْذُبِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
      bangla:
        "বিসমিল্লাাহি আল্লাাহুম্মা ইন্নী আ‘ঊযুবিকা মিনাল খুবুসি ওয়াল খাবাাইস।",
      meaning:
        " আল্লাহ তা’আলার নামে, হে আল্লাহ! আমি আপনার নিকট ক্ষতিকারক নর ও নারী জিন শয়তান হতে আশ্রয় প্রার্থনা করছি।",
    },
    {
      id: 2,
      name: "টয়লেট থেকে বের হওয়ার পর",
      arabic:
        "غُفْرَانَكَ اَ لْحَمْدُ لِلّٰهِ الَّذِيْ اَذْهَبَ عَنِّيْ الْاَذٰى وَعَافَانِيْ",
      bangla:
        " গুফরাানাকা আলহামদু লিল্লাা হিল্লাযী আযহাবা ‘আন্নীল আযাা ওয়া ‘আা ফাা নী।",
      meaning:
        "হে আল্লাহ! আমি আপনার নিকট ক্ষমা চাচ্ছি। সকল প্রশংসা সেই মহান আল্লাহর জন্যে, যিনি আমার থেকে কষ্টদায়ক বস্তু দূর করে দিয়েছেন এবং আমাকে সুস্থ রেখেছেন।",
    },
  ];
  return (
    <div className="relative text-xl bg-[#e8e9f3] text-[#2e424d] px-[100px] py-10">
      <h1 className="bg-[#98dad9] text-center py-5 my-10 rounded-md font-bold text-xl">
        পাক পবিত্রতা
      </h1>
      <ul className="space-y-2">
        {pak.map((data, id) => (
          <li
            key={id}
            className="space-y-3 p-4 border border-[#a6a6a8] rounded-lg"
          >
            <h1 className="text-xl font-bold mb-2 mt-2">{data.name}</h1>
            <div className="border-[1px] border-[#98dad9]"></div>
            <p className="text-center font-bold py-5">{data.arabic}</p>
            <p>
              <span className="font-bold">উচ্চারণঃ </span>
              {data.bangla}
            </p>
            <p>
              <span className="font-bold">অর্থঃ </span>
              {data.meaning}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pak;
