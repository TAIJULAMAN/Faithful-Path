import { useState, useEffect } from "react";
import axios from "axios";

function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await axios.get(
          "/api/dhaka/daily.json?key=62cff7311254cac957c703ba1bf1838f"
        );
        console.log("namaj time of Dhaka", response.data);
        setPrayerTimes(response.data.items[0]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPrayerTimes();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-500">নামাজের সময় লোড হচ্ছে...</p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500">
        নামাজের সময় লোড করতে সমস্যা হয়েছে: {error}
      </p>
    );
  }

  if (!prayerTimes) {
    return (
      <p className="text-center text-gray-500">
        নামাজের সময় পাওয়া যাচ্ছে না।
      </p>
    );
  }

  const filteredPrayerTimes = Object.entries(prayerTimes).filter(
    ([key]) => key !== "shurooq" && key !== "date_for"
  );

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">
          ঢাকার নামাজের সময়সূচী
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {filteredPrayerTimes.map(([key, value]) => (
            <div
              key={key}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="p-6">
                <h3 className="text-3xl font-semibold mb-4 capitalize text-indigo-600">
                  {translatePrayerTimeKey(key)}
                </h3>
                <p className="text-xl font-medium text-gray-700">
                  {translateTimeToBengali(value)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const translatePrayerTimeKey = (key) => {
  const translations = {
    fajr: "ফজর",
    dhuhr: "জোহর",
    asr: "আসর",
    maghrib: "মাগরিব",
    isha: "ইশা",
  };
  return translations[key] || key;
};

const translateTimeToBengali = (time) => {
  const bengaliNumbers = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };

  return time.replace(/\d/g, (digit) => bengaliNumbers[digit]);
};

export default PrayerTimes;
