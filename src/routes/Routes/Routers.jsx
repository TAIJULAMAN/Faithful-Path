import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home";
import Dua from "../../pages/Dua/Dua";
import Quran from "../../pages/Quran/Quran";
import Hadith from "../../pages/Hadith/Hadith";
import Namaz from "../../pages/Namaz/Namaz";
import Sunnah from "../../pages/Sunnah/Sunnah";
import Roja from "../../pages/Roja/Roja";
import Blog from "../../pages/Blog/Blog";
import Imaniat from "../../components/Dua/Imaniat/Imaniat";
import BeforeDeath from "../../components/Dua/BeforeDeath/BeforeDeath";
import Food from "../../components/Dua/Food/Food";
import Pak from "../../components/Dua/Pak/Pak";
import Sleep from "../../components/Dua/Sleep/Sleep";
import Tour from "../../components/Dua/Tour/Tour";
import Society from "../../components/Dua/Society/Society";
import Parents from "../../components/Dua/Parents/Parents";
import Sajj from "../../components/Dua/Sajj/Sajj";
import Healthy from "../../components/Dua/Healthy/Healthy";
import Bipod from "../../components/Dua/Bipod/Bipod";
import Voy from "../../components/Dua/Voy/Voy";
import Storm from "../../components/Dua/Storm/Storm";
import Durud from "../../components/Dua/Durud/Durud";
import Istigfar from "../../components/Dua/Istigfar/Istigfar";
import Rabbana from "../../components/Dua/Rabbana/Rabbana";
import AllahHumma from "../../components/Dua/AllahHumma/AllahHumma";
import Azan from "../../components/Dua/Azan/Azan";
import Ozu from "../../components/Dua/Ozu/Ozu";
import Mosjid from "../../components/Dua/Mosjid/Mosjid";
import InNamaz from "../../components/Dua/InNamaz/InNamaz";
import OutNamaz from "../../components/Dua/OutNamaz/OutNamaz";
import Ramadan from "../../components/Dua/Ramadan/Ramadan";
import Hajj from "../../components/Dua/Hajj/Hajj";
import Eid from "../../components/Dua/Eid/Eid";
import Loan from "../../components/Dua/Loan/Loan";
import Basa from "../../components/Dua/Home/Home";
import PakPobitrota from "../../components/Namaz/PakPobitrota/PakPobitrota";
import Time from "../../components/Namaz/Time/Time";
import Fazael from "../../components/Namaz/Fazael/Fazael";
import NamajVongerKaron from "../../components/Namaz/NamajVongerKaron/NamajVongerKaron";
import MohiladerNamaj from "../../components/Namaz/MohiladerNamaj/MohiladerNamaj";
import NamazerForoz from "../../components/Namaz/NamazerForoz/NamazerForoz";
import PuruserNamaj from "../../components/Namaz/PuruserNamaj/PuruserNamaj";
import RojaFazael from "../../components/Roja/RojaFazael/RojaFazael";
import Tarabih from "../../components/Roja/Tarabih/Tarabih";
import Sahri from "../../components/Roja/Sahri/Sahri";
import RojarNiyat from "../../components/Roja/RojarNiyat/RojarNiyat";
import Iftar from "../../components/Roja/Iftar/Iftar";
import RojaVangarKaron from "../../components/Roja/RojaVangarKaron/RojaVangarKaron";
import RojaNaVangarKaron from "../../components/Roja/RojaNaVangarKaron/RojaNaVangarKaron";
import Donation from "../../pages/Donation/Donation";
import Terms from "../../UnUsed/Terms/Terms";
import QuranDetails from "../../pages/Quran/QuranDetails";
import Snamaz from "../../components/Sunnah/Namaz/Namaz";
import MosjideProvesh from "../../components/Sunnah/Mosjid/MosjideProvesh/MosjideProvesh";
import MosjidThekeBer from "../../components/Sunnah/Mosjid/MosjidThekeBer/MosjidThekeBer";
import Toilet from "../../components/Sunnah/Toilet/Toilet";
import Ozus from "../../components/Sunnah/Ozu/Ozu";
import Gosol from "../../components/Sunnah/Gosol/Gosol";
import Sleeps from "../../components/Sunnah/Sleep/Sleep";
import Tayammum from "../../components/Sunnah/Tayammum/Tayammum";
import AfterSleeps from "../../components/Sunnah/AfterSleep/AfterSleep";
import Foods from "../../components/Sunnah/Food/Food";
import Drink from "../../components/Sunnah/Drink/Drink";
import Ramadans from "../../components/Sunnah/Ramadan/Ramadan";
import Sehri from "../../components/Sunnah/Sehri/Sehri";
import Iftars from "../../components/Sunnah/Iftar/Iftar";
import Rojas from "../../components/Sunnah/Roja/Roja";
import Eids from "../../components/Sunnah/Eid/Eid";
import Korbani from "../../components/Sunnah/Korbani/Korbani";
import Dress from "../../components/Sunnah/Dress/Dress";
import Tours from "../../components/Sunnah/Tour/Tour";
import Marry from "../../components/Sunnah/Marry/Marry";
import Jumma from "../../components/Sunnah/Jumma/Jumma";
import Homes from "../../components/Sunnah/Home/Home";
import Hair from "../../components/Sunnah/Hair/Hair";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dua",
        element: <Dua />,
      },
      {
        path: "/quran",
        element: <Quran />,
      },
      {
        path: "/hadith",
        element: <Hadith />,
      },
      {
        path: "/namaz",
        element: <Namaz />,
      },
      {
        path: "/sunnah",
        element: <Sunnah />,
      },
      {
        path: "/roja",
        element: <Roja />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/imaniat",
        element: <Imaniat />,
      },
      {
        path: "/before",
        element: <BeforeDeath />,
      },
      {
        path: "/basa",
        element: <Basa />,
      },
      {
        path: "/food",
        element: <Food />,
      },
      {
        path: "/pak",
        element: <Pak />,
      },
      {
        path: "/sleep",
        element: <Sleep />,
      },
      {
        path: "/tour",
        element: <Tour />,
      },
      {
        path: "/parent",
        element: <Parents />,
      },
      {
        path: "/society",
        element: <Society />,
      },
      {
        path: "/sajj",
        element: <Sajj />,
      },
      {
        path: "/healthy",
        element: <Healthy />,
      },
      {
        path: "/bipod",
        element: <Bipod />,
      },
      {
        path: "/voy",
        element: <Voy />,
      },
      {
        path: "/storm",
        element: <Storm />,
      },
      {
        path: "/durud",
        element: <Durud />,
      },
      {
        path: "/istigfar",
        element: <Istigfar />,
      },
      {
        path: "/rabbana",
        element: <Rabbana />,
      },
      {
        path: "/allah",
        element: <AllahHumma />,
      },
      {
        path: "/azan",
        element: <Azan />,
      },
      {
        path: "/ozu",
        element: <Ozu />,
      },
      {
        path: "/mosjid",
        element: <Mosjid />,
      },
      {
        path: "/inamaz",
        element: <InNamaz />,
      },
      {
        path: "/onamaz",
        element: <OutNamaz />,
      },
      {
        path: "/ramadan",
        element: <Ramadan />,
      },
      {
        path: "/hajj",
        element: <Hajj />,
      },
      {
        path: "/eid",
        element: <Eid />,
      },
      {
        path: "/loan",
        element: <Loan />,
      },
      {
        path: "/pakPobitrota",
        element: <PakPobitrota />,
      },
      {
        path: "/time",
        element: <Time />,
      },
      {
        path: "/fazael",
        element: <Fazael />,
      },
      {
        path: "/namajVongerKaron",
        element: <NamajVongerKaron />,
      },
      {
        path: "/mohiladerNamaj",
        element: <MohiladerNamaj />,
      },
      {
        path: "/puruserNamaj",
        element: <PuruserNamaj />,
      },
      {
        path: "/namazerForoz",
        element: <NamazerForoz />,
      },
      {
        path: "/RojaFazael",
        element: <RojaFazael />,
      },
      {
        path: "/Tarabih",
        element: <Tarabih />,
      },
      {
        path: "/Sahri",
        element: <Sahri />,
      },
      {
        path: "/RojarNiyat",
        element: <RojarNiyat />,
      },
      {
        path: "/Iftar",
        element: <Iftar />,
      },
      {
        path: "/RojaVangarKaron",
        element: <RojaVangarKaron />,
      },
      {
        path: "/RojaNaVangarKaron",
        element: <RojaNaVangarKaron />,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "quran/:surah",
        element: <QuranDetails/>
      },
      {
        path: "/snamaz",
        element: <Snamaz/>
      },
      {
        path: "/mosjideProvesh",
        element: <MosjideProvesh/>
      },
      {
        path: "/mosjidThekeBer",
        element: <MosjidThekeBer/>
      },
      {
        path: "/stoilet",
        element: <Toilet/>
      },
      {
        path: "/sozu",
        element: <Ozus/>
      },
      {
        path: "/sgosol",
        element: <Gosol/>
      },
      {
        path: "/sleeps",
        element: <Sleeps/>
      },
      {
        path: "/taiammums",
        element: <Tayammum/>
      },
      {
        path: "/asleep",
        element: <AfterSleeps/>
      },
      {
        path: "/sfood",
        element: <Foods/>
      },
      {
        path: "/sdrink",
        element: <Drink/>
      },
      {
        path: "/sram",
        element: <Ramadans/>
      },
      {
        path: "/ssehri",
        element: <Sehri/>
      },
      {
        path: "/siftar",
        element: <Iftars/>
      },
      {
        path: "/sroja",
        element: <Rojas/>
      },
      {
        path: "/seid",
        element: <Eids/>
      },
      {
        path: "/skor",
        element: <Korbani/>
      },
      {
        path: "/sdes",
        element: <Dress/>
      },
      {
        path: "/str",
        element: <Tours/>
      },
      {
        path: "/smr",
        element: <Marry/>
      },
      {
        path: "/sjm",
        element: <Jumma/>
      },
      {
        path: "/shm",
        element: <Homes/>
      },
      {
        path: "/hairs",
        element: <Hair/>
      },
    ],
  },
]);
