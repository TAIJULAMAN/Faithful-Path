import React from "react";

function Iftar() {
  const iftar = [
    {
      id: 1,
      desc: "খেজুর দ্বারা ইফতার করা সুন্নত। খেজুর না পেলে পানি দ্বারা ইফতারের সুচনা করবে।",
    },
    {
      id: 2,
      desc: "সূর্যাস্তের সাথে সাথে ইফতার করা উত্তম।",
    },
  ];
  return (
    <section className="text-[#2e424d]">
      <div className="relative">
        <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {iftar.map((data, id) => (
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

export default Iftar;
