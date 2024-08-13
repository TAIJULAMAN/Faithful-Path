import surahInfo from "../../../public/Quran/surahInfo.json";
import { Link } from "react-router-dom";

// {
//   "id": 1,
//   "number": "১",
//   "name": "আল-ফাতিহা",
//   "means": "সূচনা",
//   "arabic": "سُورَةُ ٱلْفَاتِحَةِ",
//   "url": "Al-Fatihah",
//   "english": "Al-Fatihah",
//   "verse_num_en": 7,
//   "verse_num_bn": "৭"
// },

function Quran() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  font-bold mx-auto gap-5 p-5 bg-[#F7F3DE] text-[#2e424d] px-24">
      {surahInfo.map((item) => {
        return (
          <div key={item.id}>
            <Link to={item.url}>
              <div
                style={{ backgroundColor: item.color || "#D7EAF8" }}
                className="flex justify-center text-center items-center rounded-md h-36"
              >
                <p className="text-3xl  hover:scale-125">{item.name}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Quran;