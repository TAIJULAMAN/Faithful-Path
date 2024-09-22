import PrayerTimes from "./PrayerTimes/PrayerTimes";

function HomePage() {
  return (
    <div className="text-[#2e2e2e]">
     
      {/* Today's Quranic Inspiration */}
      {/* <section className="py-16 bg-[#f0c419] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Today is Quranic Inspiration
        </h2>
        <p className="text-2xl italic mb-4">
          Indeed, this Quran guides to that which is most suitable...
        </p>
        <p className="text-lg">Surah Al-Isra, 17:9</p>
        <button className="mt-8 bg-white text-[#2c7a7b] py-2 px-6 rounded hover:bg-gray-100 transition">
          Play Recitation
        </button>
      </section> */}
     

      {/* Prayer Times Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prayer Times for Your Location
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#f8f3e6] p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Fajr</h3>
              <p>5:00 AM</p>
            </div>
            <div className="bg-[#f8f3e6] p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Dhuhr</h3>
              <p>12:30 PM</p>
            </div>
            <div className="bg-[#f8f3e6] p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Asr</h3>
              <p>3:45 PM</p>
            </div>
            <div className="bg-[#f8f3e6] p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Maghrib</h3>
              <p>6:00 PM</p>
            </div>
            <div className="bg-[#f8f3e6] p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Isha</h3>
              <p>7:30 PM</p>
            </div>
            <div className="bg-[#f8f3e6] p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Jumuah</h3>
              <p>1:00 PM</p>
            </div>
          </div>
        </div>
      </section> */}
      <PrayerTimes/>

      {/* Articles Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Recent Islamic Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Understanding Salah</h3>
              <p>Learn the significance of Salah in a Muslims life.</p>
              <a href="#" className="text-[#2c7a7b] mt-4 inline-block">
                Read More
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">
                The Importance of Ramadan
              </h3>
              <p>Discover the spiritual benefits of fasting during Ramadan.</p>
              <a href="#" className="text-[#2c7a7b] mt-4 inline-block">
                Read More
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">
                Zakat: Giving in Islam
              </h3>
              <p>Explore the impact of Zakat on both the giver and receiver.</p>
              <a href="#" className="text-[#2c7a7b] mt-4 inline-block">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
