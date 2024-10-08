import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Food() {
  const food = [
    {
      id: 1,
      name: "খাবার সামনে এলে",
      arabic:
        "اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
      bangla: "আল্লহুম্মা বারিক লানা ফি মা রযাক্বতানা ওয়াক্বিনা আজাবান্নার।",
      meaning:
        " হে আল্লাহ! আপনি আমাদেরকে যে রিয্‌ক দান করেছেন তাতে বরকত দান করুন এবং আমাদেরকে জাহান্নামের শাস্তি থেকে রক্ষা করুন।",
    },
    {
      id: 2,
      name: "খাওয়ার শুরুতে",
      arabic: "بِسْمِ اللهِ وَبَرَكَةِ اللهِ",
      bangla: " বিসমিল্লাহি ওয়াবারাকাতিল্লাহ্‌",
      meaning:
        "আল্লাহ তা’আলার নামে শুরু করছি, এবং আল্লাহ তা’আলার বরকতের সাথে এ খাবার গ্রহণ করছি।",
    },
    {
      id: 3,
      name: "পানি পান করার পর",
      arabic:
        "الْحَمْدُ لِلَّهِ الَّذِي سَقَانَا مَاءً عَذْبًا فُرَاتًا بِرَحْمَتِهِ، وَلَمْ يَجْعَلْهُ مِلْحًا أُجَاجًا بِذُنُوبِنَا",
      bangla:
        "আলহাম্‌দু লিল্লাহিল্লাজি ছাকানা আজবান ফুরতান বিরহমাতিহ্‌ ওয়ালাম ইয়াজ্‌ আ’লহু মিলহান উজাজান বিযুনুবিনা।",
      meaning:
        "সকল প্রশংসা আল্লাহ তা’আলার জন্যে, যিনি আমাদেরকে স্বীয় রহমতে সুস্বাদু, সুমিষ্ট পানি পান করিয়েছেন এবং আমাদের গুনাহের কারণে তা তিক্ত ও লবণাক্ত করেননি।",
    },
    {
      id: 4,
      name: "খাওয়ার শেষে ",
      arabic:
        "اَلْحَمْدُ لِلّٰهِ الَّذِيْ اَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِيْنَ.",
      bangla:
        "আলহামদু লিল্লাা হিল্লাযী আত্ব ‘আমানাা ওয়া সাক্বাা নাা ওয়াজা ‘আলানাা মুসলিমীন।",
      meaning:
        "সকল প্রশংসা আল্লাহ তা’আলার জন্যে যিনি আমাদের পানাহার করিয়েছেন এবং আমাদেরকে মুসলমান বানিয়েছেন।",
    },
    {
      id: 5,
      name: " খানা খাওয়ার সময়",
      arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَأَطْعِمْنَا خَيْرًا مِنْهُ",
      bangla: "আল্লা-হুম্মা বারিক লানা ফীহি ওয়া আত‘ইমনা খাইরাম-মিনহু",
      meaning:
        "হে আল্লাহ! আপনি আমাদেরকে এই খাদ্যে বরকত দিন এবং এর চেয়েও উত্তম খাদ্য আহার করান।",
    },
  ];
  return (
    <div className="relative text-xl bg-[#e8e9f3] text-[#2e424d] px-[100px] py-10">
      <div className="bg-[#e49733] py-5 flex justify-between my-10 rounded-md px-10">
        <h1 className=" text-[#2e424d] text-center  font-bold text-2xl"> পানাহার</h1>
        <IoMdReturnRight size={40} />
      </div>
      <ul className="space-y-2">
        {food.map((data, id) => (
          <li
            key={id}
            className="space-y-3 p-4 border border-[#a6a6a8] rounded-lg"
          >
            <h1 className="text-xl font-bold mb-2 mt-2">{data.name}</h1>
            <div className="border-[1px] border-[#e49733]"></div>
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

export default Food;
