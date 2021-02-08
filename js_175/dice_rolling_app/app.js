const HTTP = require("http");
const URL = require('url').URL;
const PORT = 8080;

function dieRoll(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function getParameters(path) {
  const myURL = new URL(path, 'https://80efa047dbd348afa7384ce40e8d7f72.vfs.cloud9.us-east-2.amazonaws');
  return myURL.searchParams;
}

function rollDice(parameters) {
  let rolls = Number(parameters.get('rolls'));
  let sides = Number(parameters.get('sides'));
  let body = '';
  
  for (let i = 1; i <= rolls; i++) {
    body += `${dieRoll(sides)}\n`
  }
  return body;
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;
  
  
  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    let content = rollDice(getParameters(path));
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`${content}\n${method} ${path}\n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});