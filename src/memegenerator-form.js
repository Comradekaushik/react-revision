import React from "react";

import memedata from "./memedata.js"







export default function Memegeneratorform(){
    let [imageToBeDisplayed, setRandomImage] = React.useState("");

    

    

    
    


    function displayRandomImageCopyFunction(){
        let Randomnumber;


        Randomnumber = Math.floor(Math.random()*memedata.data.length)

        setRandomImage(memedata.data[Randomnumber].img)

        console.log(memedata.data[Randomnumber])
        

        // setRandomImage(RandomImg.img);

        // console.log(RandomImg.img);


        // console.log(RandomImg);

        // console.log("---------------------------");

        // console.log(imageToBeDisplayed);
        // return(RandomImg);
    };

    


    return(<><div className="upperinputfieldscontainer"><div className="upperpictextcontainer"><input className="upperpictext" type ="text" /></div><div className="lowerpictextcontainer"><input className= "lowerpictext" type ="text" /></div></div>
    <div className="button-container-div"><button onClick={displayRandomImageCopyFunction} className="form-button">Random Image Call</button></div>
    
    <div><img className="Random-image-displaying" alt="here" src = {imageToBeDisplayed} /></div>
    
    </>);
}



{/* <div><img className="Random-image-displaying" alt="here" src = {newstr} /></div> */}