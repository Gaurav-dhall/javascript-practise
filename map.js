let arr=[3,5,7,11,13];
// let newarr=[];
// for(let i=0;i<arr.length;i++){
//     let element =arr[i]**2;
// //    newarr.push(element);
//     newarr[i]=element
// }
// console.log(newarr);

let newarr=arr.map(e=>{
    return e**2;
})
console.log(newarr);
const lessthan10=(e)=>{
    if(e<10){
        return true;
    }
    return false;
}

console.log(newarr.filter(lessthan10))
