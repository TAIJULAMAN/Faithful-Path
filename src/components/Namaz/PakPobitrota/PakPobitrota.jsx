import React from "react";
import Ozu from "./Ozu/Ozu";
import Gosol from "./Gosol/Gosol";
import Tayammum from "./Tayammum/Tayammum";
import Istinja from "./Istinja/Istinja";

function PakPobitrota() {
  return (
    <>
      <div>
        <h1 className="text-2xl text-center mb-5 font-bold">উযু</h1>
        <Ozu />
      </div>
      <div>
        <h1 className="text-2xl text-center mb-5 font-bold">গোসল</h1>
        <Gosol />
      </div>
      <div>
        <h1 className="text-2xl text-center mb-5 font-bold">তায়াম্মুম</h1>
        <Tayammum />
      </div>
      <div>
        <h1 className="text-2xl text-center mb-5 font-bold">ইস্তিঞ্জার আদব</h1>
        <Istinja />
      </div>
    </>
  );
}

export default PakPobitrota;
