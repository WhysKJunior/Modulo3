const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let listaDeCompras = [];

function adicionarItem(nome, preco) {
  listaDeCompras.push({ nome, preco, comprado: false });
  console.log(`O item ${nome} foi adicionado à lista de compras.`);
}

function removerItem(index) {
  if (index >= 0 && index < listaDeCompras.length) {
    const itemRemovido = listaDeCompras.splice(index, 1);
    console.log(`${itemRemovido[0].nome} foi removido da lista de compras.`);
  } else {
    console.log("Numero de produto inválido.");
  }
}

function marcarComoComprado(index) {
  if (index >= 0 && index < listaDeCompras.length) {
    listaDeCompras[index].comprado = true;
    console.log(`${listaDeCompras[index].nome} foi marcado como comprado.`);
  } else {
    console.log("Numero de produto inválido.");
  }
}

function imprimirLista() {
  console.log("Lista de Compras:");
  listaDeCompras.forEach((item, index) => {
    console.log(`${index + 1}. ${item.nome} - R$ ${item.preco} - ${item.comprado ? 'Comprado' : 'Não comprado'}`);
  });
}

function main() {
    console.log("------------------------------------------------------------------");
    console.log("Bem-vindo ao programa de lista de compras! Digite um dos comandos ");
    console.log('"adicionar" (Para adicionar um item a lista)');
    console.log('"remover" (Para remover um item da lista)');
    console.log('"comprado" (Para marcar um item como comprado)');
    console.log('"imprimir" (Para imprimir sua lista de compras' );
    console.log('"sair" (Para encerrar sua lista de compra)');
    console.log("------------------------------------------------------------------");

  rl.on('line', (input) => {
    const comando = input.trim().toLowerCase();
    if (comando === 'adicionar') {
      rl.question('Digite o nome do produto: ', (nome) => {
        rl.question('Digite o preço do produto: ', (preco) => {
          adicionarItem(nome, preco);
          main();
        });
      });
    } else if (comando === 'remover') {
      rl.question('Digite o numero do produto que deseja remover: ', (index) => {
        removerItem(parseInt(index) - 1);
        console.log(`Produto Nº${ìndex} foi removido.!`)
        main();
      });
    } else if (comando === 'comprado') {
      rl.question('Digite o numero do produto que deseja marcar como comprado: ', (index) => {
        marcarComoComprado(parseInt(index) - 1);
      });
    } else if (comando === 'imprimir') {
      imprimirLista();
      main()
    } else if (comando === 'sair') {
      console.log("Obrigado por utilizar o programa de lista de compras. Até mais!");
      rl.close();
    } else {
      console.log("Comando inválido.");
    }
  });
}

main();
