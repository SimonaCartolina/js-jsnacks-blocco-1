/*Chiedi un numero di 4 cifre all’utente*/


const userNumber= parseInt(prompt('Insert a 4 digits number'));
/*calcola la somma di tutte le cifre che compongono il numero.*/

let sum=0;

for(i=0; i<userNumber.lenght; i= i+1){
    sum= sum+ userNumber;
    onkeyup=sum(userNumber[i] + userNumber [i]);
    console.log(sum);
}