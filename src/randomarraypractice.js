import React from "react";

import ReactDOM  from "react-dom/client";


let arraytest=["thing1","thing2"];
let strtobeadded;

export default function Arraypush(){
    function Addtoarray(){
        strtobeadded = `thing${arraytest.length+1}`;
        arraytest.push(strtobeadded);
        console.log(arraytest);
        
    }

    return(<><button onClick={Addtoarray}>Add to array</button></>);

    

}