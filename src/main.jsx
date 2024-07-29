import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes/Routers";

import { HelmetProvider } from "react-helmet-async";
// import Authproviders from "./Components/Providers/Authproviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Authproviders> */}
      <HelmetProvider>
          <RouterProvider router={router} />
      </HelmetProvider>
    {/* </Authproviders> */}
  </React.StrictMode>
);
