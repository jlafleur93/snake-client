const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.88.177',
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on('connect', () =>{
    conn.write("Name: JEL")
   setInterval(() =>{
    conn.write("Move: up")
    conn.write("Move: left")
    setTimeout(() =>{
      conn.write("Move: down")
    }, 300)
   }, 500)
   
  })
  
  conn.on('data', (data) => {
    console.log("you ded cause u idle")
  })

  return conn;
}
connect("tst")
module.exports = connect;