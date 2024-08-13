import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


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



function QuranDetails() {
  const [surah, setSurah] = useState([]);
  const router = useLocation();
  const pathName = router?.pathname;
  const surahName = pathName.split("/").pop();

  useEffect(() => {
    const jsonPath = `../../public/Quran/surah/${surahName}.json`;
    fetch(jsonPath)
      .then((response) => response.json())
      .then((data) => setSurah(data));
  }, [surahName]);

  return (
    <div>
      {surah.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.verse}</p>
            <p>{item.bangla_text}</p>
            <p>{item.arabic_text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default QuranDetails;
