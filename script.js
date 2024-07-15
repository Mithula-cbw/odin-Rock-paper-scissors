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

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = parseInt(choice.getAttribute('data-choice')); // Convert to number
        const random = getRandom();
        
        console.log(`Player choice: ${playerChoice}`);
        console.log(`Computer choice: ${random}`);
        
        if (playerChoice === random) {
            console.log("It's a tie!");
        } else {
            switch (playerChoice) {
                case 1: // Rock
                    if (random === 2) {
                        console.log("Computer chose Paper. You lose!");
                    } else {
                        console.log("Computer chose Scissors. You win!");
                    }
                    break;
                case 2: // Paper
                    if (random === 3) {
                        console.log("Computer chose Scissors. You lose!");
                    } else {
                        console.log("Computer chose Rock. You win!");
                    }
                    break;
                case 3: // Scissors
                    if (random === 1) {
                        console.log("Computer chose Rock. You lose!");
                    } else {
                        console.log("Computer chose Paper. You win!");
                    }
                    break;
            }
        }
    });
});