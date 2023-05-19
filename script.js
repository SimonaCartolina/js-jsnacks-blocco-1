/*Crea un array vuoto.*/

let array=[];
/*Chiedi per 6 volte all’utente di inserire un numero*/


for(i=0; i<6; i= i+1){
    let userNumber= parseInt(prompt('Insert a number'));

    /*se è dispari inseriscilo nell’array.*/

    if(userNumber % 2 !== 0){
        array.push(userNumber);
    }
    console.log(array);
}





