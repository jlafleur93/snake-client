const connect = require('./client')

//console.log(client)
console.log(`Connecting...`);
//interpret incoming data as text as key presses are interpeted as utf characters
//onsole.log(connect)
  const handleUserInput = function(data){
    console.log(data)
     if (data === '\u0003'){
      console.log("thanks")
      process.exit();
    } 
    if(data === `s`){
      client.write("Move: down");
    }
    if(data === `a`){
      client.write("Move: left");
    }
    if(data === 'd'){
      client.write("Move: right");
    }
    if(data === 'w'){
      client.write("Move: up");
      console.log("up")
    }
    if(data === "o"){
      client.write("Say: sup youtube")
    }
  }
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
  
}
setupInput();
module.exports = {setupInput}