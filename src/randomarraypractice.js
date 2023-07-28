import React from "react";

// let arraytest=["thing1","thing2"];
// let strtobeadded;

// export default function Arraypush(){
//     function Addtoarray(){
//         strtobeadded = `thing${arraytest.length+1}`;
//         arraytest.push(strtobeadded);
//         console.log(arraytest);

//     }

//     return(<><button onClick={Addtoarray}>Add to array</button></>);

// }

let arraytest = ["thing1", "thing2"];
let strtobeadded;

export default function Arraypush() {
  let [arraynow, setArray] = React.useState(["thing1 ", "thing2 "]);

  function Addtoarray() {
    strtobeadded = `thing ${arraynow.length + 1} `;
    // arraytest.push(strtobeadded);

    // setArray(previousarray => [...previousarray,strtobeadded]);

    setArray((previousarray) =>{ return([...previousarray,strtobeadded])});
    console.log(arraytest);
    console.log("---------------------");
    console.log(arraynow);
  }

  return (
    <>
      <div>{arraynow}</div>
      <button onClick={Addtoarray}>Add to array</button>
    </>
  );
}

// let strtobeadded;

// export default function Arraypush() {
//   let [arraynow, setArray] = React.useState(["thing1 ", "thing2 "]);

//   function Addtoarray() {
//     setArray(prevThingsArray => [...prevThingsArray, `thing ${prevThingsArray.length+1}`])
//   }


//   let thingsElements = arraynow.map(thing => <p key={thing}>{thing}</p>)


//   return (
//     <div>
//         <button onClick={Addtoarray}>Add Item</button>
//         {thingsElements}
//     </div>
// )
// }
