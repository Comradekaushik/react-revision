import React from "react";
export default function CounterApp(){
    let [TotalCountNow,setIsTotalCountNow] = React.useState(0);

    function CountPlusOne(){
        let NewCount = TotalCountNow+1;
        setIsTotalCountNow(NewCount);
    }

    function CountMinusOne(){
        let NewCount = TotalCountNow-1;
        setIsTotalCountNow(NewCount);
    }

    return(<><div>{TotalCountNow}</div><button onClick={CountPlusOne}>+1</button><button onClick={CountMinusOne}>-1</button></>)
} ;