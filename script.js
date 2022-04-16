console.log("hello world");
function computerPlay(){
    play=Math.floor(Math.random() * 3);
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
    do{play=window.prompt("What will you throw?");
    play.toLowerCase();
    } while(!isValid(play))
    
    return play;
}


function evaluateGame(player, computer){
    if(player=="rock"&&computer=="paper"){
        return "Paper beats Rock. Computer wins!";
    }
    if(player=="paper"&&computer=="scissors"){
        return "Scissors beats Paper. Computer wins!";
    }
    if(player=="scissors"&&computer=="rock"){
        return "Rock beats Scissors! Computer wins";
    }
    if(player=="rock"&&computer=="scissors"){
        return "Rock beats Scissors. Player wins!";
    }
    if(player=="paper"&&computer=="rock"){
        return "Paper beats Rock. Player wins!";
    }
    if(player=="scissors"&&computer=="paper"){
        return "Scissors beats paper. Player wins!";
    }
    else{
        return player + " and " +computer+" tie!";
    }
}

console.log(evaluateGame(playerSelection(),computerPlay()));




