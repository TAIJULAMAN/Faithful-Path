import React from "react";

function Ozu() {
  const ozuSunnah = [
    {
      id: 1,
      desc: "উযুর নিয়ত করা অর্থাৎ উযুকারী মনে মনে এই নিয়ত করবে যে,পবিত্রতা অর্জন করা ও নামাজ জায়েজ হওয়ার জন্য আমি উযু করছি।",
    },
    {
      id: 2,
      desc: "বিসমিল্লাহির রাহমানির রাহিম পড়ে উযু আরম্ভ করা।",
    },
    {
      id: 3,
      desc: "উভয় হাত পৃথকভাবে কব্জিসহ তিনবার ধোয়া।",
    },
    {
      id: 4,
      desc: "মিসওয়াক করা। যদি মিসওয়াক না থাকে তাহলে আঙ্গুল দ্বারা দাঁত মাজা।",
    },
    {
      id: 5,
      desc: "তিনবার কুলি করা।",
    },
    {
      id: 6,
      desc: "তিনবার নাকে পানি দেয়া এবং নাক সাফ করা।",
    },
    {
      id: 7,
      desc: " ততসঙ্গে প্রতিবারই নাক ঝারা।",
    },
    {
      id: 8,
      desc: "প্রত্যেক অঙ্গকে পূর্ণভাবে তিনবার ধোয়া।",
    },

    {
      id: 1,
      desc: "দুই হাতে মুখ ধোয়া এবং মুখমন্ডল ধোয়ার সময় দাঁড়ি খিলাল করা।",
    },
    {
      id: 2,
      desc: "হাত ও পা ধোয়ার সময় আঙ্গুলসমুহ খিলাল করা।",
    },
    {
      id: 3,
      desc: "একবার সম্পূর্ণ মাথা মাসেহ করা।",
    },
    {
      id: 4,
      desc: "উভয় কান মাসেহ করা ।উল্লেখ্য,কানের ছিদ্রের মধ্যে কনিষ্ঠাঙ্গুলি ঢুকিয়ে এবং ভিতরদিকের অবশিষ্টাংশে শাহাদাত আঙ্গুল দ্বারা মাসাহ করা।",
    },
    {
      id: 5,
      desc: "উযুর অঙ্গসমুহ হাতদ্বারা ঘষে-মেজে ধোয়া।",
    },
    {
      id: 6,
      desc: "এক অঙ্গ ধোয়ার পর অন্য অঙ্গ ধুতে বিলম্ব না করা।",
    },
    {
      id: 7,
      desc: " তরতীবের সাথে অযু করা। অর্থাৎ অযুর অঙ্গসমুহ ধোয়ার সময় ধারাবাহিকতা বজায় রাখা।",
    },
    {
      id: 8,
      desc: "ডানদিকের অঙ্গ আগে ধোয়া।",
    },
    {
      id: 8,
      desc: "শীত অথবা অন্য কোনো কারণে যখন অযু করতে ইচ্ছা না হয় তখনও অযুর অঙ্গসমুহ উত্তমরূপে ধুয়ে অযু করা।",
    },
    {
      id: 8,
      desc: "অযুর মধ্যে নিম্নক্ত দোয়াটি পড়া: اللهم اغفر لي ذنبي ووسع لي في داري وبارك لي في رزقي এবং অযু শেষ করে কালেমায়ে শাহাদাত পড়া।",
    },
    {
      id: 8,
      desc: "অতঃপর এই দোয়া পড়া: اللهم اجعلني من التوابين واجعلني من المتطهرين",
    },
  ];
  return (
    <section className="text-[#2e424d]">
      <div className="relative">
        <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {ozuSunnah.map((data, id) => (
            <li
              key={id}
              className="space-y-3 p-4 border border-[#a6a6a8] rounded-lg"
            >
              <p>{data.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Ozu;
