let ul = document.querySelector("ul");
let li = document.querySelector("li");

ul.addEventListener("click", function(dets){
    dets.target.classList.toggle("lt");
})