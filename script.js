'use strict';

//challengeOneSol
const calAverage = (a, b, c) => (a + b + c) / 3;

let dolphScore = calAverage(44, 23, 71);
let koalasScore = calAverage(65, 45, 49);
console.log(dolphScore, koalasScore);

const checkWinner = (dolphScore, koalasScore) => {
    if(dolphScore >= koalasScore * 2) {
        return `dolph is the winner with ${dolphScore} points`;
    }else if(koalasScore >= dolphScore * 2) {
        return `koalas is the winner with ${koalasScore} points`;
    }else{
        return 'no winner';
    }
}

console.log(checkWinner(dolphScore, koalasScore));

dolphScore = calAverage(85, 54, 41);
koalasScore = calAverage(23, 34, 27);
console.log(checkWinner(dolphScore, koalasScore));

//challengeTwoSol
const bills = [125, 555, 44];

const calcTip = (bill) => bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.20;


const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);

//challengeThreeSol
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
if(mark.calcBMI() > john.calcBMI()) {
    console.log(`MArk's BMI ${mark.bmi} is higher than John's BMI ${john.bmi}`);
}else{
    console.log(`John's BMI ${john.bmi} is higher than Mark's BMI ${mark.bmi}`);
}

//challengeFourSol
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []
for(let i = 0; i < bills.length; i++) {
    const calcTip = () =>
      bills[i] > 50 && bills[i] < 300
        ? tips.push(bills[i] * 0.15)
        : tips.push(bills[i] * 0.2)
    calcTip()
    totals.push(bills[i] + tips[i]);
}

console.log(tips)
console.log(totals)

const calcAverage = (arr) => {
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        sum = sum + arr[i]
    }
    return sum / arr.length;
};
console.log(calcAverage(totals));
console.log(calcAverage(bills));
console.log(calcAverage(tips));