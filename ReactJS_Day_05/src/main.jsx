import { createRoot } from "react-dom/client";

const myelement = <h1>Hello this is my element</h1>

const anotherelement = <h1>This is the {4 + 4} another element</h1>

const listelemt = (
  <ul>
    <li>Home</li>
    <li>Contact Us</li>
    <li>Services</li>
    <li>About</li>
  </ul>
)

function Car() {
  const brand = "Ford";
  const model = "Mustang";

  const yearof = 2025;
  const price = 200000;

  return (
    <>
    <div>
      <h1>This is the car container</h1>
      <p>This is inside the car container</p>
      <p>I have a car of brand {brand} and model is {model} and it is being manufactured in the year {yearof} and its price is {price}</p>
    </div>
    </>
  )
}

const hp = 23 * 23;

function anotherone(variable) {
  return variable * 45;
}

function Objectproperty() {
  const myobj = {
    brand:"Ford",
    model:"Mustang",
    year:2025
  }

  return (
    <>
    <h1>The car is {myobj.brand} and model is {myobj.model} and the year of manufacturing is {myobj.year}</h1>
    </>
  )
}
createRoot(document.getElementById('root')).render(
  <>
  {myelement}
  {anotherelement}
  {listelemt}
  <Car/>

  <h1>This one is for the expressino term {34 * 34} and {hp}</h1>
  <p>This is another {anotherone(45)}</p>
  <Objectproperty/>
  {Objectproperty()}
  {Objectproperty()}
  </>
);
