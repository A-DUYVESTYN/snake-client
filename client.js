const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: "50541" // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // name and console log msg
  conn.on("connect", () => {
    console.log("Connection established");
    conn.write("Name: WHA");

    // hardcoded movements for testing
    // setTimeout(() => {conn.write("Move: left")}, 500);
    // setTimeout(() => {conn.write("Move: left")}, 500);
    // setTimeout(() => {conn.write("Move: down")}, 1000);
    // setInterval(() => {conn.write("Move: right")}, 500);
  });

  // log data received from server to the console
  conn.on("data", (data) => {
    console.log("Data received: ", data);
  });

  return conn;
};

module.exports = connect;