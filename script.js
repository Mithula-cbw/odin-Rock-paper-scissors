console.log("it's connected!")

const choices = document.querySelectorAll('.player-choice');

const rock=1;
const paper=2;
const scissors=3;
let humanWinCount =0;
let pcWinCount =0;

function getRandom(){
    return Math.floor(Math.random() * 3) + 1;
}

// for(let i=0; i<100;i++){
//     console.log(getRandom());
// }

choices.forEach( choice =>{
    choice.addEventListener('click', () =>{
        const playerChoice = choice.getAttribute('data-choice');
        console.log(playerChoice);
    })
}

)