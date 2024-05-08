const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (numberUser) => {
  numberUser = parseInt(numberUser);

  rl.question('Escolha uma operação aritmética (+ para adição, - para subtração, * para multiplicação, / para divisão): ', (operacao) => {
    if (operacao === '+') {
      console.log(`Tabuada de adição de ${numberUser}:`);
      for (let i = 1; i <= 10; i++) {
        console.log(`${numberUser} + ${i} = ${numberUser + i}`);
      }
    } else if (operacao === '-') {
      console.log(`Tabuada de subtração de ${numberUser}:`);
      for (let i = 1; i <= 10; i++) {
        console.log(`${numberUser} - ${i} = ${numberUser - i}`);
      }
    } else if (operacao === '*') {
      console.log(`Tabuada de multiplicação de ${numberUser}:`);
      for (let i = 1; i <= 10; i++) {
        console.log(`${numberUser} x ${i} = ${numberUser * i}`);
      }
    } else if (operacao === '/') {
      console.log(`Tabuada de divisão de ${numberUser}:`);
      for (let i = 1; i <= 10; i++) {
        console.log(`${numberUser} / ${i} = ${(numberUser / i).toFixed(2)}`);
      }
    } else {
      console.log('Operação inválida!');
    }

    rl.close();
  });
});
