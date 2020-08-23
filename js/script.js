









var argButtonName, buttonScissors;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages() var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

  /**
   * Describe this function...
   */
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }

  /**
   * Describe this function...
   */
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
    } else {
      printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }
  playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  console.log('wybór ruchu gracza to: ' + playerInput);
  playerMove = getMoveName(playerInput);
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
  console.log(argButtonName + ' został kliknięty');
}
buttonScissors = document.getElementById('button-test');
buttonScissors.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
buttonScissors = document.getElementById('button-rock');
buttonScissors.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonScissors = document.getElementById('button-paper');
buttonScissors.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
