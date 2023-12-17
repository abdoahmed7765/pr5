/*
window.alert("hi") انشاء تحذير او ما شابه
console.log("hi bro") طباعه في الكونسيلو
document.write("<h1>hi</h1><br><p>How Re You Naw </p>") انشاء عنصر في html
console.error("Error")
console.table()
console.log("abdo %c ahmed","color: red;")
console.log(typeof "abdi")

function Result(num,all_num) {
    let result = num * 100 / all_num;
    console.log(`${result}%`);
}
Result(100,10000);

function age(age) {
    let year = 2022 - age;
    let months = age * 12;
    let weaks = months * 4;
    let days = weaks * 7;
    let hours = days * 24;
    let munit = hours * 60;
    let sacounds = munit * 60;
    console.log(`Your Year : ${year} \nYour Live For ${months} Months\nYour Live For ${weaks} Weaks\nYour Live For ${days} Days\nYour Live For ${hours} Hours\nYour Live For ${munit} Munits\nYour Live For ${sacounds} sacounds\n\nDev Abdo 👀☄️`);
}    
age(15);

let a = 1;
let b = 2;
let c = 3;
*/

let color = document.querySelector(".color");
let bg = document.querySelector(".all");
function change(){
    let v = color.value;    
    bg.style.background = v;
}
let minimg = document.querySelector(".min-img");
function change(){
    minimg.src = "images/product-2.jpg";
}
let minimg1 = document.querySelector(".min-img");
function change2(){
    minimg1.src = "images/product-11.jpg";
}
let minimg3 = document.querySelector(".min-img");
function change4(){
    minimg3.src = "images/product-12.jpg";
}

let emm = document.querySelector(".inp");
function inp(){
    let em = emm.value;
    console.log(em)
    localStorage.setItem("email", em);
    let email = localStorage.getItem("email");
    console.log(email);
}
let search = document.querySelector(".search");
let movex = document.querySelector(".b");
function move(){
    if (movex.style.transform = "translateX(0px)") {
        movex.style.transform = "translateX(200px)";
    }else{
        movex.style.transform = "translateX(0px)";
    }
}