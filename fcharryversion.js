let ran=Math.random();
console.log(ran);

let a=prompt("enter the first number");
let c=prompt("enter the operation");
let b=prompt("enter the second number");



let obj={

    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"

}

if(ran<0.1){
    console.log("wrong operation performed");
    c=obj[c];

    

    alert(`The result is  ${eval(`${a} ${c} ${b}`)}`);

}

else{
    console.log("correct operation performed");

    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);

}
