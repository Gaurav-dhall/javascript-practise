let button = document.getElementById("btn");
button.addEventListener("dblclick",()=>{
    // alert("yay i was clicked");
    document.querySelector(".box").innerHTML="yay i was clicked";
})
    document.body.addEventListener("contextmenu",()=>{

        alert("ab right click kiya to dekhna fir ");

    })

document.addEventListener("keydown",(e)=>{
    console.log(e.keyCode,e.key);
})    
