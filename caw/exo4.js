// exo4.js

const fs = require('fs');

// Check if a text argument was provided
if (process.argv.length < 3) {
    console.error('Usage: node exo4.js "your text here"');
    process.exit(1);
}

// Get the text from command line (join all arguments in case of spaces)
const text = process.argv.slice(2).join(' ');

// Define the output filename
const filename = 'f.txt';

try {
    // Write the text to f.txt (synchronously)
    fs.writeFileSync(filename, text, 'utf8');
    console.log('The file has been saved!');
} catch (err) {
    console.error('Error writing to file:', err.message);
    process.exit(1);
}