window.alert("Welcome to Robot Gladiators!");
var playerName = window.prompt("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
/*for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
}*/
var fight = function(enemyName) {
  while(playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt("Would you like to fight or skip this battle? Enter 'fight' or 'skip' to choose.");
    //if skip
      if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to skip?");
if (confirmSkip) {
  window.alert(playerName + " decided to skip this fight.");
  playerMoney = playerMoney - 10;
  break;
}
      }
    //if fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
     //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
//check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
    break;
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );
//check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    break;
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  
}
    }
} //end of while loop
}; //end of fight function
//function to start a new game
var startGame = function() {
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
for (var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
  window.alert(" Round " + (i + 1));
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
fight(pickedEnemyName);
  }
  else {
    window.alert("You have lost your robot in battle! Game over!");
    break;
  }
}
  endGame();
//startGame();  
};
var endGame = function() {
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  }
  else {
    window.alert("You've lost your robot in battle. Game over.");
  }
var playAgainConfirm = window.confirm("Would you like to play again?");
if (playAgainConfirm) {
  startGame();
}
else {
  window.alert("Thanks for playing!");
  
}
};
startGame();