import React from "react";

function Ramadan() {
  const ramadan = [
    {
      id: 1,
      desc: "সাহরি খাওয়া।",
    },
    {
      id: 2,
      desc: "রোজাদারের জন্য ইফতার করা।",
    },
    {
      id: 3,
      desc: "কিআমুল লাইল ও তারাবীর নামাজ পড়া।",
    },
    {
      id: 4,
      desc: " বেশি বেশি কুরআন তেলাওয়াত করা।",
    },
    {
      id: 5,
      desc: "বেশি বেশি দুআ করা।",
    },
    {
      id: 6,
      desc: "মসজিদে ইতিকাফ করা। বিশেষত শেষ দশ দিন।",
    },
    {
      id: 7,
      desc: "রামাদান মাসে উমরাহ করা।",
    },
    {
      id: 8,
      desc: "কেউ গালি দিলে কিংবা অসৌজন্যমুলক আচরন করলে তার সাথে মন্দ ব্যবহার না করে বলে দিবে,”আমি রোযাদার”।",
    },
  ];
  return (
    <section className="text-[#2e424d]">
      <div className="relative">
        <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {ramadan.map((data, id) => (
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

export default Ramadan;
