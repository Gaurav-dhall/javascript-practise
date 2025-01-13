console.log('this is promises');

let prom1= new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("no random number was supporting u ");
    }
    else{
         setTimeout(() => {
        console.log('hello this is prom1 resolved');
        resolve("harry")
    }, 3000);
    }
   
})

let prom2 = new Promise((resolve,reject)=>{
    let b= Math.random();
    if(b<0.5){
      reject("no random number was supporting u 2")

    }
    else{
        setTimeout(() => {
            console.log('hello this is prom2 resolved');
            resolve("harry2")            
        }, 3000);
    }
})

Promise.any([prom1,prom2]).then((a)=>{
    console.log(a);
    
}).catch((err)=>{
    console.log(err);
    
})




