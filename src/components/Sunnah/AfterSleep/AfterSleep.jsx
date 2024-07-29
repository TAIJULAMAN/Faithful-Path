import React from "react";

function AfterSleep() {
  const AfterSleep = [
    {
      id: 1,
      desc: "ঘুম থেকে উঠেই উভয় হাত দ্বারা মুখমন্ডল এবং চক্ষুদ্বয়কে হালকাভাবে মর্দন করা, যাতে ঘুমের ভাব দূর হয়ে যায়।",
    },
    {
      id: 2,
      desc: "ঘুম থেকে ওঠার পর এই দোয়া পড়া: الحمد لله الذي احيانا بعد ما اماتنا واليه النشور",
    },
    {
      id: 3,
      desc: " যখনই ঘুম হতে উঠা হয় তখনই মিসওয়াক করা, অজু করার সময় ওযুর সুন্নত হিসেবে মিসওয়াক করা।",
    },
    {
      id: 4,
      desc: "ঘুম থেকে উঠার পর উভয় হাত ভালোভাবে ধৌত করা।",
    },
  ];
  return (
    <section className="text-[#2e424d]">
      <div className="relative">
        <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {AfterSleep.map((data, id) => (
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

export default AfterSleep;
