//Normal If else method
import { useState } from "react"
import { text , Total} from "./practice"

// if (authenticate) {
//   return renderApp()
// } else {
//   return renderNoAPP()
// }

// // with ternary operator 
// authenticate ? renderApp() :renderNoAPP;

const App = () => {
  
  const [inputvalue, setInputValue] = useState('')
  const [message, setMessage] = useState('')
  const age = 20
  const magicfunction = () =>{
    setMessage(`Hello ${inputvalue}, you are ${age} years old.`)
  }

  return (
    <div>
      <input 

      type="text" 
      id="name" 
      value={inputvalue} 
      onChange = {(e) => setInputValue(e.target.value)} 
      placeholder="Enter your name: "
      
      />

      <button id="btn" 
      onClick={magicfunction}
      >click me</button>
      <h1 id="message">{message}</h1>
      <p>{text}</p>
      <p>{Total}</p>
    </div>
  )
}

export default App
