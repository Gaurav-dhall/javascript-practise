// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr=[12,45,74,12,12,45,63,69,84,84.2,1,1,3];


function doubleTrouble(arr){
    for (const element of arr) {
      let currentIndex=  arr.indexOf(element);
      nextIndex=currentIndex+1;
      if(arr[nextIndex]==arr[currentIndex]){
        continue;
    }
    else{
        arr[currentIndex]*=2;
    }

    
}
}

doubleTrouble(arr)
console.log(arr);