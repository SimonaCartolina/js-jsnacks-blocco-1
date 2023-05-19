/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, */

/*chiedi all’utente il suo nome*/


const guessList=['simona cartolina', 'dennis margiotta', 'federica asaro', 'manuela pecoraro', 'federica scavone', 'serena rando mazarino'];
console.log(guessList);
const userName= prompt('Insert your name');


let nameFounded = false;




/*e comunicagli se può partecipare o no alla festa*/

for( let i=0; i < guessList.length; i= i+1 ){
    if(guessList[i] === userName){
        nameFounded = true;
    }
}

if(nameFounded){
    console.log('Welcome');
}
else{
    console.log('Access denied');
}

