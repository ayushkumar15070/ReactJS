import { useState } from "react"
import Message from "./message"
// Destructuring an array with old method


const Vehicles = ['Car', 'Truck', 'Bus']

const car = Vehicles[0]
const truck = Vehicles[1]
const bus = Vehicles[2]

// Array destructuring method

const anothervehicle = ['BMW', 'Ducatti', 'Kawasaki']

const [car2, bike, nbike] = anothervehicle;

// Destructuring a date

function getdate(dat) {
  const d = dat.getDate();
  const m = dat.getMonth() + 1;
  const y = dat.getFullYear();

  return [d, m, y];
}

const [date, month, year] = getdate(new Date());

// Destructuring an object

const person = {
  firstname: "Ayush",
  middlename: "Kumar",
  lastname: "Vishwakarma",
  age: 20
}

let { firstname, middlename, lastname, age } = person;

// Destructuring a nested object

const person2 = {
  firstname2: "Ayush",
  middlename2: "Kumar",
  lastname2: "Vishwakarma",
  age2: 20,
  car: {
    brand: "BMW",
    model: "M8"
  }
}

let {
  firstname2,
  middlename2,
  lastname2,
  age2,
  car: { brand, model }
} = person2;



//Using props destructuring 

function Greeting({name, age}) {
  return <h1>Hello {name}, you are {age} years old</h1>
}


//Without using destructuring method

function Greeting2(props) {
  return <h1>Hello, {props.name}, you are {props.age} year old.</h1>
}

function Counter(){
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  )
}


//Spread operators

const number1 = [1, 2, 3]
const number2 = [4, 5, 6]

const numbercombined = [...number1, ...number2]

const number3 = [1, 2, 3, 4, 5, 6]
const [one, two, ...rest] = number3;


//Export modules

// inline export

export const s = "Ayush"
export const ageof = 20

// all at once at the bottom

const name = "Ayush"
const ageofname = 20

export {name, ageofname}

//Default export



const App = () => {
  return (
    <div>
      <p>{truck}</p>
      <p>{car2}</p>
      <p>{bike}</p>
      <p>{nbike}</p>
      <p>{car}</p>
      <p>{bus}</p>

      <p>{date}</p>
      <p>{month}</p>
      <p>{year}</p>

      <p>{firstname}</p>
      <p>{middlename}</p>
      <p>{lastname}</p>
      <p>{age}</p>

      <p>{firstname2}</p>
      <p>{middlename2}</p>
      <p>{lastname2}</p>
      <p>{age2}</p>

      <p>{brand}</p>
      <p>{model}</p>
      <Greeting name='Ayush' age = {25}></Greeting>
      <Counter/>

      <p>{numbercombined}</p>
      <p>{one}</p>
      <p>{two}</p>
      <p>{rest}</p>

      <Message/>
    </div>
  )
}

export default App
