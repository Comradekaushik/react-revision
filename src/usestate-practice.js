import React from "react";

export default function UseStateform(){
    let [ImageToBeDisplayed, setRandomImage] = React.useState(0);


    function changeState(){

        console.log(ImageToBeDisplayed);

        console.log("-------------------");

        
        
        setRandomImage((prev)=>{return(prev+1)});
        console.log(ImageToBeDisplayed);
        

    }


    function changeState2(){

        // console.log(ImageToBeDisplayed);

        // console.log("-------------------");

        
        
        // setRandomImage((prev)=>{return(prev+1)});
        console.log(ImageToBeDisplayed);
        

    }


    return(<><button onClick={changeState}>change state</button><button onClick={changeState2}>change state second</button><div><h1>{ImageToBeDisplayed}</h1></div></>);
}