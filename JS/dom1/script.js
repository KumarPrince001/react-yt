// let h1 = document.querySelector("h1");
// let btn = document.querySelector("button")
// btn.addEventListener('click', function(){
//     h1.innerHTML = "let see what happens";
//     h1.style.color = "thistle";
//     h1.style.backgroundColor = " yellow";
// })


// let a = Math.floor(Math.random() * 10);
// console.log(a);


// let  btn = document.querySelector("button");

// let con = document.querySelector(".container");

// btn.addEventListener('click', function(){
//    let c1 = Math.floor(Math.random()*256);
//    let c2 = Math.floor(Math.random()*256);
//    let c3 = Math.floor(Math.random()*256);

//    con.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
//    con.innerHTML = `rgb(${c1}, ${c2}, ${c3})`
// })



//CREATE ELEMENT
// let btn = document.querySelector("button");
// btn.addEventListener('click', function(){
//     let div = document.createElement('div');
//     div.innerHTML = 'hello i am prince';
//     console.log(div);
    
// })

//APPEND CHILD

let h1 = document.createElement('h1');
h1.innerHTML = "hello i am prince and i am learning js"

let main = document.querySelector('main');
main.appendChild(h1);
