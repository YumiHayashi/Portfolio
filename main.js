
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0 ;

 function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 400}px)`; 
 }

 setInterval(carrossel, 1800);

/* MENU CONFIG */

let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')

btn.onclick = function () {

    sidebar.classList.toggle('active2');

};