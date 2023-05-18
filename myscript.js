/*Snack 1:*/
/*1. Il software deve chiedere per 10 volte all’utente di inserire un numero.*/
const ulElement= document.querySelector('ul');
const userNumber= prompt('Insert a number');
console.log(userNumber);

for(
    let i=1; i<=10; i= i+1) {
        const userNumber= prompt('Insert a number');
        
        const li= document.createElement('li');

        li.append(userNumber);
        ulElement.appendChild(li);
        console.log(userNumber);

        const sum= (i= i++ );

        console.log (sum);
    }

/* 2. Il programma stampa la somma di tutti i numeri inseriti.*/
