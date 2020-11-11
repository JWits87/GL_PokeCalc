// breakEvenEquity.js - A poker break even equity drill in JavaScript
// breakEvenEquity generates a random pot size and random bet size and asks for a break even bluff success frequency

let potSize = Math.random();
potSize = Math.floor(potSize * 100)
let breakEvenBluffSuccess = Math.random();
let bluffSize = potSize * breakEvenBluffSuccess;
bluffSize = Math.floor(bluffSize);
breakEvenBluffSuccess = (bluffSize / (potSize + bluffSize));

console.log("Pot Size: " + potSize + "  Bluff Size: " + bluffSize + "  BreakEven Bluff Success: " + breakEvenBluffSuccess);
