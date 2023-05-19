/*Chiedi un numero di 4 cifre all’utente*/
let userNumber= prompt(' Please insert a 4 digit number');

if(!(userNumber> 999 && userNumber< 9999)){
    userNumber= prompt('Please insert a 4 digit number');
}
/*calcola la somma di tutte le cifre che compongono il numero.*/

let sum=0;


for(i=0; i < userNumber.length; i= i + 1){
        sum= (userNumber.totringcharAt(i)) + sum;
        console.log(sum);
}
