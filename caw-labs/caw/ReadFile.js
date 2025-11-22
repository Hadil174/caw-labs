// ReadFile.js

const fs = require('fs');

// Check if a filename was provided as an argument
if (process.argv.length < 3) {
    console.error('Usage: node ReadFile.js <filename>');
    process.exit(1);
}

// Get the filename from command line argument
const filename = process.argv[2];

// Read the file synchronously and print its content
try {
    const data = fs.readFileSync(filename, 'utf8');
    console.log(data);
} catch (err) {
    console.error(`Error reading file "${filename}":`, err.message);
    process.exit(1);
}