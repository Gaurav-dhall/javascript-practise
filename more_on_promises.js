function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(455);
        }, 3500);
    })
}

    console.log('loading modules');
    console.log('do something else');
    
    console.log('load data');
    
    let data=getdata();
    console.log(data);

    console.log('process data ');
    console.log('task 2');

    
    // data.then((data)=>{
    //     console.log(data);

    // console.log('process data ');
    // console.log('task 2');
    
    // }) callback approach to handle promises
    
    

