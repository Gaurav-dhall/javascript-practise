async function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}
// console.log("yha pe var a1 error show karega ")

function sum (a,b,c){
    return a+b+c;
}

(async function main() {
    console.log(a1);
//     let a=await sleep();
//     console.log(a);
// let b=await sleep();
// console.log(b);

// let [x,y,...rest]=[1,2,3,4,5,6,7];//agar teen dot na lagake keval rest likhta to 3 rest ko assign ho jata aur baki ignore hojata
// console.log(x,y,rest);

let obj={
    "a":1,
    "b":2,
    "c":3,
};

let {b}=obj;

console.log(b,obj);

let arr=[1,2,3];
console.log(sum(...arr));//=== console.log(sum(arr[0],arr[1],arr[2]));spread operator array ko khol deta hai 
var a1=10;//var me hoisting hoti hai mtlb ye var a1; upar chala jayega jha console likha hai uske upar is block ke andar hi bhar nahi but fir bhi undefined hi console hoga kyuki keval var a1 jayega a1=6 nahi 
// hoisting also works with function but const funstions ke sath nahi
})()


