const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fibonacci(n) {
  let fibSequence = [0, 1];
  
  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }
  
  return fibSequence;
}

rl.question('Digite o número de termos da sequência de Fibonacci: ', (answer) => {
  const numTerms = parseInt(answer);
  
  if (isNaN(numTerms) || numTerms <= 0) {
    console.log('Por favor, digite um número válido maior que zero.');
    rl.close();
    return;
  }
  
  const result = fibonacci(numTerms);
  console.log(`Os ${numTerms} primeiros termos da sequência de Fibonacci são: ${result.join(', ')}`);
  
  rl.close();
});

