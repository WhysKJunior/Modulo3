const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function celsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}
function calculoTemp(){
    rl.question('Escolha a conversão que você deseja:\n1. Celsius para Fahrenheit\n2. Fahrenheit para Celsius\n', (escolhaUser) => {
    if (escolhaUser.trim() === '1') {
        rl.question('Digite a temperatura em Celsius: ', (tempCelsius) => {
        const tempFahrenheit = celsiusToFahrenheit(parseFloat(tempCelsius));
        console.log(`A temperatura em Fahrenheit é: ${tempFahrenheit.toFixed(2)}°F`);
        rl.close();
        });
    } else if (escolhaUser.trim() === '2') {
        rl.question('Digite a temperatura em Fahrenheit: ', (tempFahrenheit) => {
        const tempCelsius = fahrenheitToCelsius(parseFloat(tempFahrenheit));
        console.log(`A temperatura em Celsius é: ${tempCelsius.toFixed(2)}°C`);
        rl.close();
        });
    } else {
        console.log('Escolha inválida. Por favor, escolha 1 ou 2.');
        calculoTemp();
    }
    });

}
calculoTemp();
