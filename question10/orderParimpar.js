const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let contador = 0;
function reorganizarArray(array) {
  const newArray = [];
  for (let num of array) {
    if (num % 2 === 0) {
      newArray.push(num);
    }
  }
  for (let num of array) {
    if (num % 2 !== 0) {
      newArray.push(num);
    }
  }
  contador = newArray.length;
  return newArray;
}

function main() {
  const numeros = [];
    function obterNumero() {
    rl.question('Digite um número (ou "ordenar" para finalizar): ', (input) => {
      if (input.toLowerCase() === 'ordenar') {
        const novoArray = reorganizarArray(numeros);
        console.log('Array ordenado:', novoArray);
        console.log(`Foram digitados ${contador} numeros`)
        rl.close();
      } else {
        const num = parseInt(input);
        if (!isNaN(num)) {
          numeros.push(num);
        }
        obterNumero(); 
      }
    });
  }

  obterNumero();
}

main();
