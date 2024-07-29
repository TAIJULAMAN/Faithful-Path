import React from "react";

function Sehri() {
  const sehri = [
    {
      id: 1,
      desc: "সাহরি খাওয়ার ক্ষেত্রে রাসুল সা. এর সুন্নত হলো,একেবারে শেষ মুহূর্তে সাহরি করা।",
    },
    {
      id: 2,
      desc: "সাহরিতে রাসুল সা. খেজুর খেতে উৎসাহ দিয়েছেন।",
    },
  ];
  return (
    <section className="text-[#2e424d]">
      <div className="relative">
        <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {sehri.map((data, id) => (
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

export default Sehri;
