import { Helmet } from "react-helmet-async";
import HomePage from "../../components/HomePage";
import Banner from "../../components/Banner/Banner";
import Resources from "../../components/Resources/Resources";

function Home() {
  return (
    <div className="bg-[#f8ebd5]  px-[20px] md:px-[100px]">
      <Helmet>
        <title>Faithful Path | Home</title>
      </Helmet>
      <div className="">
       <Banner/>
       <Resources/>
        <HomePage/>
      </div>
    </div>
  );
}

export default Home;
