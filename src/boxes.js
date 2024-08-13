import React from "react";
import boxesarray from "./boxesarray";
import Boxdivs from "./boxdiv";

export default function Boxcomponent(props){
    const[arrayofbox,setArray] = React.useState(boxesarray)
    // const styles1box = {
    //     backgroundColor : props.darkmode?"#ff0000":"#000000",
    //     textColor : props.darkmode?"#00ff11":"#ffffff",
    // }
    // const boxesmappedarray = arrayofbox.map(prev => <div style={{styles1box}} key= {prev.id}className="blacksquare">{prev.id}</div>);
    

    const boxesmappedarray = arrayofbox.map(prev => <Boxdivs key={prev.id} darkmode={prev.on} content = {prev.id}/>);
    
    return(<>{boxesmappedarray}</>)
}