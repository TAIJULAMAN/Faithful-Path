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
        path: "/home",
        element: <Home />,
      },
      {
        path: "/food",
        element: <Food/>,
      },
      {
        path: "/pak",
        element: <Pak/>,
      },
      
     
    ],
  },
]);
 // {
      //     path: "/order/:category",
      //     // element:<OrderPage></OrderPage>
      //     element:<DuaDetails></DuaDetails>
      // },