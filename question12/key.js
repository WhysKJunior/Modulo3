const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const estudante = {
  nome: "Rato",
  idade: 24,
  curso: "Logica",
  media: 10
};

function verificarChave(chave) {
  if (estudante.hasOwnProperty(chave)) {
    console.log(`A chave '${chave}' foi encontrada!`);
  } else {
    console.log(`A chave '${chave}' não foi encontrada.`);
  }
  rl.close();
}
rl.question('Digite uma chave para verificar se ela existe no objeto do estudante: ', (chave) => {
  verificarChave(chave);
});
