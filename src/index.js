import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Joke from "./joke";
import Datastorage from "./data";
import Meme from "./meme";
import Arraypush from "./randomarraypractice";

import CounterApp from "./counterapp";
import reportWebVitals from "./reportWebVitals";

const myElement = (
  <>
    <img
      src="https://i.ibb.co/gMNJS8H/logo512.png"
      className="main-logo-project-1"
    />
    <h1>{2 + 2} Fun facts about React</h1>
    <ul>
      <li>
        <h4>was first released in 2013</h4>
      </li>
      <li>
        <h4>invented by Jordan walke</h4>{" "}
      </li>
      <li>
        <h4>Has well over 100k satrs on github</h4>
      </li>
      <li>
        <h4>is maintained by facebook</h4>
      </li>
    </ul>
  </>
);

function Allatoneplace() {
  return (
    <>
      <header>
        <nav>
          <img
            src="https://i.ibb.co/gMNJS8H/logo512.png"
            className="main-logo-project-1"
          />{" "}
          <a href="4chan.org">Let's go Brandon</a>
        </nav>
      </header>
      <ol>
        <li>
          <h4>I wanted it for the divine purpose</h4>
        </li>
        <li>
          <h4>
            Heard that it will be helpful to create single page applications
          </h4>{" "}
        </li>
        <li>
          <h4>Has well over 100k satrs on github</h4>
        </li>
        <li>
          <h4>is maintained by facebook which is kinda sus</h4>
        </li>
      </ol>
      <footer>20xx developed by Kaushik All rights reserved</footer>
    </>
  );
}

function Headercontent() {
  return (
    <div className="header-div">
      <div></div>
      <header>
        <nav>
          <img
            src="https://i.ibb.co/gMNJS8H/logo512.png"
            className="main-logo-project-1"
          />{" "}
          <a href="4chan.org">Let's go Brandon</a>
        </nav>
      </header>
    </div>
  );
}

function Maincontent() {
  return (
    <ol>
      <li>
        <h4>I wanted it for the divine purpose</h4>
      </li>
      <li>
        <h4>
          Heard that it will be helpful to create single page applications
        </h4>{" "}
      </li>
      <li>
        <h4>Has well over 100k satrs on github</h4>
      </li>
      <li>
        <h4>is maintained by facebook which is kinda sus</h4>
      </li>
    </ol>
  );
}

function Footercontent() {
  return <footer>20xx developed by Kaushik All rights reserved</footer>;
}
function FunctionName() {
  return (
    <>
      <Headercontent />
      <Maincontent />
      <Footercontent />
    </>
  );
}

function Refinedversion1allatoneplace() {
  return (
    <>
      <div className="main-header-container">
        <div className="header-logo">
          <img
            src="https://i.ibb.co/gMNJS8H/logo512.png"
            class="main-logo-project-1"
          />

          <img
            src={require("./images/istockphoto-184276818-612x612.jpg")}
            class="main-logo-project-1"
          />
        </div>
        <div className="navbar-link1">
          <button
            className="button-1"
            onclick="window.open('https://www.4chan.org')"
          >
            Menu
          </button>
        </div>
        <div className="navbar-link2">
          <button
            className="button-2"
            onclick="window.open('https://www.4chan.org')"
          >
            Pricing
          </button>
        </div>
        <div className="navbar-link3">
          <button
            className="button-3"
            onclick="window.open('https://www.4chan.org')"
          >
            Contact
          </button>
        </div>
        <div className="navbar-link4">
          <button
            className="button-4"
            onclick="window.open('https://www.4chan.org')"
          >
            About
          </button>
        </div>
      </div>

      <h1>{2 + 2} Reasons i am excited to Learn React</h1>
      <ol>
        <li>
          <h4>was first released in 2013</h4>
        </li>
        <li>
          <h4>invented by Jordan walke</h4>{" "}
        </li>
        <li>
          <h4>Has well over 100k satrs on github</h4>
        </li>
        <li>
          <h4>is maintained by facebook</h4>
        </li>
        <li>
          <h4>I wanted it for the divine purpose</h4>
        </li>
        <li>
          <h4>
            Heard that it will be helpful to create single page applications
          </h4>{" "}
        </li>
        <li>
          <h4>Has well over 100k satrs on github</h4>
        </li>
        <li>
          <h4>is maintained by facebook which is kinda sus</h4>
        </li>
      </ol>
    </>
  );
}

function Headerprojecttwo() {
  return (
    <>
      <div className="main-header-project2">
        <div className="Logo-project2">
          <img
            className="logo-project2-img"
            src="https://i.ibb.co/M2Gspws/logo192.png"
          />
        </div>
        <div>
          <h1 className="Reactfacts-project2">ReactFacts</h1>
        </div>
        <div className="reactcourse-side-project1-name">
          <p>React Course-Project 1</p>
        </div>
      </div>
    </>
  );
}

function Maincontentprojecttwo() {
  return (
    <div className="main-content-project-2">
      <div>
        <p className="heading-project-2">Fun Facts About React </p>
      </div>

      <div>
        <ul>
          <li className="list-item-1">
            <span className="list-span">Was first released in 2013</span>
          </li>
          <li className="list-item-1">
            <span className="list-span">
              Was originally created by jordan Walke
            </span>
          </li>
          <li className="list-item-1">
            <span class="list-span">has well over 100k satrs on github</span>
          </li>
          <li className="list-item-1">
            <span className="list-span">Is maintained by meta sus</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Allinoneprojecttwo() {
  return (
    <>
      <Headerprojecttwo />
      <Maincontentprojecttwo />
    </>
  );
}

function Fourjokes() {
  return (
    <>
      <Joke
        setup="I got my daughter a fridge"
        punchline="I can't wait to see her face light up when she opens it"
      />

      <Joke
        setup="I got my daughter a fridge"
        punchline="I can't wait to see her face light up when she opens it"
      />

      <Joke
        setup="I got my daughter a fridge"
        punchline="I can't wait to see her face light up when she opens it"
      />

      <Joke
        setup={4}
        punchline="I can't wait to see her face light up when she opens it"
      />
    </>
  );
}

function Testinghere() {
  return (
    <>
      <p>{Datastorage[0].id}</p>

      <div>{Datastorage[0].img}</div>

      <div>
        <img className="aclassdataimage" src={Datastorage[0].img} />
      </div>
    </>
  );
}

function Card(datapoints) {

  

  return (
    <>

    
      <img src={datapoints.image} className = "class234"/>

      

      <p>{datapoints.Personname}</p>

      <p>
        <span>{datapoints.ratingstarscount}</span>   
        <span>   </span><span>{datapoints.ratingreviewcount}</span>
      </p>

      <p>{datapoints.Description}</p>
    </>
  );
}

function Cardcopy(datapoints) {

  

  return (
    <>

    
      <img src={datapoints.item.image} className = "class234"/>

      

      <p>{datapoints.item.Personname}</p>

      <p>
        <span>{datapoints.item.ratingstarscount}</span>   
        <span>   </span><span>{datapoints.items.ratingreviewcount}</span>
      </p>

      <p>{datapoints.item.Description}</p>
    </>
  );
}





















function Airbnbclone() {
  const Cardsarray = Datastorage.map((nameofeachitemoftheoriginaldataarray) => {
    return(<Card
    image = {nameofeachitemoftheoriginaldataarray.img}
    Personname = {nameofeachitemoftheoriginaldataarray.nameofperson}
    ratingstarscount = {nameofeachitemoftheoriginaldataarray.rating.stars}
    ratingreviewcount = {nameofeachitemoftheoriginaldataarray.rating.totalReviews}
    Description = {nameofeachitemoftheoriginaldataarray.description}
    
    
    
    
    />);
  });

  return (<>{Cardsarray}</>);
}


function Airbnbclonecopy() {
  const Cardsarraycopy = Datastorage.map((nameofeachitemoftheoriginaldataarray) => {
    return(<Cardcopy
      item = {Datastorage}
    
    
    
    
    
    />);
  });

  return (<>{Cardsarraycopy}</>);
}



const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
// root.render(<FunctionName/>);
// root.render(<Refinedversion1allatoneplace />);
// root.render(<Fourjokes/>);


// root.render(<Meme/>);


// root.render(<Arraypush/>);

root.render(<CounterApp/>);



// <App />

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
