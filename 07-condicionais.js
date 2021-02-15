console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador1 = /*15;*/ 20;
//suponhamos cliente 1 deseja comprar uma passagem para Salvador
console.log("Destinos Possiveis: ");
console.log(listaDeDestinos);

if(idadeComprador1 >= 18){

    destino = listaDeDestinos.indexOf("Salvador");//procura salvador em nossa lista
    listaDeDestinos.splice(destino,1);//remove a partir de salvador 1 elemento
    console.log("Compra realizada com sucesso!");
}else{//caso contrário somente exibe a mensagem de que a operação não foi realizada
    console.log("Impossivel realizar venda para um cliente menor de idade")
}

console.log(listaDeDestinos);

console.log(15 > 18);
console.log(15 < 18);
console.log(15 == 15);
console.log(18 >= 18);
console.log(15 >= 18);
console.log(15 <= 18);
console.log(15 >= 15);
console.log(18 <= 18);