import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Resources from "../../components/Resources/Resources";
import PrayerTimes from "../../components/PrayerTimes/PrayerTimes";
import QuranicInspiration from "../../components/QuranicInspiration/QuranicInspiration";

function Home() {
  return (
    <div className="bg-[#f8ebd5]  px-[20px] md:px-[100px]">
      <Helmet>
        <title>Faithful Path | Home</title>
      </Helmet>
      <div>
        <Banner />
        <Resources />
        <PrayerTimes />
        <QuranicInspiration/>
      </div>
    </div>
  );
}

export default Home;
