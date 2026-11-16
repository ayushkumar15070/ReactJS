import Anothervehicle from "./Anothervehicle"

function Car(props){
    return (
      <>
      <h1>Hello how are you this is the component part in reactjs</h1>
      <p>Hello this is the color {props.name}</p>
      <Anothervehicle name = "White"/>
      </>
    )
}

function Vehicle(props){
  return (
    <>
    <h1>Hello this is the vehicle part of component inside the component</h1>
    <p> this is the blue color props {props.name}</p>
    <Car name = "Ford"/>
    <Car name = "BMW"/>
    </>
  )
}


const App = () => {
  return (
    <div>
      <Car name = "Red"/>
      <Vehicle name = "blue"/>
    </div>
  )
}

export default App
