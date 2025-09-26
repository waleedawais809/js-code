function One() {
  console.log("Task 1 completed");
}

function Two() {
  console.log("Task 2 completed");
}

One();
Two();

 

// first is example of synchronous it will run step by step without blocking the code 
// it run when first step if finish 

// here is example of asynchronous
function pino(pino) {
  setTimeout(() => {
    console.log("Task 1 completed");
    pino(); 
  }, 2000);
}

function twooo(twoo) {
  console.log("Task 2 completed");
  twoo(); 
}

pino(() => {
  twooo(() => {
    console.log("All complete");
  });
});




// here is task 1 run after  2 sec later this is bocking code when 1 is completed then 2 is in process
