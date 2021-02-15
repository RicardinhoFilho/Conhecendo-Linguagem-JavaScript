console.log("Trabalhando Com Listas");


// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio De Janeiro`;

// console.log(`Destinos Possiveis: `)
// console.log(salvador);
// console.log(saoPaulo)
// console.log(rioDeJaneiro);

//reescrevendo o código acima; 

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

console.log(listaDeDestinos);

listaDeDestinos.push("Curitiba");//adicionando um novo elemento à nossa lista

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);//estou excluindo a partir do elemento na posição 1, 1 elemento, neste caso São paulo
console.log(listaDeDestinos);

console.log(listaDeDestinos[0], listaDeDestinos[1],listaDeDestinos[2], listaDeDestinos[3]);

console.log(listaDeDestinos.length);//descubro o tamanho da lista

listaDeDestinos.pop();//remove o ultimo elemento desta lista que neste caso é  curitiba
console.log(listaDeDestinos + "---");

listaDeDestinos.shift();//remove o primeiro elemento, neste caso, salvador
console.log(listaDeDestinos + "---");

listaDeDestinos.unshift("Porto Alegre");//Adiciona um novo elemento no inicio da lista
console.log(listaDeDestinos);

console.log(listaDeDestinos.indexOf("Porto Alegre"));//retorna a posição do elemento dentro da lista

console.log(listaDeDestinos.indexOf("Curitiba"));//neste caso teremos como retorno -1 uma vez que curitiba já foi removida de nossa lista

console.log(listaDeDestinos.reverse());//inverto a ordem

const copiaLista = listaDeDestinos.slice();//copia a listaDeDestinos
console.log(copiaLista); 