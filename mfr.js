let arr=[11,14,13,2,8];

// let newarr=arr.map(e=>{
//     return e*e;
// })

// for (let i  = 0; i  < arr.length; i ++) {
//     const element = arr[i ];
//     newarr.push(element*element);
   
    
// }

// console.log(newarr)

let greaterthanseven=(e)=>{
    if(e>7){
        return true;
    }
    return false;
}

console.log(arr.filter(greaterthanseven));

const red=(a,b)=>{
    return a+b;
}
let exarr=[1,5,7,8];

console.log(exarr.reduce(red))