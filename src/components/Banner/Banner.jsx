function Banner() {
  return (
    <section
      className="relative bg-cover bg-center py-10 md:py-20 h-[500px]"
      style={{ backgroundImage: `url('/1.png')` }}
    >
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="relative mx-auto text-center text-white">
        <h1 className="text-xl md:text-5xl font-bold mb-5 md:pt-10">
          বিশ্বস্ত পথে আপনাকে স্বাগত জানাই
        </h1>
        <p className=" px-5 md:px-[100px] text-base md:text-xl mb-5 md:mb-10">
          আমাদের ওয়েবসাইটে আপনাকে আন্তরিকভাবে স্বাগতম। ইসলামিক জ্ঞান, প্রার্থনার
          সময়সূচি, এবং কুরআন ও হাদিসের বিশদ ব্যাখ্যা নিয়ে আমরা আপনাদের সামনে
          হাজির হয়েছি। আমাদের লক্ষ্য হলো সত্যের পথে আলোকিত হওয়া এবং সেই জ্ঞানকে
          সবার মাঝে ছড়িয়ে দেওয়া। এখানে আপনি পাবেন পবিত্র কুরআন, বিশুদ্ধ হাদিসের
          সংগ্রহ, এবং ইসলামের বিভিন্ন গুরুত্বপূর্ণ বিষয়ের উপর নিবন্ধ। আমাদের
          সঙ্গে থেকে আপনার জীবনকে আরো পরিশুদ্ধ ও সুন্দর করে তুলুন।
        </p>
        <div className="space-x-4">
          <a
            href="#"
            className="bg-[#f0c419] text-white py-2 px-6 rounded hover:bg-yellow-600 transition"
          >
            কুরআন পড়ুন
          </a>
          <a
            href="#"
            className="bg-[#f0c419] text-white py-2 px-6 rounded hover:bg-gray-100 transition"
          >
            নামাজের সময়
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
