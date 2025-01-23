// let obj ={
//   a:"1",
//   b:"harry"
// };

// console.log(obj);

// let animal={
//     eats:true,
// };

// let rabbit={
//     jumps:true,
// };

// rabbit.__proto__=animal; // rabit ke proto type me animal object ki properties aajayege 

// console.log(rabbit.eats);


//ek object ka prototype bhi object hota hai 
//ek object ki khud ki kuch properties hoti hai aur kuch inherited hoti hai jo prototype me hoti hai 


class Animal{
  
    constructor(){
        // this.naam=name;
        console.log("Object is created...");
        
    }

    get name(){
        return this.naam;
    }

    set name(name){
        this.naam-name;
        return name;
    }


     eats() {
        console.log("kha rha hu ");
        
    }

     jumps() {
        console.log("kud rha hu ");
        
    }
}


class lion extends Animal{ //extends is used for inheritance
    constructor(name){
        super(name);//super keyword represent parent class pehle parent class ke constructor ko call krna padega
        this.naam=name;
        console.log("object created and is a lion");
        
    }
   

    eats() { 
        super.eats();//parent class ke eats ko call krega pehle
        console.log("kha rha hu roar ");//method overriding
        
    }

}

let a = new Animal("bunny");

let l= new lion("shersingh");

console.log(a);
console.log(l);
