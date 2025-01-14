// async function getdata(){
//     // simulate getting data from the server
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     })
// }
async function getdata(){
   let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    // console.log(x,data);
   return data;
    // json placeholder is a free fake rest api for testing purpose
}

// settle means resolve or reject 

// resolve means promise has settled successfully 

// reject means promise has settled with error

async function main(){
      console.log('loading modules');
    console.log('do something else');
    
    console.log('load data');
    
    let data= await getdata();
    console.log(data);

    console.log('process data ');
    console.log('task 2');
}

  main();

  // arihant 
  // educart
  // bose sir sheet 
  // ye wala sample paper 
  // ek paper maine download kiya tha 