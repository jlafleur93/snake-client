const net = require('net');

// Establishes Connection with the game server


const connect = function () {
  const conn = net.createConnection({
    host: '192.168.88.177',
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on('data', (data) =>{
    console.log("you ded cause u idle", data)
  })
  return conn;
}
console.log(`Connecting...`);
connect();
//interpret incoming data as text as key presses are interpeted as utf characters
