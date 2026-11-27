// React conditional rendering

function Missedgoal(){
  return (
    <h1>Missed Goal</h1>
  )
}

function Madegoal(){
  return (
    <h1>Made Goal!</h1>
  )
}


function Goal(props){
  const isgoal = props.isgoal;

  if (isgoal) {
    return <Madegoal/>
  } else{
    return <Missedgoal />
  }
}

function Car(props){
  return (
    <>
    {props.brand && <h1>My car brand is {props.brand}</h1>}
    </>
  )
}


// using the ternary operator for the conditional statement

function Goal2(props){
  const isGoal = props.isGoal;
  return(
    <>
    {isGoal ? <Madegoal /> : <Missedgoal />}
    </>
  )
}


//React List

function Mycar(){
  const mycarlist = ["BMW", "Audi", "Mercedes"];
  const mycarlist2 = [
    {id:1001, brand:"Ford"}, 
    {id:1002, brand:"BMW"},
    {id:1003, brand:"Mercedes"},
  ]

  const mycarlist3 = ["BMW", "Audi", "Mercedes"];

  return (
    <>
    <h1>My cars:</h1>
    <ul>
      {
        mycarlist.map(cars => <li>I am a {cars}</li>)
      }
    </ul>
    <ul>
      {
        mycarlist2.map(car => <li key={car.id}>I am a {car.brand}</li>)
      }
    </ul>
    <ul>
      {
        mycarlist3.map((car, index) => <li key={index}>I am a {car}</li>)
      }
    </ul>
    </>
  )
}

const App = () => {
  return (
    <div>
      <Goal isgoal = {true} />
      <Car brand = "Ford" />
      <Goal2 isGoal = {true} />
      <Mycar />
    </div>
  )
}

export default App
