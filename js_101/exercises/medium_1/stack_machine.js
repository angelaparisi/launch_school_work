function minilang(program) {
  let register = 0;
  let stack = [];

  program.split(' ').forEach((token) => {
    if (
      stack.length <= 0 &&
      ['ADD', 'DIV', 'MULT', 'MOD', 'SUB', 'POP'].includes(token)
    ) {
      console.error('Stack empty');
    } else {
      switch (token) {
        case 'ADD':
          register = register + stack.pop();
          break;
        case 'DIV':
          register = Math.floor(register / stack.pop());
          break;
        case 'MULT':
          register = register * stack.pop();
          break;
        case 'MOD':
          register = Math.floor(register % stack.pop());
          break;
        case 'SUB':
          register = register - stack.pop();
          break;
        case 'POP':
          register = stack.pop();
          break;
        case 'PRINT':
          console.log(register);
          break;
        case 'PUSH':
          stack.push(register);
          break;
        default:
          if (Number(token)) register = Number(token);
          else {
            console.error('Unkown command: ', token);
          }
      }
    }
  });
}