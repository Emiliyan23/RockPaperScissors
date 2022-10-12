playerSelection = "";

function getComputerChoice() {
    result = Math.floor(Math.random() * 3);
    if(result == 0) {
         return "rock";
    }
    else if(result == 1) {
        return "paper";
    }
    else if(result == 2) {
        return "scissors";
    }
}

function startGame() {
    if(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        prompt("invalid input.");
        return;
    }
    computerSelection = getComputerChoice();
    playRound(computerSelection);
}

function playRound(computerSelection) {
    switch(playerSelection){
        case "rock":
            if(computerSelection == "rock") {
                alert("Draw! Computer: " + computerSelection);
            }else if(computerSelection == "paper") {
                alert("You lose! Computer: " + computerSelection);
            }else {
                alert("You win! Computer: " + computerSelection);
            }
            break;
        case "paper":
            if(computerSelection == "rock") {
                alert("You win! Computer: " + computerSelection);
            }else if(computerSelection == "paper") {
                alert("Draw! Computer: " + computerSelection);
            }else {
                alert("You lose! Computer: " + computerSelection);
            }
            break;
        case "scissors":
            if(computerSelection == "rock") {
                alert("You lose! Computer: " + computerSelection);
            }else if(computerSelection == "paper") {
                alert("You win! Computer: " + computerSelection);
            }else {
                alert("Draw! Computer: " + computerSelection);
            }
            break;
    }
      
}

function makeSelection(selection) {
    playerSelection = selection;
    document.getElementById('player-selection').src = "icons/" + selection + ".png";
}