console.log("i am a vedio on loops");

// for (let i = 0; i <100; i++) {

//     console.log(i);
    
    
// }// for loop

let obj={
    "name":"krishna",
    "age":18,
    "city":"lucknow"
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
        
    }
} // for in loop for objects

let arr=[1,2,3,4,5,6];

for (const element of arr) {
    console.log(element);
} //for of loop for array and strings 

let k=8;

while(k>0){ 
    console.log(k);
    k--;    
}  // while loop


do {
    console.log(k);
    k--;
} while (k>0);