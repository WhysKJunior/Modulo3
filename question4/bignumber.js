const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    rl.question('Digite o terceiro número: ', (num3) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      num3 = parseFloat(num3);

      let maiorNumero = num1;

      if (num2 > maiorNumero) {
        maiorNumero = num2;
      }

      if (num3 > maiorNumero) {
        maiorNumero = num3;
      }

      console.log('O maior número é:', maiorNumero);

      rl.close();
    });
  });
});
