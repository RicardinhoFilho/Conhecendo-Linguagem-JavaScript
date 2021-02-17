console.log("Trabalhando com Condicionais Encadeadas");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador1 = 15;// 20;
const acompanhado = true;//false;//Define se o comprador está acompanhado ou não
//suponhamos cliente 1 deseja comprar uma passagem para Salvador
console.log("Destinos Possiveis: ");
console.log(listaDeDestinos);

destino = listaDeDestinos.indexOf("Salvador");//procura salvador em nossa lista
if (idadeComprador1 >= 18) {
    listaDeDestinos.splice(destino, 1);//remove a partir de salvador 1 elemento
    console.log("Compra realizada com sucesso!");
} else if (acompanhado) {//se acompanhado for true
    listaDeDestinos.splice(destino, 1);//remove a partir de salvador 1 elemento
    console.log("Compra realizada com sucesso!");//Compra foi possivel pois o usuário está acompnhado
} else {//caso nenhum dos dois requisitos for atendido é impossivel a venda de passagem para salvador
    console.log("Não foi possivel finalizar a compra");
}


console.log(listaDeDestinos);