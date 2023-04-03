import React from "react";
import SiteHeader from "../SiteHeader";

export default function Layout({ children }) {
  return (
    <div className="App">
      <SiteHeader />

      <div className="main">
        <div className="container">{children}</div>
      </div>

      <div className="footer">&copy;2022 Learn with Sumit</div>
    </div>
  );
}
