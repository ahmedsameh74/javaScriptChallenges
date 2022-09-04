'use strict';

// first&secondChallengeSol 🎉

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// let players1 = [...game.players[0]];
// let players2 = [...game.players[1]];
// let gk1 = players1[0];
// let gk2 = players2[0];
// let fieldPlayers = players1.slice(1, 11);
// console.log(fieldPlayers);

const [players1, players2] = game.players;
const [gk, fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Finale = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const { odds: {team1, x: draw, team2}} = game;
const printGoals = (...players) => {
  console.log(`${players.length} goals were scored`)
}
printGoals(...game.scored);
team1 < team2 && console.log('team 1 is more likely to win')
team1 > team2 && console.log('team 2 is more likely to win')
draw < team1 && draw < team2  && console.log('i think it might be draw')

for(let [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`)
}

let avgOdd = 0;
for(let odd of Object.values(game.odds)) {
  avgOdd += odd;
}
let avgOdd2 = avgOdd / Object.values(game.odds).length;
console.log(avgOdd2)

for(let [team, odd] of Object.entries(game.odds)) {
  console.log(`Odd of ${game[team]? `victory ${game[team]}`:'draw'}: ${odd}`)
}
const scorers = {};
for(let player of game.scored) {
  scorers[player] ? scorers[player]++ : scorers[player] = 1;
}
console.log(scorers)

//thirdChallengeSol 🎉
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

let eventDub = []
for(let event of gameEvents.values()) {
  eventDub.push(event);
}
console.log(eventDub)
let events = new Set(eventDub);
console.log(events)
gameEvents.delete(64);
console.log(gameEvents);
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
for(let [min, event] of gameEvents) {
  let half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`)
}

//fourthChallengeSol 🎉
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button = document.querySelector('button');

const sol = () => {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const rows = text.split('\n');
  for(let [i, row] of rows.entries()){
    const word = row.toLowerCase().trim().split('_');
    const output = word[0] + word[1][0].toUpperCase() + word[1].slice(1);
    
    
    console.log(output.padEnd(20, ' ') + '✅'.repeat(i + 1));
  }
}

button.addEventListener('click', sol)
