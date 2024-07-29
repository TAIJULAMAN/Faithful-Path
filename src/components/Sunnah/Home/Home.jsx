import React from "react";

function Home() {
  const home = [
    {
      id: 2,
      desc: "অন্যের ঘরে প্রবেশের সময় অনুমতি নেয়া, নিজের ঘরেও প্রবেশের পূর্বে আওয়াজ দিয়ে বা যে কোন উপায়ে অবগত করে প্রবেশ করা।",
    },
    {
      id: 3,
      desc: "অন্যের ঘরে প্রবেশের অনুমতির জন্য তিনবার সালাম দিবে, কোন উত্তর না পেলে ফিরে যাবে; প্রয়োজনে পরে আবার আসবে।",
    },
    {
      id: 4,
      desc: "ঘরের ভিতর পরিচয় জিজ্ঞেস করলে শুধু “আমি” না বলা বরং পূর্ণ নাম এবং পিতার নামসহ পরিচয় দেয়া।",
    },
    {
      id: 6,
      desc: "রাসূল (ﷺ) রাত্রি বেলায় (সকলে ঘুমিয়ে গেলে) আস্তে সালাম দিতেন ও আস্তে প্রবেশ করতেন যাতে কারো কষ্ট না হয়।",
    },
    {
      id: 5,
      desc: "বিসমিল্লাহ ও দোয়া পড়ে ডান পায়ে দিয়ে প্রবেশ করা।",
    },
    {
      id: 1,
      desc: "সালাম দেয়া।",
    },

    {
      id: 7,
      desc: "ঘরের দরজা বন্ধ করার সময় বিসমিল্লাহ বলা।",
    },
  ];
  return (
    <section className="text-[#2e424d]">
      <div className="relative">
        <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {home.map((data, id) => (
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

export default Home;
