import React from "react";

function Voy() {
  const voy = [
    {
      id: 1,
      name: "সাপের ভয় হলে",
      arabic:
        "اِنَّا نَسْئَلُكَ بِعَهْدِ نُوْحٍ وَبِعَهْدِ سُلَيْمَانَ بْنِ دَاؤُدَ اَنْ لَا تُؤْذِيْنَا.",
      bangla:
        " ইন্নাা নাসআলুকা বি‘আহদি নূ হিন ওয়া বি ‘আহদি সুলাই মাানাবনি দা উদা আন লাা তু’যীনাা।",
      meaning:
        "ও হে সাপ! আমরা নূহ্ আলাইহিস সালাম এবং সুলাইমান আলাইহিস সালামের অঙ্গীকারের কথা তোদের স্মরণ করিয়ে দিচ্ছি। তোরা আমাদের কোন ক্ষতি করিস না এবং আমাদের কষ্ট দিস না।",
    },
    {
      id: 2,
      name: "বদ নযর থেকে হেফাযতের দু‘আ",
      arabic:
        "اَعُوْذُ بِكَلِمَاتِ اللهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَّهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ .",
      bangla:
        " আ‘ঊযু বিকালিমাা তিল্লাা হিত তাা ম্মাতি মিন কুল্লি শাইত্বাা নিউ ওয়া হাা ম্মাতিন ওয়া মিন কুল্লি ‘আইনীন লাাম্মাহ।",
      meaning:
        "সকল শয়তান, কীটপতঙ্গ ও বদ নযর হতে আল্লাহর পূর্ণাঙ্গ কালিমাসমূহের মাধ্যমে আশ্রয় চাচ্ছি।",
    },
    {
      id: 3,
      name: "মন্দভাগ্য থেকে রক্ষা পেতে",
      arabic:
        "اَللّٰهُمَّ اِنِّىْ اَعُوْذُبِكَ مِنْ جَهْدِالْبَلَاءِ وَدَرْكِ الشَّقَاءِ وَسُوْءِ الْقَضَاءِ و شَمَاتَةِ الْاَعْدَاءِ",
      bangla:
        "আল্লাহুম্মা ইন্নী আ‘ঊযুবিকা মিন জাহদিল বালা-য়ে ওয়া দারকিশ শাক্বা-ই ওয়া সূ-ইল ক্বদায়ি ওয়া শামাতাতিল আ’দা।",
      meaning:
        " হে আল্লাহ, অবশ্যই আমি তোমার নিকট কঠিন দুরাবস্থা, দুর্ভাগ্যের নাগাল, মন্দভাগ্য এবং দুশমনের হাসি থেকে রক্ষা কামনা করছি",
    },
    {
      id: 4,
      name: "শত্রু থেকে হেফাজতের দু’আ",
      arabic: "اَللّٰهُمَّ وَاقِيَةً كَوَاقِيَةِ الْوَلِيْدِ",
      bangla: "আল্লাাহুম্মা ওয়াা ক্বিয়াতান কা ওয়াা ক্বিয়াতিল ওয়ালীদ",
      meaning: " হে আল্লাহ! নবজাতককে হেফাজত করার মত (আমাদেরকে) হেফাজত করো।",
    },
    {
      id: 5,
      name: "শিশুদের হেফাজতের দু‘আ",
      arabic:
        "أَعُوْذُ بِكَلِمَاتِ اللهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
      bangla:
        " আ‘ঊযু বিকালিমা-তিল্লা-হিত তা-ম্মাতি মিন কুল্লি শাইতানিওঁ ওয়া হা-ম্মাহ, ওয়ামিন কুল্লি আইনিল্লা-ম্মাহ্‌।",
      meaning:
        " আমি আশ্রয় গ্রহণ করছি আল্লাহর পরিপূর্ণ কথাসমূহের, সকল শয়তান থেকে, সকল ক্ষতিকারক পোকামাকড় ও প্রাণী থেকে এবং সকল ক্ষতিকারক দৃষ্টি থেকে।",
    },
    {
      id: 6,
      name: "ভীত অবস্থায় ",
      arabic: "لاَ إِلَهَ إِلاَّ اللَّهُ",
      bangla: "লা ইলা-হা ইল্লাল্লা-হু",
      meaning: "আল্লাহ ব্যতীত কোনো হক্ব উপাস্য নেই।",
    },
    {
      id: 7,
      name: " শত্রু বা যালিমের সম্মুখীন হলে ",
      arabic:
        "اللَّهُمَّ أَنْتَ عَضُدِي، وَأَنْتَ نَصِيرِي، بِكَ أَحُولُ وَبِكَ أَصُولُ، وَبِكَ أُقاتِلُ",
      bangla:
        "আল্লহুম্মা আনতা ‘আদ্বুদী, ওয়া আনতা নাসীরী, বিকা আহূলু, ওয়া বিকা আসূলু, ওয়া বিকা উক্বা-তিলু",
      meaning:
        " হে আল্লাহ! আপনি আমার শক্তি এবং আপনি আমার সাহায্যকারী; আপনারই সাহায্যে আমি বিচরণ করি, আপনারই সাহায্যে আমি আক্রমন করি এবং আপনারই সাহায্যে আমি যুদ্ধ করি।",
    },
  ];
  return (
    <div className="relative text-xl bg-[#e8e9f3] text-[#2e424d] px-[100px] py-10">
      <h1 className="bg-[#98dad9] text-center py-5 my-10 rounded-md font-bold text-xl">
        ভয়ভীতি
      </h1>
      <ul className="space-y-2">
        {voy.map((data, id) => (
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

export default Voy;
