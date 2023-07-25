import React from "react";

import ReactDOM from "react-dom/client";

export default function Memeheader() {
  return (
    <>
      <div className="header-container">
        


        <div className="trollfacepicturecontainer"><img className="trollfacepicture" src={require("./images/Troll-Face-Meme-PNG.webp")} /></div>
        
        
        <div className="MemegeneratorLogo"><p>Memegenerator</p></div>
        <div className="Random-header-link"><p>Random-links</p></div>
      </div>
    </>
  );
}
