let main = document.querySelector("#box")
let img = document.querySelector("img");

main.addEventListener("mousemove", function(dets){
    img.style.top = dets.y+"px";
    img.style.left = dets.x + "px"
})