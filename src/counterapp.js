import React from "react";
export default function CounterApp(){
    let [TotalCountNow,setIsTotalCountNow] = React.useState(0);

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

    function tellwhatisnow(){
        console.log(TotalCountNow);
    }

    return(<><div>{TotalCountNow}</div><button onClick={CountPlusOne}>+1</button><button onClick={CountMinusOne}>-1</button><button onClick={tellwhatisnow}>Value now</button></>);
} ;