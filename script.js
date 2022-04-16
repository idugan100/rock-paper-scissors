
let playerScore = 0;
let computerScore = 0;
function computerPlay(){
    let play=Math.floor(Math.random() * 3);
    if (play==0){
        return "rock";
    }
    if (play==1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function isValid(selection){
    if(selection=="rock" || selection=="paper" || selection=='scissors'){
        return true;
    }
    console.log("invalid")
    return false;

} 
function playerSelection(){
    let play;
    do{
    play = prompt("What will you throw?");
    console.log(play);
    play.toLowerCase();
    } while(!isValid(play));
    console.log(6);

    
    return play;
}


function evaluateGame(player, computer){
    if(player=="rock"&&computer=="paper"){
        computerScore++;
        return "Paper beats Rock. Computer wins!";
    }
    if(player=="paper"&&computer=="scissors"){
        computerScore++;
        return "Scissors beats Paper. Computer wins!";
    }
    if(player=="scissors"&&computer=="rock"){
        computerScore++;
        return "Rock beats Scissors! Computer wins";
    }
    if(player=="rock"&&computer=="scissors"){
        playerScore++;
        return "Rock beats Scissors. Player wins!";
    }
    if(player=="paper"&&computer=="rock"){
        playerScore++;
        return "Paper beats Rock. Player wins!";
    }
    if(player=="scissors"&&computer=="paper"){
        playerScore++;
        return "Scissors beats paper. Player wins!";
    }
    else{
        return player + " and " +computer+" tie!";
    }
}



 for (let i=0;i<5;i++){
    console.log("Round "+i);
    console.log(evaluateGame(playerSelection(),computerPlay()));
    console.log("Compter: "+computerScore);
    console.log("Player:"+playerScore);


 }



