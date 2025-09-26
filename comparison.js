console.log("true" == 1);  
console.log("10" === 10); 
let mypromise = new Promise((resolve , reject) => {
    let name = "waleed";
        if (name === "waleed") {
            resolve("agreed");
        } else {
            reject("not agreed");
        }
    });
mypromise
    .then(result => console.log("", result))
    .catch(error => console.log("", error));