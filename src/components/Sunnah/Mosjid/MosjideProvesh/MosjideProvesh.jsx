import React from "react";

function MosjideProvesh() {
  const MosjidSunnah = [
    {
      id: 1,
      desc: " বিসমিল্লাহ পড়া।",
    },
    {
      id: 2,
      desc: "দরুদ শরীফ পড়া।",
    },
    {
      id: 3,
      desc: "দোয়া পড়া।",
    },
    {
      id: 4,
      desc: "ডান পা দিয়ে প্রবেশ করা।",
    },
    {
      id: 5,
      desc: "এতেকাফের নিয়ত করা।",
    }
  ];
  return (
    <section className="text-[#2e424d]">
      <div className="relative">
        <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {MosjidSunnah.map((data, id) => (
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

export default MosjideProvesh;
