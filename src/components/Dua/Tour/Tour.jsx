import React from "react";

function Tour() {
  const tour = [
    {
      id: 1,
      name: "উপরে ওঠার সময়",
      arabic: "اَللّٰهُ اَكْبَرْ",
      bangla: " আল্লাহু আকবার।",
      meaning: "আল্লাহ সবচেয়ে বড়।",
    },
    {
      id: 2,
      name: "নীচে নামার সময়",
      arabic: "سُبْحَانَ اللّٰهِ",
      bangla: "সুব্‌হানাল্লাহ।",
      meaning: "আমি আল্লাহর পবিত্রতা ও মহিমা বর্ণনা করছি।",
    },
    {
      id: 3,
      name: "চিন্তামুক্ত সফরের দু’আ",
      arabic:
        "رَّبِّ  اَدْخِـلْـنِـىْ  مُـدْخَـلَ  صِـدْقٍ  وَّاَخْـرِجْـنِـىْ  مُـخْـرَجَ  صِـدْقٍ  وَّاجْـعَـلْ  لِّـىْ  مِـنْ  لَّـدُنْـكَ سُلْطَانًا نَصِيرًا",
      bangla:
        "রাব্বি আদ্‌খিল্‌নি মুদ্‌খালা সিদক্বিওঁ ওয়া আখ্‌রিযনি মুখ্‌রাজা সিদ্‌কিওঁ ওয়াজা’আল্লি মিল্লাদুন্‌কা সুল্‌তা-নান্ন নাসি-র।",
      meaning:
        "হে আমার প্রতিপালক! আমাকে প্রবেশ করাও কল্যাণের সাথে এবং আমাকে নিষ্ক্রান্ত করাও কল্যাণের সাথে এবং তোমার নিকট হতে আমাকে দান করো সাহায্যকারী শক্তি।",
    },
    {
      id: 4,
      name: "সফর থেকে প্রত্যাবর্তনের দু‘আ",
      arabic: "اٰئِـبُوْنَ تَائِبُوْنَ عَا بِدُوْنَ لِرَبِّنَا حَامِدُوْنَ.",
      bangla: "আা ইবূ না তাা ইবূ না লিরব্বিনাা হাামিদূন।",
      meaning:
        " আমরা এখন সফর হতে প্রত্যাবর্তন করছি। (নিজেদের গুনাহ হতে) তওবা করছি, (আল্লাহ পাকের) ইবাদতের ইরাদা করছি এবং আমাদের প্রতিপালকের প্রশংসা করছি।",
    },
    {
      id: 5,
      name: "সফর চলাকালে কোথাও যাত্রাবিরতির সময়ের দু‘আ",
      arabic: "اَعُوْذُ بِكَلِمَاتِ اللهِ التَّآمَّةِ مِنْ شَرِّ مَا خَلَقَ.",
      bangla: " আ‘ঊযু বিকালিমাা তিল্লাা হিত তাা ম্মাা তি মিন শাররি মাা খলাক্ব।",
      meaning:
        "আল্লাহর পরিপূর্ণ কালিমাসমূহের মাধ্যমে তাঁর সৃষ্টির অনিষ্ট থেকে আশ্রয় প্রার্থনা করছি।",
    }
  ];
  return (
    <div className="relative text-xl">
      <ul className="space-y-2">
        {tour.map((data, id) => (
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

export default Tour;
