const { MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  MESSAGE_KEY,
} = require("./constants");


// Stores the active TCP connection object.
let connection;


// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const keyMappings = {
  [MOVE_UP_KEY]: "Move: up",
  [MOVE_LEFT_KEY]: "Move: left",
  [MOVE_DOWN_KEY]: "Move: down",
  [MOVE_RIGHT_KEY]: "Move: right",
  [MESSAGE_KEY]: "Say: yup",
}

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key in keyMappings) {
    connection.write(keyMappings[key])
  }
};

module.exports = setupInput;