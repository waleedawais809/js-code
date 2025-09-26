 let mypromise = new Promise((resolve, reject) => {
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

    // here is first make a promise if name is equal to waleed then it will show agreed and if there is other name 
    // it will show not agreed i use then or catch if name is same then then work
    //  if name is diffrent then catch will works