 function first(name) {
  setTimeout(() => {
    console.log(" First name is waleed");
    name();
  }, 2000);
}

function second(name) {
  setTimeout(() => {
    console.log(" Second name is Hassan");
    name();
  }, 3000);
}

function third(name) {
  setTimeout(() => {
    console.log(" Third name is sameed");
    name();
  }, 3000);
}
// here i make callback nested 
first(() => {                   
  second(() => {                  
    third(() => {                 
      console.log(" All named is consoled in screen ");
    });
  });
});

// here is three funciton on top with the timeout and callbeck functions inside first and every function console after 2 or 3 sec as
// i enter the time in the last i make nwsted callback then callback then callback when all the function completed then last one is consoled 
//if any function have issue then i will be stop the work (block the code )