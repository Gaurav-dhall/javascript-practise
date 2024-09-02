// create a faulty calculator using js this faulty calculator does following

// 1. it takes 2 inputs from the User
// 2. it performs following wrong operations

// +-->-
// *--->+
// ---->/
// /--->**

// it perfo rms wrong operation 10 percent of the times

// 3. it shows the output to the User

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

let sum;
let prod;
let diff;
let quo;

    

  
  rl.question("Enter the first number: ", (firstInput) => {
    rl.question("Enter the second number: ", (secondInput) => {
      // Convert the input to numbers
      const a = parseFloat(firstInput);
      const b = parseFloat(secondInput);

      let ran=Math.random();
        console.log(ran)
      if (ran < 0.5) {
        sum = a - b;
        prod = a + b;
        diff = a / b;
        quo = a ** b;
        console.log(`the sum is ${sum}, the product is ${prod}, the difference is ${diff}, the quotient is ${quo}`);
        console.log("wrong operation performed");
      } else {
        sum = a + b;
        prod = a * b;
        diff = a - b;
        quo = a / b;
        console.log(`the sum is ${sum}, the product is ${prod}, the difference is ${diff}, the quotient is ${quo}`);
        console.log("correct operation performed");
      }

      rl.close();
    });
  });


// rl.close();

