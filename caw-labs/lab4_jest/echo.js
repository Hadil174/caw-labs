// echo.js
function exf(s, n) {
    for (let i = 0; i < n; i++) {
        console.log(s);
    }
}

// Exporte la fonction
module.exports = { exf };

// Supprime les appels directs :
// exf("echo", 5);
// exf("JS from server", 10);