 let person = {
  name: "Ali",
  age: 20,
  city:"Lahore"
  
};

console.log(person); 
// first one is the commonly used to make object 

// here is using new object 
let other = new Object();
other.name = "Ali";
other.age = 20;

console.log(other.age); 


// now am using contructor es5 and this name in the functon
function Person3(name, age) {
  this.name = name;
  this.age = age;
}

let name1 = new Person3("ahsan", 90);
console.log(name1.name);
console.log(name1.age)


// here is constructor of es6
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let n1 = new Person2("Zaid Saleeem", 20);
console.log(n1.age); 


// here is we have factory function that is given in below
function createPerson(name, age) {
  return { name, age };
}

let write = createPerson("Junaid", 30);
console.log(write); 

// this is some example of 