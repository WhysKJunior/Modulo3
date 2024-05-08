const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const funcionarios = [];

function criarFuncionario(nome, cargo, salario) {
  return { nome, cargo, salario };
}


function cadastrarFuncionario() {
  rl.question('Nome do funcionário: ', (nome) => {
    rl.question('Cargo do funcionário: ', (cargo) => {
      rl.question('Salário do funcionário: ', (salario) => {
        const novoFuncionario = criarFuncionario(nome, cargo, parseFloat(salario));
        funcionarios.push(novoFuncionario);
        console.log('Funcionário cadastrado com sucesso!');
        main();
      });
    });
  });
}
function maiorSalario() {
  let maiorSalarioFuncionario = funcionarios[0];
  for (let i = 1; i < funcionarios.length; i++) {
    if (funcionarios[i].salario > maiorSalarioFuncionario.salario) {
      maiorSalarioFuncionario = funcionarios[i];
    }
  }
  return maiorSalarioFuncionario;
}

function main() {
  rl.question('Deseja cadastrar um novo funcionário? (s/n): ', (resposta) => {
    if (resposta.toLowerCase() === 's') {
      cadastrarFuncionario();
    } else {
      if (funcionarios.length > 0) {
        const funcionarioComMaiorSalario = maiorSalario();
        console.log('O funcionário com o maior salário é:');
        console.log(funcionarioComMaiorSalario);
      } else {
        console.log('Nenhum funcionário cadastrado.');
      }
      rl.close();
    }
  });
}
main();
