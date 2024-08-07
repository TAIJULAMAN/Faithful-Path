import React from "react";

function Sleep() {
  const sleep = [
    {
      id: 1,
      name: "বিছানায় শুয়ে পড়বে",
      arabic:
        "اللَّهُمَّ إِنِّي أَعُوذُ بِوَجْهِكَ الْكَرِيمِ، وَكَلِمَاتِكَ التَّامَّةِ، مِنْ شَرِّ مَا أَنْتَ آخِذٌ بِنَاصِيَتِهِ، اللَّهُمَّ أَنْتَ تَكْشِفُ الْمَغْرَمَ وَالْمَأْثَمَ، اللَّهُمَّ لَا يُهْزَمُ جُنْدُكَ، وَلَا يُخْلَفُ وَعْدُكَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ سُبْحَانَكَ وَبِحَمْدِكَ",
      bangla:
        "আললাহুমমা ইন্নি আউযুবিকা বি ওয়াজহিকাল কারীম ওয়া কালিমাতিকাত তাম্মাতি মিন শাররী মা আনতা আখিযুম বি নাসিয়াতিহি, আললাহুমমা আনতা তাকশিফুল মাগরামা ওয়াল মা’ছামা, আললাহুমমা লা ইউহযামু জুনদুকা,ওয়া লা ইয়ুখলাফু ওয়াদুকা ওয়া লা ইয়ানফাউ যাল জাদ্দি মিনকাল জাদ্দু, সুবহানাকা ওয়া বিহামদিকা।",
      meaning:
        " হে আল্লাহ। আমি আপনার সম্মানিত চেহারার অসিলায় সব কিছু থেকে পানাহ চাচ্ছি, আর আপনার পরিপূর্ণ কালিমার অসিলায় অনিষ্টকর সব কিছু থেকে নাজাত চাচ্ছি, যা আপনার নিয়ন্ত্রণে আছে। হে আল্লাহ! আপনিই করয আদায় করে থাকেন এবং গুনাহ মাফ করে দেন। হে আল্লাহ! আপনার বাহিনী পরাজিত হবার নয় এবং ওয়াদা ভঙ্গ হয় না। আর কোন বিত্তবানের বিত্ত আপনার সামনে কাজে আসবে না। আপনি পবিত্র মহান, আর সব প্রশংসা আপনারই।",
    },
    {
      id: 2,
      name: "ঘুমের পূর্বে পড়ার দু’আ",
      arabic: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْتُ وَاَحْيَا",
      bangla: "আল্লাাহুম্মা বিসমিকা আমূতু ওয়া আহইয়াা।",
      meaning:
        "হে আল্লাহ! আমি আপনারই নামে মৃত্যুবরণ করব, আপনার নামের সাথেই জীবিত থাকব।",
    },
    {
      id: 3,
      name: "ঘুম থেকে উঠে দু’আ ",
      arabic:
        "اَلْحَمْدُ لِلّٰهِ الَّذِيْ اَحْيَانَا بَعْدَ مَا اَمَاتَنَا وَ اِلَيْهِ النُّشُوْرُ",
      bangla:
        " আলহামদু লিল্লাা হিল্লাযী আহ ইয়াানাা বা‘দা মাা আমাা তানাা ওয়া ইলাইহিন নুশূর।",
      meaning:
        "সকল প্রশংসা আল্লাহ তা’আলার যিনি আমাদের মৃত্যু দানের পর পুনরায় জীবন দান করেছেন এবং মৃত্যুর পর তাঁ‍রই নিকট আমাদের প্রত্যাবর্তন করতে হবে।",
    },
    {
      id: 4,
      name: "বিছানায় শুয়ে ঘুম না আসলে এই দুআ",
      arabic:
        "لا إِلَهَ إِلا اللَّهُ الْوَاحِدُ الْقَهَّارُ رَبُّ السَّمَوَاتِ وَالأَرْضِ وَمَا بَيْنَهُمَا الْعَزِيزُ الْغَفَّارُ",
      bangla:
        " লা ইলা-হা ইল্লাল্লা-হুল ওয়াহিদুল কাহহার, রাব্বুস্ সামা-ওয়া-তি অল আরযি অমা বায়নাহুমাল আযীযুল গাফফা-র",
      meaning:
        "আল্লাহ ব্যতীত কোন সত্য উপাস্য নেই যিনি একক, প্রবল প্রতাপান্বিত। আকাশমন্ডলী, পৃথিবী এবং উভয়ের মধ্যবর্তী সকল বস্তুর প্রতিপালক। যিনি পরাক্রমশলী, ক্ষমাশীল।",
    },
    {
      id: 5,
      name: "রাতের বেলায় কুকুরের ডাক শুনলে",
      arabic: "أَعُوْذُ بِا للَّهِ",
      bangla: " আ’ঊযু বিল্লাহ ",
      meaning: "আমি আল্লাহর আশ্রয় প্রার্থনা করছি।",
    },
    {
      id: 6,
      name: " সকাল সন্ধ্যার কালেমা",
      arabic:
        "اللَّهُمَّ عَالِمَ الغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ",
      bangla:
        "আল্লা-হুম্মা ‘আ-লিমাল গাইবি ওয়াশ শাহা-দাতি, ফা-ত্বিরাস সামা-ওয়া-তি ওয়াল আরদ্বি, রাব্বা কুল্লি শাই’ইন ওয়া মালীকাহু, আশহাদু আল্লা ইলা-হা ইল্লা আনতা, আ‘উযু বিকা মিন শাররি নাফসী, ওয়ামিন শাররিশ শাইত্বা-নী ওয়াশিরকিহী, ওয়া আন আক্বতারিফা ‘আলা নাফসী সূ’আন আউ আজুররাহু ইলা মুসলিম",
      meaning:
        " হে আল্লাহ! হে গায়েব ও উপস্থিতের জ্ঞানী, হে আসমানসমূহ ও যমীনের স্রষ্টা, হে সব কিছুর রব্ব ও মালিক! আমি সাক্ষ্য দিচ্ছি যে, আপনি ছাড়া আর কোনো হক্ব ইলাহ নেই। আমি আপনার কাছে আশ্রয় চাই আমার আত্মার অনিষ্ট থেকে, শয়তানের অনিষ্টতা থেকে ও তার শির্ক বা তার ফাঁদ থেকে, আমার নিজের উপর কোনো অনিষ্ট করা, অথবা কোনো মুসলিমের দিকে তা টেনে নেওয়া থেকে।",
    },
  ];
  return (
    <div className="relative text-xl bg-[#e8e9f3] text-[#2e424d] px-[100px] py-10">
      <h1 className="bg-[#98dad9] text-center py-5 my-10 rounded-md font-bold text-xl">
        ঘুম
      </h1>
      <ul className="space-y-2">
        {sleep.map((data, id) => (
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

export default Sleep;
