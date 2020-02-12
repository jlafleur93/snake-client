const net = require('net');
const connect = require('./client')
console.log(`Connecting...`);
connect();
//interpret incoming data as text as key presses are interpeted as utf characters
