import React from "react";

function Tayammum() {
  const Tayammum = [
    {
      id: 1,
      desc: "তায়াম্মুমের শুরুতে بسم الله الرحمن الرحيم পড়া।",
    },
    {
      id: 2,
      desc: "মাটিতে হাত রাখার সময় আঙ্গুলসমূহ ফাঁক করে রাখা।",
    },
    {
      id: 3,
      desc: "মাটিতে উভয় হাত রাখার পর হস্তদয় সামান্য আগে-পিছে নিয়ে মাটিতে ঘর্ষণ করা।",
    },
    {
      id: 4,
      desc: "তারপর উভয় হাত ঝেড়ে নেওয়া।",
    },
    {
      id: 5,
      desc: "তায়াম্মুমের অঙ্গসমূহ মাসাহ করার সময় ধারাবাহিকতা বজায় রাখা।",
    },
    {
      id: 6,
      desc: "চেহারা ও হাতে মাসাহের মাঝে বিলম্ব না করা।",
    },
  ];
  return (
    <section className="text-[#2e424d]">
      <div className="relative">
        <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {Tayammum.map((data, id) => (
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

export default Tayammum;
