// let p = document.querySelector(".para");
// p.addEventListener("dblclick", function(){
//     p.style.color = "green";
//     p.style.cursor = "pointer";
//     p.style.userSelect = "none";
// })

// p.addEventListener("mouseenter", function(){
//     p.style.cursor = "pointer";
// })

// let input = document.querySelector("input");

// input.addEventListener("input", function(text){
//     console.log(text.data);

// })



// let age = document.querySelector("#age");

// age.addEventListener("input", function(detail){
//     if(detail.data !== null){
//         console.log(detail.data);
//     }
// })


// let sel = document.querySelector("select");
// let device = document.querySelector("#device");

// sel.addEventListener("change", function(){
//     device.textContent = "Car Selected";
// })


    
let h1 = document.querySelector("h1");

window.addEventListener("keydown", function(detail){
    if(detail.key === " "){
        h1.textContent = "SPC"
    }else{
           h1.textContent = detail.key;


    }
})




































































































































