const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function fatorial(){
    rl.question('Digite um número para calcular o fatorial: ', (num) => {
    num = parseInt(num);
        
    if (isNaN(num) || num < 0) {
        console.log('Por favor, digite um número inteiro e tambem não negativo.');
        fatorial();
    }else {

        let fatorial = 1;
        for (let i = 1; i <= num; i++) {
            fatorial *= i;
        }

        console.log(`O fatorial de ${num} é ${fatorial}.`);
        rl.close();
        };

    })
}
fatorial();