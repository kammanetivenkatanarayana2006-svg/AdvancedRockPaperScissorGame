// const score = {
//     wins: 0,
//     losses: 0,
//     ties:0
// };

// JSON format nundi javascript object format convert kosam 
// json.parse() method use chesthamm
// json.parse() method it will converts the javascript object
let score = JSON.parse(localStorage.getItem("score"));
if (score === null){
    score = {
        wins: 0,
        losses: 0,
        ties:0
    };
}
UpdateScore();// ee updatescore() enduku antey score show cheyyadaniki that's why

function playUser(userclick){
    const computerGuess = playComputer();
    let result = ''; //This is about user click on button to store result
    if(userclick === 'rock'){
        if (computerGuess === 'rock'){
            result = 'Tie';
        }else if (computerGuess === 'paper'){
            result = 'You lose';
        }else if (computerGuess === 'scissors'){
            result = 'You win';
        }
    }else if(userclick === 'paper'){
            if (computerGuess === 'rock'){
                result = 'You win';
            }else if (computerGuess === 'paper'){
                result = 'Tie';
            }else if (computerGuess === 'scissors'){
                result = 'You lose';
            }
    }else if(userclick === 'scissors'){
            if (computerGuess === 'rock'){
                result = 'You lose';
            }else if (computerGuess === 'paper'){
                result = 'You win';
            }else if (computerGuess === 'scissors'){
                result = 'Tie';
            }
    }

    if(result === 'You win'){
        score.wins += 1;
    }else if(result === 'You lose'){
        score.losses += 1;
    }else if(result === 'Tie'){
        score.ties += 1;
    } 
    // local storage set item method it will accepts only
    // string objects that's why java script score 
    // to convert to json.stringify means string object
    localStorage.setItem("score", JSON.stringify(score));
    UpdateScore(); // ekkada score update kosam andukee use chesam within the function
    // below two targets (.js-result, .js-moves) brower medha show cheyyadaniki
    // target chesi use chestunnam ok
    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(".js-moves").innerHTML = `You <img class = "move-image" src = "images/${userclick}-emoji.png"/> <img class = "move-image" src = "images/${computerGuess}-emoji.png"> computer</p>
`;
}
function UpdateScore(){
    document.querySelector(".js-score").innerHTML = `Wins: ${score.wins},Losses: ${score.losses},Ties: ${score.ties}`;
    
}
function playComputer(){
    const randomNumber = Math.random();
    let computerGuess = '';
    if (randomNumber >= 0 && randomNumber < 1/3){
    computerGuess = 'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerGuess = 'paper';
    }
    else if (randomNumber >= 2/3 && randomNumber < 1){
        computerGuess = 'scissors';
    }
    return computerGuess;
}
