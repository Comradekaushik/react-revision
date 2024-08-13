import React from "react";

export default function Counterappsecond(prop){

    const [numbercount,setNumbercount] = React.useState(0);

    function CountPlusOne(){
        console.log(TotalCountNow);
        let NewCount = TotalCountNow+1;
        setIsTotalCountNow(NewCount);
        console.log("--------------");
        console.log(TotalCountNow);
    }

    
    function CountMinusOne(){
        let NewCount = TotalCountNow-1;
        setIsTotalCountNow(NewCount);
    }

    return(<><div>{prop.number}</div><button onClick={CountPlusOne}>+1</button><button onClick={CountMinusOne}>-1</button></>);
}