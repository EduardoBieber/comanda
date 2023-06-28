// Criando os produtos para puxar os dados de nome e registrar posteriormente na comanda

function criarProduto(codigo, nome, preco) {
    var produto = {
        codigo: codigo,
        nome: nome,
        preco: preco
    }

    produtos.push(produto); // Adiciona o produto ao array "produtos"
    return produto; // Retorna o produto criado
}

const produtos = []; // para armazenar os produtos

criarProduto(1, 'hamburguerTradicional', 22.90)
criarProduto(2, 'HamburguerDuplo', 27.90)
criarProduto(3, 'Coca-Cola LT.350ml', 5.00)
criarProduto(4, 'Sobremesa Simples', 8.00)
criarProduto(5, 'Caipirinha Sabores', 20.00)

var comandas = [] // para armazenar as comandas e seus atributos e valores



function registrarNaComanda(numeroComanda, codigoProduto, quantidade) {
    var comandaExistente = comandas.find(function(comanda) {
        return comanda.numero === numeroComanda;
    })

    if(comandaExistente) {
        comanda.registros += 1
    }
    
    if(!comandaExistente) {
        comanda = {
            numero: numeroComanda,
            registros: 1,
            valorTotal: 0.00
        }
        comandas.push(comanda)
    }

    for(let i in produtos) {
        if(codigoProduto == produtos[i].codigo) {
            comanda.valorTotal = comanda.valorTotal + (produtos[i].preco * quantidade)
        }
    }

    return comanda; // Retorna a comanda criada com seus atributos  
}
    
  

registrarNaComanda(125, 2, 2)
registrarNaComanda(125, 3, 1)
registrarNaComanda(125, 4, 2)
registrarNaComanda(126, 1, 3)

console.log(comandas)