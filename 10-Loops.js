console.log("Trabalhando com Loops");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

//Vamos declarar uma variavel chamada destino, e vamos varrer nossa lista de destinos possiveis para analisar se temos disponível o destino solicitado pelo cliente
let destino = "Rio de Janeiro";
let achou = false;
let contador = 0;

while (contador < listaDeDestinos.length) { //enquanto contador for menor que o tamanho da lista de destino

    if (listaDeDestinos[contador] == destino) {//se o elemento da lista for igual ao destino, temos essa opção

        achou = true;//achou seu destino
        break;//quebra o looping
    }

    console.log(contador);

    contador++;
}

console.log(`${achou ? `Temos passagem disponível para ${destino}` : `Não temos passagem disponível para ${destino}`}`);

console.log("Utilizando o laço 'FOR' ");

destino = "Curitiba";//aleterando destino
achou = false;//achou passando a ser false novamente

for (let i = 0; i < listaDeDestinos.length; i++) {//enquanto contador for menor que o tamanho da lista de destino

    if (listaDeDestinos[i] == destino) {//se o elemento da lista for igual ao destino, temos essa opção

        achou = true;//achou seu destino
        break;//quebra o looping
    }

    console.log(i);
}

console.log(`${achou ? `Temos passagem disponível para ${destino}` : `Não temos passagem disponível para ${destino}`}`);


