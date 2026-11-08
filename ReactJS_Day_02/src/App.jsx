// class Car{
//   constructor(name){
//     this.brand = name
//   }
// }

// const mycar = new Car("Volvo")


// //Method in classes

// class Anothercar{
//   constructor(name){
//     this.brand = name
//   }

//   present(){
//     return "i have this " + this.brand;
//   }

// }

// const myanothercar = new Anothercar("Volvo")
// myanothercar.present()


// //Inheritance Concept 

// class newcar{
//   constructor(name){
//     this.brand = name;
//   }

//   present(){
//     return "I have a car of brand " + this.brand;
//   }
// }

// class model extends newcar{
//   constructor(name, mod){
//     super(name)
//     this.model = mod;
//   }

//   show(){
//     return this.present() + ', it is a ' + this.model;
//   }
// }

// const anothercar = new model('Ford', 'Mustang');
// anothercar.show();


// Arrow function

//without arrow function
// hello = function(){
//   return 'hello world';
// }

// // with arrow function
// hello = () => {
//   return 'hello world';
// }

// // shorter technique

// hello = () => 'hello world';

// // for parameters

// hello = (val) => 'hello' + val;

// //without any arrow function
// class Header{
//   constructor(){
//     this.color = 'red';
//   }

//   changeColor() {
//     document.getElementById('demo').innerHTML += this;
//   }
// }

// const myheader = new Header();

// window.addEventListener('load', myheader.changeColor);

// document.getElementById('btn').addEventListener('click', myheader.changeColor);

// // with arrow function

// class Anotherheader{
//   constructor(){
//     this.color = 'red';
//   }

//   changeColor = () =>{
//     document.getElementById('demo').innerHTML += this;
//   }
// }

// const anothercolor = new Anotherheader();

// window.addEventListener('load', anothercar.changeColor);

// document.getElementById('btn').addEventListener('click', anothercar.changeColor);



// Variables

let a = 10 // it is a block scope variable
var s = 23 // it is a function scope variable 
const d = 20 // it is variable whose value cannot be modified


//Map method

const number = [1, 2, 3, 4];
const double = number.map(x => " " + x * 2);

const fruitlist = ['apple', 'banana', 'cherry'];
// const fruitlist = [
//     'apple', 'banana', 'cherry', 'mango', 'orange',
//     'grape', 'pineapple', 'watermelon', 'strawberry', 'blueberry',
//     'raspberry', 'blackberry', 'kiwi', 'papaya', 'guava',
//     'pomegranate', 'peach', 'pear', 'plum', 'apricot',
//     'coconut', 'lemon', 'lime', 'grapefruit', 'avocado',
//     'dragonfruit', 'passionfruit', 'lychee', 'jackfruit', 'durian',
//     'fig', 'date', 'persimmon', 'nectarine', 'cranberry',
//     'tangerine', 'mandarin', 'cantaloupe', 'honeydew', 'mulberry',
//     'gooseberry', 'starfruit', 'longan', 'rambutan', 'soursop',
//     'custard apple', 'breadfruit', 'tamarind', 'elderberry', 'quince',
//     'clementine', 'kumquat', 'boysenberry', 'huckleberry', 'cloudberry',
//     'bilberry', 'jabuticaba', 'ackee', 'salak', 'feijoa',
//     'sapodilla', 'mangosteen', 'acerola', 'barberry', 'medlar',
//     'loquat', 'jujube', 'miracle fruit', 'rose apple', 'wax apple',
//     'elephant apple', 'wood apple', 'bael', 'phalsa', 'karonda',
//     'amla', 'ber', 'jamun', 'kokum', 'palm fruit',
//     'red currant', 'black currant', 'white currant', 'sugar apple', 'ambarella',
//     'canistel', 'cherimoya', 'atemoya', 'marionberry', 'tayberry',
//     'yuzu', 'calamansi', 'blood orange', 'finger lime', 'buddha hand',
//     'ground cherry', 'pineberry', 'mirabelle', 'greengage', 'serviceberry'
// ];


const users = [
  {id:1, name:'John', age:30},
  {id:2, name:'Rahul', age:35},
  {id:3, name:'Ayush', age:23},
]


// map parameters

const anotherfruitlist = ['apple', 'kiwi', 'mango']


const App = () => {
  return (
    <div>
      <p>{double}</p>
      <ul>
        {fruitlist.map(fruit => 
          <li key={fruit}>{fruit}</li>
        )}
      </ul>

      <ul>
        {
          users.map(user => 
            <li key={user.id}>
              {user.name} is {user.age} years old
            </li>
          )
        }
      </ul>

      <ul className="another map parameters">
        {
          anotherfruitlist.map((fruit, index, array) => {
            return (
              <li key={fruit}>
                Name: {" " + fruit}, Index: {" " + index}, Array: {" " + array}
              </li>
            )
          }) 
        }
      </ul>
    </div>
  )
}

export default App
