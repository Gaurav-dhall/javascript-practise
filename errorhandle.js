let a= prompt("enter first number")

let b=prompt("enter second number")

let sum = parseInt(a)+ parseInt(b);//by default prompt returns a string not an integer
// but if we want to handle the user to not enter any string after parseing the value to integer we can use try catch

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("input is not acceptable");//script will stop executing as an error is thrown by us red color error

}

console.log(sum);


alert(sum);
function main(){

    // let x=2;
    try {
    console.log(sum*x);
    return true;
    
} catch (error) {
    console.log("error aa gya bhai");//error came and we catched it safely and hence the catch code run and script kept executing

    // error is error object

    console.log(error.name);
    console.log(error.message);
    return false;
    
    
    
}
finally{
    console.log("files are being closed and db connections are being closed ");
    
}// finally statement runs chahe try ho ya catch ho but doubt is ki vo to bina finally likhe bhi chalta hai lekin agar ham ek function ke andar hai aur try aur catch me function return ho gya tab bhi uske aage finally chalega vrna return ke baad to function khatam hojata hai na 
}
//  console.log(sum*x);
 //error will come and script will stop executing 


// console.log("script is executing still");

main();




