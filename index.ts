#! /usr/bin/env node

import inquirer from "inquirer";
const  randomNumber = Math.floor(Math.random()*6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessingGame",
        type: "number",
        message: "Please guess a number betwwwn 1 - 6 : ",
    },   

]);
if (answers.userGuessingGame === randomNumber){
    console.log("Congradulation! You guess a correct number... ");
}
else {
    console.log("Ooopss! you guessed a wrong number. Try again..")
}
