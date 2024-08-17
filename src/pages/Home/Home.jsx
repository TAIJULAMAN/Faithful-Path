import React from "react";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div className="bg-[#f8ebd5]">
      <Helmet>
        <title>Faithful Path | Home</title>
      </Helmet>
      <div>
        <h1>Home sweet home</h1>
      </div>
    </div>
  );
}

export default Home;
