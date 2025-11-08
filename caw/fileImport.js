// fileImport.js

// Import the mean function from notation.js
const { mean } = require('./notation.js');

// Example usage
const scores1 = [90, 85, 88, 92, 87];
const scores2 = [70, 75, 80];

console.log("Scores:", scores1);
console.log("Average:", mean(scores1));  // Expected: 88.4

console.log("\nScores:", scores2);
console.log("Average:", mean(scores2));  // Expected: 75

// Edge case
console.log("\nEmpty array average:", mean([]));  // Returns 0