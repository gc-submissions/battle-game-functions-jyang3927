"use strict";

// TODO - write your code here.

//Declare an arrow function named randomDamage that has no parameters and returns a random integer between 1 and 10.
let randomDamage = () => (Math.floor(Math.random() * 10) + 1);

//Declare an arrow function named chooseOption that has two parameters named opt1 and opt2. chooseOption does two things: 
let chooseOption = (opt1, opt2) => {
    // Declares and initializes a variable named randNum to either a 0 or 1, randomly.
    let randNum = Math.floor(Math.random()+0.5); 
    // Returns opt1 if randNum is equal to 0 otherwise return opt2 . (Use a ternary operator)
    if (randNum === 0){
        return opt1; 
    }else {
        return opt2; 
    }
}

//Declare a function expression named attackPlayer that has one parameter named health 
//which returns a number equal to health minus the result of the randomDamage function.
let attackPlayer = function (health) {
    return (health - randomDamage()); 
}

//Declare an arrow function named logHealth that has two parameters named player and health 
//which has a console.log method to state the following message: “player health: health”.
let logHealth = (player, health) => {console.log(`${player} health: ${health}`); }

//Declare an arrow function named logDeath that has two parameters named winner and loser 
//which has a console.log method to state the following message: “winner defeated loser”
let logDeath = (winner, loser) => {console.log(`${winner} defeated ${loser}`); }

//Declare an arrow function named isDead that has one parameter named health 
//which returns a boolean value of true or false based on the following condition: health <= 0;
let isDead = (health) => {
    if (health <= 0) {
        return true;
    } else {
        return false; 
    }
}

function fight(player1, player2, player1Health, player2Health) {
    //Within the fight function, write a while loop that loops while true
    while(true){
        //Declare and initialize a variable named attacker equal to the chooseOption function with player1 and player2 as arguments.
        let attacker = chooseOption(player1, player2); 
        if (attacker === player1) {
            //Set player2Health equal to the result of attackPlayer with player2Health as its argument.
            player2Health = attackPlayer(player2Health);
            //Calls the logHealth function with player2 and player2Health as its arguments.
            logHealth(player2, player2Health);
            if (isDead(player2Health)){
                logDeath(player1, player2); 
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1,player1Health); 
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}

console.log(fight('Mitch', 'Adam', 100, 100)); 

//Extended Challenges
function getGrade(number) {
    if (number < 0 || number > 100){
        return ('Is not a valid grade. Try again');
    } else if (number >= 90) {
        return ('A');
    } else if (number < 90 && number >= 80) {
        return ('B');
    } else if (number < 80 && number >= 70) {
        return ('C');
    } else if (number < 70 && number >= 60) {
        return ('D');
    } else if (number < 60) {
        return ('F');
    }
}

console.log(getGrade(80));

function prioritize(urgent, important) {
    if (typeof(urgent) === 'boolean' && typeof(important) ==='boolean') {
        if(urgent && important) {
            return ('1')
        } else if (!urgent && important){
            return ('2');
        } else if (urgent && !important) {
            return ('3');
        } else if (!urgent && !important) {
            return ('4');
        }
    } else {
        return ('Not a boolean. Requires true or false');
    }
}
console.log(prioritize(true,false));

function calculatePay(wage, hours) {
    if (wage > 40) {
        let overtime = hours - 40; 
        let overtimePay = overtime * (wage * 1.5);
        let pay = 40 * wage; 
        return (pay + overtime);
    } else {
        return (hours * wage); 
    }
}

console.log(calculatePay(50, 100));