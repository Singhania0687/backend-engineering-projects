const fs = require('fs');
const path = require('path');

// Streams for logging
const logStream = fs.createWriteStream(path.join(__dirname, '../logs/app.log'), { flags: 'a' });
const errorStream = fs.createWriteStream(path.join(__dirname, '../logs/error.log'), { flags: 'a' });

// Override console
console.log = (...args) => logStream.write(new Date().toISOString() + ' [INFO] ' + args.join(' ') + '\n');
console.error = (...args) => errorStream.write(new Date().toISOString() + ' [ERROR] ' + args.join(' ') + '\n');

// Test
console.log("App started");
console.error("Something went wrong");
