var player1;
var player2;
// var players = []
var choices = ["pedra", "papel", "tesoura"];
var userChoice; 
var result; 

document.getElementById("pedra").addEventListener("click", function() {
  userChoice = "pedra";
  game(userChoice);
  document.getElementById("jokenpoResult").innerHTML = result;
});
document.getElementById("papel").addEventListener("click", function() {
  userChoice = "papel";
  game(userChoice);
  document.getElementById("jokenpoResult").innerHTML = result;
});
document.getElementById("tesoura").addEventListener("click", function() {
  userChoice = "tesoura";
  game(userChoice);
  document.getElementById("jokenpoResult").innerHTML = result;
});

// function game(posição) {
  function game(player1) {
  player2 = choices[Math.floor(Math.random() * 3)];
  if (player1 === "pedra" && player2 === "tesoura") {
    // if (players[posição] === "pedra" && player2 === "tesoura") {
    result = "Você ganhou! Pedra esmaga tesoura.";
  } else if (player1 === "papel" && player2 === "pedra") {
    result = "Você ganhou! Papel cobre pedra.";
  } else if (player1 === "tesoura" && player2 === "papel") {
    result = "Você ganhou! Tesoura corta papel.";
  } else if (player1 === player2) {
    result = "Empate!";
  } else {
    result = "Você perdeu! " + player2 + " vence " + player1 + ".";
  }
  return result; 
}







