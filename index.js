#!/usr/bin/env node

const readline = require('node:readline');
const {
    stdin: input,
    stdout: output,
} = require('node:process');

const rl = readline.createInterface({ input, output });

const MAX_NUM = 100;
const RANDOM_NUM = getRandomInt(MAX_NUM);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function checkNum(inputNum) {
    if (isNaN(Number(inputNum)) || isNaN(parseInt(inputNum))) {
        rl.question(`Invalid input format. Enter the number\n`, checkNum);
    } else if (inputNum == RANDOM_NUM) {
        console.log(`Number ${RANDOM_NUM} guessed`);
        rl.close();
    }
    else if (inputNum > RANDOM_NUM){
        rl.question(`Less\n`, checkNum);
    }
    else if (inputNum < RANDOM_NUM) {
        rl.question(`Greater\n`, checkNum);
    }
}

rl.question(`A number from 0 to ${MAX_NUM} is guessed\n`, checkNum);