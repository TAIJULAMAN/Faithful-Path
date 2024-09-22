import { useState, useEffect } from "react";

const inspirations = [
  {
    text: "আজকের কুরআনিক অনুপ্রেরণা",
    verse: "অবশ্যই, এই কুরআন সবচেয়ে উপযুক্ত পথে পরিচালিত করে...",
    reference: "সূরা আল-ইসরা, 17:9",
  },
  {
    text: "দৈনন্দিন জীবনকে সাজানোর জন্য কুরআন",
    verse: "এবং এই কুরআন আল্লাহর নির্দেশনার মাধ্যমে...",
    reference: "সূরা আল-নাহল, 16:9",
  },
  {
    text: "আল্লাহর পথে চলা",
    verse: "সেই পথের দিকে পরিচালিত করে, যিনি নিজের জন্য নির্বাচন করেছেন...",
    reference: "সূরা আল-নাহল, 16:125",
  },
  {
    text: "কুরআনের শান্তি",
    verse: "এবং আমি আপনাদের মধ্যে শান্তি প্রেরণ করেছি...",
    reference: "সূরা আল-বাকারা, 2:261",
  },
  {
    text: "আল্লাহর দয়ার ওপর নির্ভর করুন",
    verse: "আল্লাহর দয়া সবকিছুর ওপর প্রাধান্য পায়...",
    reference: "সূরা আল-জুমু'আ, 62:10",
  },
  {
    text: "সত্যের পথে অটল থাকা",
    verse: "নিশ্চয়ই, সত্য সব সময় বিজয়ী...",
    reference: "সূরা আল-হজ্জ, 22:30",
  },
  {
    text: "অন্যদের সাহায্য করা",
    verse: "এবং তাদের মধ্যে যারা গরিবদের সাহায্য করেন...",
    reference: "সূরা আল-ইসরা, 17:70",
  },
  {
    text: "আপনার কর্মের প্রতি সতর্কতা",
    verse: "এবং নিশ্চয়ই, আপনার কর্মের ফল পাবেন...",
    reference: "সূরা আল-জুমু'আ, 62:5",
  },
  {
    text: "আধ্যাত্মিক উজ্জীবন",
    verse: "কুরআন হলো আল্লাহর প্রেরিত নূর...",
    reference: "সূরা আল-আনআম, 6:91",
  },
  {
    text: "প্রার্থনা ও ধৈর্য",
    verse: "নিশ্চয়ই, আল্লাহ ধৈর্যশীলদের সাথে আছেন...",
    reference: "সূরা আল-বাসরাহ, 2:153",
  },
  {
    text: "আল্লাহর কাছে মাফ প্রার্থনা",
    verse: "মাফ করুন, তিনি ক্ষমাশীল...",
    reference: "সূরা আল-মুঝাদিলা, 58:12",
  },
  {
    text: "শান্তি এবং সমর্থন",
    verse: "যারা আল্লাহর পথে চলে, তাদের জন্য রয়েছে শান্তি...",
    reference: "সূরা আল-বাকারা, 2:208",
  },
  {
    text: "সত্যবাদিতা",
    verse: "সত্য সর্বদা মুক্তির পথ দেখায়...",
    reference: "সূরা আল-হুজরাত, 49:15",
  },
  {
    text: "সন্তোষে থাকুন",
    verse: "আল্লাহ যাদেরকে সন্তুষ্ট রাখে, তাদের জন্য শান্তি...",
    reference: "সূরা আল-ইনশিরাহ, 94:5-6",
  },
  {
    text: "আল্লাহর শক্তি",
    verse: "তিনি সবকিছু পরিচালনা করেন...",
    reference: "সূরা আল-ফাতির, 35:41",
  },
  {
    text: "আত্ম-উন্নতি",
    verse: "যারা নিজেদের উন্নতির জন্য চেষ্টা করে...",
    reference: "সূরা আল-আনফাল, 8:28",
  },
  {
    text: "কুরআনের গুরুত্ব",
    verse: "এটি মানুষের জন্য পথনির্দেশক...",
    reference: "সূরা আল-আনকাবুত, 29:69",
  },
  {
    text: "আল্লাহর রহমত",
    verse: "আল্লাহর রহমত সর্বত্র বিস্তৃত...",
    reference: "সূরা আল-আফাল, 8:53",
  },
  {
    text: "আত্মবিশ্বাস",
    verse: "নিশ্চয়ই, আল্লাহ তাদের সাথে যারা আত্মবিশ্বাসী...",
    reference: "সূরা আল-তাওবা, 9:51",
  },
  {
    text: "ধৈর্য ও সংকল্প",
    verse: "যাদের ধৈর্য রয়েছে, তারা অবশ্যই সফল হবে...",
    reference: "সূরা আল-আলাক, 96:6",
  },
  {
    text: "আল্লাহর নির্দেশনা",
    verse: "কুরআন হলো সঠিক পথের নির্দেশক...",
    reference: "সূরা আল-বরকাহ, 2:2",
  },
  {
    text: "মনের শান্তি",
    verse: "সত্যিকারের শান্তি আল্লাহর স্মরণে পাওয়া যায়...",
    reference: "সূরা আল-রাদ, 13:28",
  },
  {
    text: "অনুগ্রহের স্বরূপ",
    verse: "আল্লাহ আপনাদের ওপর বিশেষ অনুগ্রহ করেছেন...",
    reference: "সূরা আল-ফারাক, 25:70",
  },
  {
    text: "নেক কাজের ফল",
    verse: "নেক কাজের প্রতিফলন দুনিয়া ও আখিরাতে...",
    reference: "সূরা আল-ইসরা, 17:19",
  },
  {
    text: "আল্লাহর পথ",
    verse: "যারা আল্লাহর পথে পরিচালিত হয়, তাদের জন্য রয়েছে বরকত...",
    reference: "সূরা আল-আনফাল, 8:53",
  },
  {
    text: "সৎকর্মের জন্য উৎসাহ",
    verse: "সৎকর্মে সাহায্য করা মহান কাজ...",
    reference: "সূরা আল-শুরা, 42:38",
  },
  {
    text: "বিশ্বাস ও কৃতজ্ঞতা",
    verse: "আল্লাহর প্রতি বিশ্বাসী এবং কৃতজ্ঞ থাকুন...",
    reference: "সূরা আল-বাকারাহ, 2:152",
  },
  {
    text: "প্রেম ও সম্প্রীতি",
    verse: "নিশ্চয়ই, আল্লাহ প্রেমিকদের সাথেই রয়েছেন...",
    reference: "সূরা আল-হুজরাত, 49:10",
  },
  {
    text: "ভালোবাসার সম্পর্ক",
    verse: "একেঅন্যকে ভালোবাসার জন্য সৃষ্টি করা হয়েছে...",
    reference: "সূরা আল-নিসা, 4:1",
  },
  {
    text: "কুরআন ও দোয়া",
    verse: "কুরআন পড়া ও দোয়া আল্লাহর নিকটবর্তী করে...",
    reference: "সূরা আল-আনকাবুত, 29:69",
  },
  {
    text: "আত্ম-শুদ্ধি",
    verse: "যে আত্মশুদ্ধি করে, সে সফল...",
    reference: "সূরা আল-শামস, 91:9",
  },
  {
    text: "নবীর আদর্শ",
    verse: "নবীজি আমাদের জন্য আদর্শ ও শিক্ষা...",
    reference: "সূরা আল-আহজাব, 33:21",
  },
  {
    text: "সততা ও আদর্শ জীবন",
    verse: "আল্লাহ সৎ এবং আদর্শ জীবন যাপন করতে বলেন...",
    reference: "সূরা আল-ফুরকান, 25:67",
  },
];

function QuranicInspiration() {
  const [currentInspiration, setCurrentInspiration] = useState(inspirations[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % inspirations.length);
    }, 3000); // Change inspiration every 5 minutes (300000 ms)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentInspiration(inspirations[index]);
  }, [index]);

  return (
    <section className="py-16 bg-white text-gray-700 text-center shadow-lg transition-shadow hover:shadow-xl rounded-lg">
      <h2 className="text-3xl font-bold mb-6 transition-transform transform hover:scale-105">
        {currentInspiration.text}
      </h2>
      <p className="text-2xl italic mb-4 transition-transform transform hover:scale-105">
        {currentInspiration.verse}
      </p>
      <p className="text-lg transition-transform transform hover:scale-105">
        {currentInspiration.reference}
      </p>
    </section>
  );
}

export default QuranicInspiration;
