console.log("it's connected!")

const choices = document.querySelectorAll('.player-choice');
const battleGround = document.querySelector('.battleGround');
const resultContainer = document.querySelector('.result')
const humanWinCountOut = document.querySelector('#human-result');
const pcWinCountOut = document.querySelector('#pc-result');
const newGame = document.querySelector('#new-game');
const newGame2 = document.querySelector('#new-game2');

// console.log(humanWinCountOut);
// console.log(pcWinCountOut);
// console.log(newGame);



const rock=1;
const paper=2;
const scissors=3;
let humanWinCount =0;
let pcWinCount =0;

function getRandom(){
    return Math.floor(Math.random() * 3) + 1;
}

function newGameStart(){
    humanWinCount =0;
    pcWinCount =0;
    pcWinCountOut.textContent = pcWinCount;
    humanWinCountOut.textContent = humanWinCount;
    battleGround.textContent = "Good luck on your new battle!";
    // console.log(`${humanWinCount} ${pcWinCount}`)
}

// newGameStart();
// for(let i=0; i<100;i++){
//     console.log(getRandom());
// }

newGame.addEventListener('click' , () =>{
    // console.log("new game");
    newGameStart();

})

newGame2.addEventListener('click' , () =>{
    // console.log("new game");
    newGameStart();

})

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = parseInt(choice.getAttribute('data-choice')); // Convert to number
        const random = getRandom();
        resultContainer.style.display = 'block';
        let playerChoose;

        switch (playerChoice) {
            case 1: // Rock
                playerChoose = 'Rock';
                break;
            case 2: // Paper
                playerChoose = 'Paper';
                break;
            case 3: // Scissors
                playerChoose = 'Scissors';
                break;
        }
        
        let resultMessage = ` `;
        console.log(resultMessage);
        
        if (playerChoice === random) {
           resultMessage += "It's a tie!";
        } else {
            switch (playerChoice) {
                case 1: // Rock
                    if (random === 2) {
                        resultMessage += "Computer chose Paper. You lose!";
                        pcWinCount++;
                    } else {
                        resultMessage += "Computer chose Scissors. You win!";
                        humanWinCount++;

                    }
                    break;
                case 2: // Paper
                    if (random === 3) {
                        resultMessage += "Computer chose Scissors. You lose!";
                        pcWinCount++;
                    } else {
                       resultMessage += "Computer chose Rock. You win!";
                       humanWinCount++;
                    }
                    break;
                case 3: // Scissors
                    if (random === 1) {
                        resultMessage += "Computer chose Rock. You lose!";
                        pcWinCount++;
                    } else {
                        resultMessage += "Computer chose Paper. You win!";
                        humanWinCount++;
                    }
                    break;
            }
        }

        battleGround.textContent = resultMessage;
        pcWinCountOut.textContent = pcWinCount;
        humanWinCountOut.textContent = humanWinCount;
    });
});