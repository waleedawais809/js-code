 function outer() {
  let name = "Waleed";

  function inner() {
    console.log("Hello " + name);
  }

  return inner;
}

const greet = outer();
setTimeout(greet, 2000);
setInterval(greet, 2000);

// here is first outer functon make then a function which is inner inside the outer 
// in outer only name and inner only hello + name when i return inner and call outer then the output is Hi Waleed
// first i use set time fot the time set and in call i use interval i will run after every 2 sec