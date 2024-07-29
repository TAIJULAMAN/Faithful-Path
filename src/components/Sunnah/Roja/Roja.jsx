import React from "react";

function Roja() {
  const roja = [
    {
      id: 1,
      desc: " চোখের হিফাজত করা। অর্থাৎ অপাত্রে দৃষ্টি না দেওয়া, খেল-তামাশার প্রতিও দৃষ্টি না দেওয়া।",
    },
    {
      id: 2,
      desc: "জবানের হিফাজত করা। মিথ্যা, চোগলখুরী, বাজে কথা, গীবত, শেকায়াত ইত্যাদি থেকে জিহ্বাকে হিফাজত করা।",
    },
    {
      id: 3,
      desc: "কানের হিফাজত করা; ঐসব অনর্থক বস্তু থেকে যা মুখে উচ্চারণ করা বৈধ নয়।",
    },
    {
      id: 4,
      desc: "অন্যান্য অঙ্গ-প্রত্যঙ্গেরও হেফাজত করা। যেমন হাতকে নিষিদ্ধ বস্তু স্পর্শ করা থেকে। পাকে অবৈধ স্থানে গমন করা থেকে। পেটকে সন্দেহজনক জিনিস খাওয়া থেকে হেফাজত করা।",
    },
    {
      id: 5,
      desc: "ইফতারের সময় হালাল মাল দ্বারা হলেও উদরপূর্ণ করে না খাওয়া।",
    },
    {
      id: 6,
      desc: "রোযা কবুল হয় কিনা এই ভয়ে সব সময় কম্পিত থাকা।",
    },
  ];
  return (
    <section className="text-[#2e424d]">
      <div className="relative">
        <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {roja.map((data, id) => (
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

export default Roja;
