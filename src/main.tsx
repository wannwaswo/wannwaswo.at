import React from "react";
import ReactDOM from "react-dom/client";
import HomeSite from "./components/sites/HomeSite";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HomeSite />
  </React.StrictMode>
);
