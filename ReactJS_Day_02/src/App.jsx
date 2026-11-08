class Car{
  constructor(name){
    this.brand = name
  }
}

const mycar = new Car("Volvo")


//Method in classes

class Anothercar{
  constructor(name){
    this.brand = name
  }

  present(){
    return "i have this " + this.brand;
  }

}

const myanothercar = Anothercar("Volvo")
myanothercar.present()


//Inheritance Concept 

class newcar{
  constructor(name){
    this.brand = name;
  }

  present(){
    return "I have a car of brand " + this.brand;
  }
}

class model extends newcar{
  constructor(name, mod){
    super(name)
    this.model = mod;
  }

  show(){
    return this.present() + ', it is a ' + this.model;
  }
}

const anothercar = new model('Ford', 'Mustang');
anothercar.show();


// Arrow function

//without arrow function
hello = function(){
  return 'hello world';
}

// with arrow function
hello = () => {
  return 'hello world';
}

// shorter technique

hello = () => 'hello world';

// for parameters


const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App
