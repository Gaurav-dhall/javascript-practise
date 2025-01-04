function nice(name) {
    console.log("hey "+name + " you are nice");
   
}

function sum(a,b,c=5) {
    console.log(a,b,c);
    return a+b+c;
    
}

nice("nandlala");
nice("kishoriji");
let result=sum(2,3);
console.log(result);

const func1= (x)=>{
    console.log("hey i am an arrow funstion"+x);
}

func1(1);
func1(2);
func1(3);
func1(4);

