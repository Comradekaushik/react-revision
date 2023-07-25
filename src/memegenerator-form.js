import React from "react";
import  ReactDOM  from "react-dom/client";
import Memedata from "./memedata";

export default function Memegeneratorform(){

    let RandomImg;

    
    function Consoleimage(){

        RandomImg = Memedata[Math.floor(Math.random()*Memedata.length)];
        console.log(RandomImg);
    }


    return(<><div className="upperinputfieldscontainer"><div className="upperpictextcontainer"><input className="upperpictext" type ="text" /></div><div className="lowerpictextcontainer"><input className= "lowerpictext" type ="text" /></div></div>
    <div className="button-container-div"><button onClick={Consoleimage} className="form-button">Random Image Call</button></div></>);
}