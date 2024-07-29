import React from "react";

function Korbani() {
  const korbani = [
    {
      id: 1,
      desc: "ছুরি খুব ভালো করে ধার করে নিজ হাতে জবাই করা।",
    },
    {
      id: 2,
      desc: " পশুকে টেনে হিচড়ে যবেহের স্থানে না নেওয়া।",
    },
  ];
  return (
    <section className="text-[#2e424d]">
      <div className="relative">
        <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {korbani.map((data, id) => (
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

export default Korbani;
