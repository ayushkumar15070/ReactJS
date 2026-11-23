import { useState } from "react"
function Car(props){
  return (
    <h1>Hello this is {props.brand}</h1>
  )
}

let c = "Car"
const App = () => {

  const [name, setName] = useState('')


  return (
    <div>
      <input type="text" placeholder="Enter your name" id="input" onChange={(e) => setName(e.target.value)}/>
      <Car brand = {name}/>
      <Car brand = {c}/>
    </div>
  )
}

export default App
