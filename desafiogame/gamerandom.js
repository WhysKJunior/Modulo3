const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const numeroRandom = Math.floor(Math.random()*100) +1;
  let tentativas = 0;

  function checkNumero(numeroUsuario){
    if(isNaN(numeroUsuario)){
        console.log('Insira um numero!!! ')
        return;
    }
    tentativas++;
    if (numeroUsuario === numeroRandom) {
        console.log(`Parabéns! Você acertou o número em ${tentativas} tentativas.\n`);
        console.log('Obrigado por jogar nossa linda adivinhação! ')

        rl.close();
    } else if (numeroUsuario < numeroRandom) {
        console.log("Tente um número maior.");
    } else {
        console.log("Tente um número menor.");
    }}

    console.log ('BEM VINDO AO JOGO DE ADIVINHAÇÃO NUMERAL VUMBORA! ')
  function jogo(){
    rl.question(`Adivinhe um numero entre 1 e 100 :`, (resposta) => {
        const numeroUsuario = parseInt(resposta)
        checkNumero(numeroUsuario)

        if(numeroUsuario !== numeroRandom){
            jogo();
        }
    })
     
  }

  jogo();