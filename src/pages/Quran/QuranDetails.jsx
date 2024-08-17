import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
    <div className="px-[100px] text-center bg-[#f8ebd5] py-10 text-[#2e424d] space-y-10">
      <h1 className="text-5xl  py-10"> ﷽</h1>
      {surah.map((item) => {
        return (
          <div key={item.id}>
            <p className="text-left text-2xl pb-5">{item.verse}</p>
            <p className="text-right text-4xl pb-5">{item.arabic_text}</p>
            <p className="text-left text-3xl">{item.bangla_text}</p>
            <div className="border-b-[1px] border-[#e49733] mt-10"></div>
          </div>
        );
      })}
    </div>
  );
}

export default QuranDetails;
