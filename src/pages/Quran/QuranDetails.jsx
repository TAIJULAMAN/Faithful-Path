import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function QuranDetails() {
  const [surah, setSurah] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useLocation();
  const pathName = router?.pathname;
  const surahName = pathName.split("/").pop();

  // useEffect(() => {
  //   const fetchSurahData = async () => {
  //     try {
  //       // const jsonPath = `../../public/Quran/surah/${surahName}.json`;
  //       const jsonPath = `${process.env.PUBLIC_URL}/Quran/surah/${surahName}.json`;
  //       const response = await fetch(jsonPath);
  //       console.log(response)
  //       if (!response.ok) {
  //         throw new Error("Surah not found");
  //       }
  //       const data = await response.json();
  //       setSurah(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchSurahData();
  // }, [surahName]);
  useEffect(() => {
    const fetchSurahData = async () => {
      try {
        // eslint-disable-next-line no-undef
        const jsonPath = "../../public/Quran/surah/Abasa.json";
        const response = await fetch(jsonPath);
        if (!response.ok) {
          throw new Error("Surah not found");
        }
        const data = await response.json();
        setSurah(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSurahData();
  }, [surahName]);

  if (loading) {
    return (
      <div className="text-center py-10 text-lg text-gray-500">
        Loading Surah...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500 text-xl">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-[#f8ebd5] min-h-screen py-12 px-4 lg:px-28 text-[#2e424d]">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-[#2e424d] mb-6 transition-all duration-300 ease-in-out">
          ﷽
        </h1>
        <p className="text-2xl text-gray-600">
          {surahName} - বাংলা অনুবাদ ও তাফসীর
        </p>
      </div>

      {/* Surah Content */}
      {surah.length === 0 ? (
        <p className="text-center text-xl text-gray-600">
          No content available.
        </p>
      ) : (
        <div className="space-y-12">
          {surah.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-6 space-y-4 transition-all duration-300 hover:shadow-lg"
            >
              <p className="text-left text-xl leading-relaxed italic text-[#4a4a4a]">
                {item.verse}
              </p>
              <p className="text-right text-4xl font-bold tracking-wide text-[#1a1a1a]">
                {item.arabic_text}
              </p>
              <p className="text-left text-3xl text-gray-800">
                {item.bangla_text}
              </p>
              <div className="border-b-[1px] border-gray-300"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuranDetails;
