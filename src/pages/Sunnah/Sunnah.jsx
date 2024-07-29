import React from "react";
import Namaz from "./Namaz/Namaz";
import MosjideProvesh from "./Mosjid/MosjideProvesh/MosjideProvesh";
import MosjidThekeBer from "./Mosjid/MosjidThekeBer/MosjidThekeBer";
import Toilet from "./Toilet/Toilet";
import Ozu from "./Ozu/Ozu";
import Gosol from "./Gosol/Gosol";
import Tayammum from "./Tayammum/Tayammum";
import Sleep from "./Sleep/Sleep";
import Food from "./Food/Food";
import AfterSleep from "./AfterSleep/AfterSleep";
import Drink from "./Drink/Drink";
import Ramadan from "./Ramadan/Ramadan";

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
    </div>
  );
}

export default Sunnah;
