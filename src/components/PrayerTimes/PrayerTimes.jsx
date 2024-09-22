// 62cff7311254cac957c703ba1bf1838f
import { useState, useEffect } from "react";

function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching prayer times directly from the API
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch(
          "https://muslimsalat.com/dhaka/daily.json?key=62cff7311254cac957c703ba1bf1838f"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch prayer times");
        }
        const data = await response.json();
        setPrayerTimes(data.items[0]); // Assuming the times are in items[0]
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  if (loading) {
    return <p>Loading prayer times...</p>;
  }

  if (error) {
    return <p>Error loading prayer times: {error}</p>;
  }

  if (!prayerTimes) {
    return <p>No prayer times available at the moment.</p>;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Prayer Times for Dhaka</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(prayerTimes).map(([key, value]) => (
            <div key={key} className="bg-[#f8f3e6] p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2 capitalize">{key}</h3>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrayerTimes;



// import { useState, useEffect } from "react";

// function PrayerTimes() {
//   const [prayerTimes, setPrayerTimes] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetching prayer times directly from the API
//     const fetchPrayerTimes = async () => {
//       try {
//         const response = await fetch(
//           "https://muslimsalat.com/dhaka/daily.json?key=62cff7311254cac957c703ba1bf1838f"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch prayer times");
//         }
//         const data = await response.json();
//         setPrayerTimes(data.items[0]); // Assuming the times are in items[0]
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchPrayerTimes();
//   }, []);

//   if (loading) {
//     return <p>Loading prayer times...</p>;
//   }

//   if (error) {
//     return <p>Error loading prayer times: {error}</p>;
//   }

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6">Prayer Times for Dhaka</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           <div className="bg-[#f8f3e6] p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-bold mb-2">Fajr</h3>
//             <p>{prayerTimes.fajr}</p>
//           </div>
//           <div className="bg-[#f8f3e6] p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-bold mb-2">Dhuhr</h3>
//             <p>{prayerTimes.dhuhr}</p>
//           </div>
//           <div className="bg-[#f8f3e6] p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-bold mb-2">Asr</h3>
//             <p>{prayerTimes.asr}</p>
//           </div>
//           <div className="bg-[#f8f3e6] p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-bold mb-2">Maghrib</h3>
//             <p>{prayerTimes.maghrib}</p>
//           </div>
//           <div className="bg-[#f8f3e6] p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-bold mb-2">Isha</h3>
//             <p>{prayerTimes.isha}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PrayerTimes;

// import { useState, useEffect } from "react";
// import { FaSun, FaMoon, FaCloudSun, FaCloud, FaPray } from "react-icons/fa"; // Importing icons for prayer times

// function PrayerTimes() {
//   // Simulating the current prayer based on time (you can customize the logic)
//   const [currentPrayer, setCurrentPrayer] = useState("");

//   useEffect(() => {
//     const currentHour = new Date().getHours();
//     if (currentHour >= 5 && currentHour < 12) {
//       setCurrentPrayer("Fajr");
//     } else if (currentHour >= 12 && currentHour < 15) {
//       setCurrentPrayer("Dhuhr");
//     } else if (currentHour >= 15 && currentHour < 18) {
//       setCurrentPrayer("Asr");
//     } else if (currentHour >= 18 && currentHour < 19) {
//       setCurrentPrayer("Maghrib");
//     } else {
//       setCurrentPrayer("Isha");
//     }
//   }, []);

//   return (
//     <section className="py-16 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-extrabold text-blue-800 mb-10">
//           Prayer Times for Your Location
//         </h2>
//         <div className="text-gray-600 mb-8">Location: Dhaka, Bangladesh</div> {/* Static location for demo */}

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           <div
//             className={`p-6 rounded-lg shadow-lg ${
//               currentPrayer === "Fajr" ? "bg-green-200 border-2 border-green-600" : "bg-white"
//             }`}
//           >
//             <div className="flex items-center justify-center">
//               <FaMoon className="text-2xl text-gray-600 mr-3" />
//               <h3 className="text-2xl font-bold mb-2">Fajr</h3>
//             </div>
//             <p className="text-lg">5:00 AM</p>
//           </div>

//           <div
//             className={`p-6 rounded-lg shadow-lg ${
//               currentPrayer === "Dhuhr" ? "bg-green-200 border-2 border-green-600" : "bg-white"
//             }`}
//           >
//             <div className="flex items-center justify-center">
//               <FaSun className="text-2xl text-yellow-600 mr-3" />
//               <h3 className="text-2xl font-bold mb-2">Dhuhr</h3>
//             </div>
//             <p className="text-lg">12:30 PM</p>
//           </div>

//           <div
//             className={`p-6 rounded-lg shadow-lg ${
//               currentPrayer === "Asr" ? "bg-green-200 border-2 border-green-600" : "bg-white"
//             }`}
//           >
//             <div className="flex items-center justify-center">
//               <FaCloudSun className="text-2xl text-orange-500 mr-3" />
//               <h3 className="text-2xl font-bold mb-2">Asr</h3>
//             </div>
//             <p className="text-lg">3:45 PM</p>
//           </div>

//           <div
//             className={`p-6 rounded-lg shadow-lg ${
//               currentPrayer === "Maghrib" ? "bg-green-200 border-2 border-green-600" : "bg-white"
//             }`}
//           >
//             <div className="flex items-center justify-center">
//               <FaCloud className="text-2xl text-gray-500 mr-3" />
//               <h3 className="text-2xl font-bold mb-2">Maghrib</h3>
//             </div>
//             <p className="text-lg">6:00 PM</p>
//           </div>

//           <div
//             className={`p-6 rounded-lg shadow-lg ${
//               currentPrayer === "Isha" ? "bg-green-200 border-2 border-green-600" : "bg-white"
//             }`}
//           >
//             <div className="flex items-center justify-center">
//               <FaMoon className="text-2xl text-gray-800 mr-3" />
//               <h3 className="text-2xl font-bold mb-2">Isha</h3>
//             </div>
//             <p className="text-lg">7:30 PM</p>
//           </div>

//           <div className="p-6 rounded-lg shadow-lg bg-white">
//             <div className="flex items-center justify-center">
//               <FaPray className="text-2xl text-blue-800 mr-3" />
//               <h3 className="text-2xl font-bold mb-2">Jumuah</h3>
//             </div>
//             <p className="text-lg">1:00 PM</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PrayerTimes;
