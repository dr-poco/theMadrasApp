import React from "react";
import MuseumSharp from "@material-ui/icons/MuseumSharp";

function Header() {
  return (
    <header>
      <h1>
        <MuseumSharp className="museum"/>
        The Madras App
      </h1>
    </header>
  );
}

export default Header;
