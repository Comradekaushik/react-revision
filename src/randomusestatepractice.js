import React from "react";

import "./App.css"

export default function SwitchYesorNO() {
  let [switchnow, setswitchnow] = React.useState("YES");

  function changeSwitch() {
    if (switchnow === "YES") {
      setswitchnow("NO");
    } else {
      setswitchnow("YES");
    }
  }





return(<><div  className ="state"><h1 className="state--title">Do I feel like going out tonight? </h1><div ><h1  >{switchnow}</h1></div><button onClick={() => changeSwitch()}>Change it </button></div></>);


}

