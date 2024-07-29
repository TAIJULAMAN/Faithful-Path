import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home";
import Dua from "../../pages/Dua/Dua";
// import DuaDetails from "../../pages/Dua/DuaDetails";
import Quran from "../../pages/Quran/Quran";
import Hadith from "../../pages/Hadith/Hadith";
import Namaz from "../../pages/Namaz/Namaz";
import Sunnah from "../../pages/Sunnah/Sunnah";
import Roja from "../../pages/Roja/Roja";
import Blog from "../../pages/Blog/Blog";

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
        element: <Blog/>,
      },
      // {
      //     path: "/order/:category",
      //     // element:<OrderPage></OrderPage>
      //     element:<DuaDetails></DuaDetails>
      // },
    ],
  },
]);
