// fileImport.js
const { mean } = require('./notation.js');

function runDemo() {
    const scores1 = [90, 85, 88, 92, 87];
    const scores2 = [70, 75, 80];

    console.log("Scores:", scores1);
    console.log("Average:", mean(scores1));

    console.log("");  // ← ligne vide entre les deux groupes

    console.log("Scores:", scores2);
    console.log("Average:", mean(scores2));

    // Supprime cette ligne vide ici :
    // console.log("");

    console.log("Empty array average:", mean([]));
}

module.exports = { runDemo };