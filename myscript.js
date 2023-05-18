/*Snack 1:*/
/*1. Il software deve chiedere per 10 volte all’utente di inserire un numero.*/

let userNumber;
let sum;
sum=0;



/* 2. Il programma stampa la somma di tutti i numeri inseriti.*/

for(
    let i=0; i<=10; i= i+1) {
        userNumber= parseInt(prompt('Insert a number'));
        sum= parseInt(userNumber + sum);
        console.log(sum);
    }
