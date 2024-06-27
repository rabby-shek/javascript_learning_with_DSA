let startTime = performance.now();
///////////////// code here /////////////////////////

// Example array
// let myArray = [1, 2, 3];

// const promise = new Promise((resolve, reject) => {
//         myArray.push(4); 
//         resolve(myArray); 
// });

// promise.then(updatedArray => {
//     console.log("Array inside Promise:", updatedArray);
//     return updatedArray;
// }).then(updatedArray => {
//     console.log("Array outside Promise:", updatedArray);
// }).catch(error => {
//     console.error("Error occurred:", error);
// });

// console.log(myArray);
const newArray = [];
const promise = new Promise((resolve, reject) => {
    let myArray = [1, 2, 3]; 
    
  
    myArray.push(4); 
    resolve(myArray);
});

promise.then(updatedArray => {
    console.log("Array inside Promise:", updatedArray); 
    return updatedArray;
}).then(updatedArray => {
    for(let i = 0; i<updatedArray.length; i++){
        newArray.push(updatedArray[i]);
    }
}).catch(error => {
    console.error("Error occurred:", error);
});

console.log(newArray);


///////////////// code here /////////////////////////////////
let endTime = performance.now();
let executionTime = endTime - startTime;
console.log(`Running Time : ${executionTime.toFixed(3)} milliseconds`);
