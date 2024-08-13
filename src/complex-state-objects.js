import React from "react"
import "./App.css"

export default function Personalinfocardcomplexstateobjects() {


    
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    
    function toggleFavorite() {
        console.log("Toggle Favorite")
    }

    let starImages = [{imglightson: require("./images/lightson-star.webp")},{imglightsoff : require("./images/ligthsoff-star.png")}]

    let [starStatus,setStarStatus] = React.useState(starImages[0].imglightson);


    function lightStatus(){
        if(starStatus === starImages[0].imglightson){
            setStarStatus(starImages[1].imglightsoff)
        }
        else if(starStatus === starImages[1].imglightsoff){
            setStarStatus(starImages[0].imglightson)

        }
    }
    
    // return (
    //     <main>
    //         <article className="card">
    //             <img className = "small-it"src={require("./images/c-d-x-PDX_a_82obo-unsplash.jpg")}/>
    //             <div className="card--info">
    //                 <img 
    //                     src={require("./images/florian-klauer-mk7D-4UCfmg-unsplash.jpg")} 
    //                     className="card--favorite"
    //                     onClick={toggleFavorite}
    //                 />
    //                 <h2 className="card--name">
    //                     {contact.firstName} {contact.lastName}
    //                 </h2>
    //                 <p className="card--contact">{contact.phone}</p>
    //                 <p className="card--contact">{contact.email}</p>
    //             </div>
                
    //         </article>
    //     </main>
    // )


// return(<><div className="card-container"><div class="profile-image-container"><img className = "profile-image-28-7-2023"src={require("./images/john-doe.jpg")} /></div><div className="star-photo"><img className = "star-image-28-7-2023" src={require("./images/lightson-star.webp")} /></div><div><h3>{contact.firstName} {contact.lastName}</h3><p>{contact.phone}</p><p>{contact.email}</p></div></div></>)





return(<><div className="card-container"><div class="profile-image-container"><img className = "profile-image-28-7-2023"src={require("./images/john-doe.jpg")} /></div><div className="star-photo"><img className = "star-image-28-7-2023" onClick={() => lightStatus()} src={starStatus} /></div><div><h3>{contact.firstName} {contact.lastName}</h3><p>{contact.phone}</p><p>{contact.email}</p></div></div></>)

}
