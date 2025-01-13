console.log("gaurav is a hacker")
console.log("rohan is a hecker")

setTimeout(() => {
    console.log("i am inside the timeout")
}, 0);

setTimeout(() => {
    console.log("i am inside the timeout2")
}, 0);

console.log("rohan is a baker")

const fn = () => {
    console.log("nothing");
  
}

const callback=(args,fn) => {
  console.log(args);
  fn();
}


const loadscript= (src,callback) => {
   let script= document.createElement("script")
    script.src=src;
    script.onload=callback("harry",fn);
    document.head.append(script);
  
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)

