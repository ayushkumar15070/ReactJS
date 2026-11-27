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
const App = () => {
  return (
    <div>
      <Goal isgoal = {true} />
      <Car brand = "Ford" />
      <Goal2 isGoal = {true} />
      
    </div>
  )
}

export default App
