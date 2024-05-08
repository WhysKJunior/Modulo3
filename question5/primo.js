const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function numeroPrimo(number) {
  if (number <= 1) 
  return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) 
    return false;
  }
  return true;
}

rl.question('Digite um número: ', (numberUser) => {
  const number = parseInt(numberUser);
  if (isNaN(number)) {
    console.log('Por favor, insira um número válido.');
  } else if (number === 0) {
    console.log('Zero não é um número primo.');
  } else {
    console.log(numeroPrimo(number) ? `${number} é um número primo.` : `${number} não é um número primo.`);
  }
  rl.close();
})

