function logInBox(message, maximum) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;
  
  if (message.length < maximum) {
    let newMessage = message.slice(0, maximum);
    console.log(horizontalRule);
    console.log(emptyLine);
    console.log(`| ${newMessage} |`);
    console.log(emptyLine);
    console.log(horizontalRule);
  } else {
    console.log(horizontalRule);
    console.log(emptyLine);
    console.log(`| ${message} |`);
    console.log(emptyLine);
    console.log(horizontalRule);
  }
  
  
}

logInBox('To boldly go where no one has gone before.', 4)