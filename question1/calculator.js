const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function adicao(num1, num2) {
  return num1 + num2;
}

function subtracao(num1, num2) {
  return num1 - num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

function divisao(num1, num2) {
  if (num2 === 0) {
    return 'pô amigão dividir por 0 ?';
  }
  return num1 / num2;
}

 
  rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Escolha a operação (+, -, *, /): ', (operacao) =>{
    rl.question('Digite o segundo número: ', (num2) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      let resultado;

      if (operacao === '+') {
        resultado = adicao(num1, num2);
      } else if (operacao === '-') {
        resultado = subtracao(num1, num2);
      } else if (operacao === '*') {
        resultado = multiplicacao(num1, num2);
      } else if (operacao === '/') {
        resultado = divisao(num1, num2);
      } else {
        resultado = 'Operação inválida!';
      }

      console.log(`O resultado da conta ${num1} ${operacao} ${num2} é: ${resultado}`);

      rl.close();
    });
  });
});
