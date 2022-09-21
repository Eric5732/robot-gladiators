window.alert("Welcome to Robot Gladiators!");
/*var playerName = window.prompt("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;*/

//function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
}
var fight = function(enemy) {
  
  while(playerInfo.health > 0 && enemy.health > 0) {
    var promptFight = window.prompt("Would you like to fight or skip this battle? Enter 'fight' or 'skip' to choose.");
    //if skip
    if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you'd like to skip?");
      if (confirmSkip) {
        window.alert(playerInfo.name + " decided to skip this fight.");
        playerInfo.money = playerInfo.money - 10;
        break;
      }
    }
    //if fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
      //Subtract the value of `playerAttack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      enemy.health = Math.max(0, enemy.health - damage);
      // Log a resulting message to the console so we know that it worked.
      console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );
        //check enemy's health
        if (enemy.health <= 0) {
          window.alert(enemy.name + " has died!");
          break;
        }
        else {
    window.alert(enemy.name + " still has " + enemy.health + " health left.");
  }
  
  // Subtract the value of `enemy.attack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  var damage = randomNumber(enemy.attack - 3, enemy.attack);
  playerInfo.health = Math.max(0, playerInfo.health - damage);
  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );
    //check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      break;
    }
    else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      
    }
  }
} //end of while loop
}; //end of fight function

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 20,
  reset: function() {
    this.health = 100;
    this.money = 20;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >=7) {
      window.alert("Refilling player's health by 20 for 7 moneys.");   
    this.health += 20;
    this.money -= 7;
  }
  else {
    window.alert("You don't have enough money!");
  }
},
  upgradeAttack: function() {
    if (this.money >= 7) {
    window.alert("Upgrading player's attack by 6 for 7 moneys.");
    this.attack += 6;
    this.money -= 7;
    }
    else {
    window.alert("You don't have enough moneys!");
    }
  }
};

/*var enemy.names = ["Roberto", "Amy Android", "Robo Trumble"];
var enemy.health = 50;
var enemy.attack = 12;
*/
var enemyInfo = [
{
name: "Roborto",
attack: randomNumber(10, 14)
},
{
  name: "Amy Andriod",
  attack: randomNumber(10, 14)
},
{
  name: "X-wing",
attack: randomNumber(10, 14)
}

];
//function to start a new game
var startGame = function() {
  //reset player stats
playerInfo.reset();
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert(" Round " + (i + 1));
  var pickedEnemyObj = enemyInfo[i];
  pickedEnemyObj.health = randomNumber(40, 60);
fight(pickedEnemyObj);
//if not at last enemy in array
if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
  //ask player if they want to shop
  var storeConfirm = window.confirm("Visit the store?");
  if (storeConfirm) {
  shop();
  }
}
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
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
//enter shop
var shop = function() {
var shopOptionPrompt = window.prompt(
  "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'refill', 'upgrade', or 'leave' to make a choice."
)
switch (shopOptionPrompt) {
  //increase health and decrease money
  case "refill":
  case "REFILL":
   playerInfo.refillHealth();
break;
//increase attack and decrease money
case "upgrade":
case "UPGRADE":
  playerInfo.upgradeAttack();
break;
//do nothing
case "leave":
case "LEAVE":
window.alert("Leaving the store.");
break;
default:
    window.alert("Please choose a valid option");
    shop();
    break;
}


}
startGame();