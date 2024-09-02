function nice(name) {
    console.log("hey "+name+" u r nice");
    console.log("hey "+name+" u r good");
    console.log("hey "+name+" ur tshirt is nice too");
    console.log("hey "+name+" ur course is good ");
   
}



// nice("harry");
// nice("rohan");
// nice("gaurav")
// nice(raunak)

function sum(a , b,c=5) {
    console.log(a,b);
    return a+b+c;
}

let result=sum(3);

// console.log("the sum of numbers is "+ result)

const func1= (x)=>{
    console.log("this is an arrow function "+ x);
}

func1(52);