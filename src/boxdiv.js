import React from "react";

export default function Boxdivs(props1){
    const[boxstatus,setBoxStatus] = React.useState(props1.darkmode)
    const styles1box = {
        // backgroundColor : props1.darkmode?"#ff0000":"#000000",
        backgroundColor : boxstatus?"#ff0000":"#000000",
        color : props1.darkmode?"#ffffff":"#00ff11",
        borderStyle : "solid",
        borderColor : props1.darkmode?"#ffffff":"#ff0000",
    }
    // console.log(props1.darkmode)

    
    function togglestatus(){
        
        setBoxStatus(prev => !prev)
        console.log(boxstatus)

    }
    return(<><div onClick= {togglestatus} style= {styles1box} className="blacksquare">{props1.content}</div></>)

}