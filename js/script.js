"use strict"
// FUNCTION 
// function bu bitta funksiyani kiritib undan ko'p marotaba foydalanishdir bu funksiya bizga kodimizni optimallashtiradi
function Parametr(a,b,c) {
    console.log(a+b+c);
};

Parametr(1,2,3);

// Return bu "Qaytar degan manoni beradi va funksiyani to'xtatadi"

function square(a) {
    return a*a;
};

console.log(square(6));



// FUNCTIONS
// 1- function Declaration
// 2- function expression
// 3- Arrow function

// 1-Function Declaration bu funksiya oldindan elon qilingan bo'lin bu funksiyani funksiya qatoridan oldin ham chaqirish mumkin
Parametr(1,2,3);

function Parametr(a,b,c) {
    console.log(a+b+c);
};
// 2- Function expression Bu funksiya faqat chaqirilganda ishga tushadi 

const Summ = function (a,b){
    console.log(a+b);
}
Summ(5,6);


// ARROW Function bu funksiya kodni qisqartirishda ishlatiladi 

const calc = (a,b)=> a*b;
console.log(calc(5,8)); 
