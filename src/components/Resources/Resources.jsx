function Resources() {
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-[#2c3e50]">
          আমাদের সম্পদসমূহ অন্বেষণ করুন
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <a
            href="/quran"
            className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              className="bg-cover bg-center h-48"
              style={{ backgroundImage: `url('/quran.jpg')` }}
            ></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-[#2c3e50]">কুরআন</h3>
              <p className="mb-4 text-gray-600">
                কুরআন শরীফ ও তার বাংলা অনুবাদ পড়ুন।
              </p>
              <button className="bg-[#f0c419] text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
                আরও পড়ুন
              </button>
            </div>
          </a>

          <a
            href="/hadith"
            className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              className="bg-cover bg-center h-48"
              style={{ backgroundImage: `url('/Hadiths.jpg')` }}
            ></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-[#2c3e50]">হাদীস</h3>
              <p className="mb-4 text-gray-600">
                বিশুদ্ধ হাদীসের বিস্তৃত সংগ্রহ পড়ুন।
              </p>
              <button className="bg-[#f0c419] text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
                আরও পড়ুন
              </button>
            </div>
          </a>

          <a
            href="/dua"
            className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              className="bg-cover bg-center h-48"
              style={{ backgroundImage: `url('/dua.jpg')` }}
            ></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-[#2c3e50]">দু'আ</h3>
              <p className="mb-4 text-gray-600">
                দৈনন্দিন জীবনের জন্য গুরুত্বপূর্ণ দু'আ।
              </p>
              <button className="bg-[#f0c419] text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
                আরও পড়ুন
              </button>
            </div>
          </a>

          <a
            href="/sunnah"
            className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              className="bg-cover bg-center h-48"
              style={{ backgroundImage: `url('/q.jpg')` }}
            ></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-[#2c3e50]">
                সুন্নাহ
              </h3>
              <p className="mb-4 text-gray-600">
                রাসূলের (সা.) সুন্নাহ ও তার অনুসরণ।
              </p>
              <button className="bg-[#f0c419] text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
                আরও পড়ুন
              </button>
            </div>
          </a>

          <a
            href="/prayer"
            className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              className="bg-cover bg-center h-48"
              style={{ backgroundImage: `url('/namaj.jpg')` }}
            ></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-[#2c3e50]">নামায</h3>
              <p className="mb-4 text-gray-600">
                নামাযের গুরুত্ব, নিয়ম ও সময়সূচী।
              </p>
              <button className="bg-[#f0c419] text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
                আরও পড়ুন
              </button>
            </div>
          </a>

          <a
            href="/roza"
            className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              className="bg-cover bg-center h-48"
              style={{ backgroundImage: `url('/roja.jpg')` }}
            ></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-[#2c3e50]">রোযা</h3>
              <p className="mb-4 text-gray-600">
                রোযার বিধান, উপকারিতা এবং নিয়মাবলী।
              </p>
              <button className="bg-[#f0c419] text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
                আরও পড়ুন
              </button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resources;
