import React from "react"
import Car2 from "./Car.jsx";
class Car extends React.Component{
  render(){
    return <h1>Hello this is the class component in the react js Thank You</h1>
  }
}

class AnotherCar extends React.Component{
  constructor() {
    super();
    this.state = {color: "red"};
  }

  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}

class Anotherone extends React.Component{
  render(){
    return <h2>This one is for you! {this.props.name}</h2>
  }
}

class Anotheronetoo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return <h2>Hello everyone i am the Ayush Kumar Vishwakarma {this.props.name}</h2>
  }
}

class Student extends React.Component{
  render(){
    return <h2>Hello this is student</h2>
  }
}

class Anotheronestudent extends React.Component{
  render(){
    return (
      <>
      <Student/>
      <h2>Hello this is Anotheronestudent</h2>
      </>
    )
  }
}


class Car3 extends React.Component{
  constructor(props){
    super(props);
    this.state = {color:"Red"}
  }

  render(){
    return (
      <h2>Hello this is another example of class component which defines the state thing and also here {this.state.color}</h2>
    )
  }
}

class Car4 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      brand:"Ford",
      model:"Mustang",
      color:"Red",
      year:2026
    }
  }

  render(){
    return (
      <p>Hello everyone this is another example of class component in react js but it contains multiple properties of an object like {this.state.brand} and {this.state.model} and {this.state.year} and also {this.state.color}</p>
    )
  }
}


class Car5 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      brand:"TATA",
      model:"Safari",
      year:2016,
      color:"White"
    }
  }

  changeColor = () =>{
    this.setState({color:"Blue"})
  }

  render(){
    return (
      <>
      <p>Hello everyone this one is another example for the class component but this time we can change the state as well, like you can see the before changes the paragraph is this one "{this.state.brand} and {this.state.model} and {this.state.year} and the color is {this.state.color}</p>
      <button type = "button" onClick={this.changeColor}>Click to Change the state</button>
      <p>after clicking the button the color of the car will be changed</p>
      </>
    )
  }
}


class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {favoritecolor:"Red"}
  }

  changefavoritecolor = () =>{ 
    this.setState({favoritecolor:"Blue"})
  }

  render(){
    return (
      <>
      <p>Hello everyone this is another type of method in react js {this.state.favoritecolor}</p>
      <button type="button" onClick= {this.changefavoritecolor}>Click to see the change</button>

      </>
      
    )
  }
}

class Anotherheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

class Dimoutmethod extends React.Component{
  constructor(props){
    super(props);
    this.state = {color:"Red"}
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({color:"Blue"})
    }, 1000);
  }

  render(){
    return (
      <>
        <p>Hello everyone my favorite color {this.state.color}</p>      
      </>
    )
  }
}

const App = () => {
  return (
    <div>
      <Car/>
      <AnotherCar/>
      <Anotherone name = "Ayush"/>
      <Anotheronetoo name = "Ayush"/>
      <Anotheronestudent />
      <Car2 />
      <Car3 />
      <Car4 />
      <Car5 />
      <Header/>
      <Anotherheader favcol="Blue"/>
      <Dimoutmethod />
    </div>
  )
}

export default App
