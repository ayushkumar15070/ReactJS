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

createRoot(document.getElementById('root')).render(
  <>
  {myelement}
  {anotherelement}
  {listelemt}
  <Car/>
  </>
);
