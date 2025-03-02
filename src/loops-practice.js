
// for (some initial condition; some ending condition; some increment interval)
for (let i = 0; i < 5; i++) {
  console.log(`Loop iteration: ${i}`)
}
// the loop starts counting at 0 and stops at 4 because the condition is i < 5
// the increment interval is i++, which increments i by 1 each iteration


const weapons = [
  'Fist/Chainsaw', // 1
  'Pistol', // 2
  'Shotgun', // 3
  'Chaingun', // 4
  'Rocket Launcher', // 5
  'Plasma Rifle', // 6
  'BFG 9000', // 7
]

// Print each weapon with its inventory position
for (let i = 0; i < weapons.length; i++) {
  console.log(`Weapon ${i + 1}: ${weapons[i]}`) 
}
// the loop states each weapon and its inventory position
// the loop starts at 0 technically but adds 1 to the inventory position to start at 1
// the loop stops at 6 because the condition is i < weapons.length


const players = [
  { name: 'DoomGuy', kills: 25, deaths: 5 },
  { name: 'Slayer', kills: 18, deaths: 7 },
  { name: 'Marine', kills: 12, deaths: 12 },
]

// Calculate and display kill/death ratio for each player
for (let i = 0; i < players.length; i++) {
  const player = players[i]
  const kdRatio = (player.kills / Math.max(1, player.deaths)).toFixed(2)

  console.log(
    `${player.name}: ${player.kills} kills, ${player.deaths} deaths, K/D ratio: ${kdRatio}`,
  )
}
// the loop calculates the kill/death ratio for each player
// Math.max takes the highest number and divides the kills by it to avoid dividing by 0
// toFixed(2) rounds the ratio to 2 decimal places


let count = 0

while (count < 5) {
  console.log(`While loop count: ${count}`)
  count++
}
// the loop starts at 0 and stops at 4 because the condition is count < 5
// the increment interval is count++, which increments count by 1 each iteration


let playerHealth = 100
let roundCount = 0

while (playerHealth > 0) {
  // Random damage between 5 and 25
  const damage = Math.floor(Math.random() * 21) + 5
  playerHealth -= damage

  roundCount++
  console.log(
    `Round ${roundCount}: Player took ${damage} damage. Health remaining: ${Math.max(0, playerHealth)}`,
  )
}

console.log(`Game over! Player survived ${roundCount} rounds.`)
// the loop continues until playerHealth is 0 or less
// Math.floor rounds down to the nearest whole number
// Math.random * 21 + 5 generates a random number between 5 and 25
// This is shown by * 21) + 5 showing that it wants a number between 0 and 20 and then adding 5 to make it between 5 and 25
// Math.max(0, playerHealth) ensures that the health remaining is never negative

for (let i = 1; i <= 10; i++) {
  console.log(`for loop: ${i}`);
}
// the loop starts at 1 and stops at 10 because the condition is i <= 10

let num = 1;
while (num <= 10) {
  console.log(`while loop: ${num}`);
  num++;
}
// the loop starts at 1 and stops at 10 because the condition is num <= 10
// For and While loops are similar in this case, but the While loop is more flexible


const games = [
  { title: 'Enter the Gungeon'}, //1
  { title: 'BioShock Infinite'}, //2
  { title: 'Dying Light'}, //3
  { title: '7 days to die'}, //4
  { title: 'Beat Saber'},//5
]
for (let i = 0; i < games.length; i++) {
  console.log(`Game ${i + 1}: ${games[i].title}`);
}
// the loop states each game in my top 5 favorites
// the loop starts at 0 technically but adds 1 to the inventory position to start at 1

const characters = [
  { name: 'Dempsey', kills: 40, deaths: 9 },
  { name: 'Kirati', kills: 56, deaths: 11 },
  { name: 'Shawnsey', kills: 32, deaths: 7 },
]

for (let i = 0; i < characters.length; i++) {
  const character = characters[i]
  const kdRatio = (character.kills / Math.max(1, character.deaths)).toFixed(2)

  console.log(
    `${character.name}: ${character.kills} kills, ${character.deaths} deaths, K/D ratio: ${kdRatio}`,
  )
}
// This is made by copilot and is similar to the previous example
// Displays who has the highest k/d and who has the lowest k/d
// while I understand the math behind it I'm not completely sure about the sorting method
characters.sort((a, b) => (b.kills / Math.max(1, b.deaths)) - (a.kills / Math.max(1, a.deaths)));

for (let i = 0; i < characters.length; i++) {
  const character = characters[i];
  const kdRatio = (character.kills / Math.max(1, character.deaths)).toFixed(2);

  console.log(
    `${character.name}: ${character.kills} kills, ${character.deaths} deaths, K/D ratio: ${kdRatio}`
  );
}