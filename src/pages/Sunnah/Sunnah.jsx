import React from "react";

import Namaz from "../../components/Sunnah/Namaz/Namaz";
import MosjideProvesh from "../../components/Sunnah/Mosjid/MosjideProvesh/MosjideProvesh";
import MosjidThekeBer from "../../components/Sunnah/Mosjid/MosjidThekeBer/MosjidThekeBer";
import Toilet from "../../components/Sunnah/Toilet/Toilet";
import Ozu from "../../components/Sunnah/Ozu/Ozu";
import Gosol from "../../components/Sunnah/Gosol/Gosol";
import Tayammum from "../../components/Sunnah/Tayammum/Tayammum";
import Sleep from "../../components/Sunnah/Sleep/Sleep";
import Food from "../../components/Sunnah/Food/Food";
import AfterSleep from "../../components/Sunnah/AfterSleep/AfterSleep";
import Drink from "../../components/Sunnah/Drink/Drink";
import Ramadan from "../../components/Sunnah/Ramadan/Ramadan";
import Sehri from "../../components/Sunnah/Sehri/Sehri";
import Iftar from "../../components/Sunnah/Iftar/Iftar";
import Roja from "../../components/Sunnah/Roja/Roja";
import Eid from "../../components/Sunnah/Eid/Eid";
import Korbani from "../../components/Sunnah/Korbani/Korbani";
import Dress from "../../components/Sunnah/Dress/Dress";
import Tour from "../../components/Sunnah/Tour/Tour";
import Marry from "../../components/Sunnah/Marry/Marry";
import Jumma from "../../components/Sunnah/Jumma/Jumma";
import Hair from "../../components/Sunnah/Hair/Hair";
import Home from "../../components/Sunnah/Home/Home";

function Sunnah() {
  return (
    <div className="bg-[#e8e9f3] text-[#2e424d] px-[100px]">
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          নামাজ
        </h1>
        <Namaz />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          মসজিদে প্রবেশ করা
        </h1>
        <MosjideProvesh />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          মসজিদ থেকে বের হওয়া
        </h1>
        <MosjidThekeBer />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          টয়লেট / ইস্তিঞ্জা
        </h1>
        <Toilet />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          ওযু
        </h1>
        <Ozu />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          গোসল
        </h1>
        <Gosol />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          তায়াম্মুম
        </h1>
        <Tayammum />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          ঘুমানো
        </h1>
        <Sleep />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          ঘুম থেকে ওঠা
        </h1>
        <AfterSleep />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          খানা খাওয়া
        </h1>
        <Food />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          পান করা
        </h1>
        <Drink />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          রামাদান
        </h1>
        <Ramadan />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          সাহরি
        </h1>
        <Sehri />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          ইফতার
        </h1>
        <Iftar />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          রোযার আদব
        </h1>
        <Roja />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          ঈদের দিনের সুন্নত ও আদব
        </h1>
        <Eid />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          কুরবানী
        </h1>
        <Korbani />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          পোশাক
        </h1>
        <Dress />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          সফর
        </h1>
        <Tour />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          বিবাহ
        </h1>
        <Marry />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          জুম'আর দিন
        </h1>
        <Jumma />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          চুল-দাড়ি
        </h1>
        <Hair />
      </div>
      <div className="py-10">
        <h1 className="bg-[#98dad9] text-center py-5 my-5 rounded-md font-bold text-xl">
          ঘরে প্রবেশ
        </h1>
        <Home />
      </div>
    </div>
  );
}
export default Sunnah;
