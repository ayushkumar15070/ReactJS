import "./index.css"

const Demo = () => {

  const myclass = "Thisclass"

  const magicfunc = () => {
    document.getElementById('creation').innerHTML = `
        <ul>
          <li class = "home">Home</li> 
        <ul/>
    `
  }

  return (
    <div>
      <h1 className={myclass}>Hello this is JSX Attributes and what about you how are you doing</h1>
      <div id="creation"></div>
      <button onClick={magicfunc}>Click me</button>
    </div>
  )
}

export default Demo
