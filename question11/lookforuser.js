const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const usuarios = [
  { nome: "china", email: "chinildo@gmail.com", idade: 30 },
  { nome: "almerindo", email: "almerindorehem@gmail.com", idade: 30 },
  { nome: "rato", email: "ratinho22@gmail.com", idade: 22 }
];

function buscarUsuarioPorEmail(email) {
  return usuarios.find(usuario => usuario.email === email);
}

rl.question('Digite o email do usuário: ', (email) => {
  const usuarioEncontrado = buscarUsuarioPorEmail(email);

  if (usuarioEncontrado) {
    console.log('Usuário encontrado:');
    console.log(usuarioEncontrado);
  } else {
    console.log('Usuário não encontrado.');
  }

  rl.close();
});
