import React from "react";

function Drink() {
  const drink = [
    {
      id: 1,
      desc: "পানির পেয়ালা ডান হাত দিয়ে ধরা।",
    },
    {
      id: 2,
      desc: "বসে পান করা, বসতে অসুবিধা না হলে দাঁড়িয়ে পান না করা।",
    },
    {
      id: 3,
      desc: "বিসমিল্লাহ বলে পান করা এবং পান শেষে আলহামদুলিল্লাহ বলা।",
    },
    {
      id: 4,
      desc: " কমপক্ষে ৩ শ্বাসে পান করা। এবং শ্বাস ছাড়ার সময় পানির পাত্র মুখ হতে সরিয়ে নেওয়া।",
    },
    {
      id: 5,
      desc: "পাত্রের ভাঙ্গা দিক দিয়ে পান না করা।",
    },
    {
      id: 6,
      desc: "পাত্র যদি এমন হয় যার ভেতর নজর আসে না সেটার মুখে মুখ লাগিয়ে পান না করা। কারণ তাতে কোন বিষাক্ত প্রাণী ক্ষতিসাধন করতে পারে।",
    },
    {
      id: 7,
      desc: "পানীয় দ্রব্য পান করে কাউকে দিতে হলে ডানদিকের ব্যক্তিকে আগে দেওয়া এবং এই ধারাবাহিকতা অনুযায়ী শেষ করা।",
    },
    {
      id: 8,
      desc: "যে ব্যক্তি পান করাবে তার সর্বশেষ পান করা।",
    },
  ];
  return (
    <section className="text-[#2e424d]">
      <div className="relative">
        <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {drink.map((data, id) => (
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

export default Drink;
