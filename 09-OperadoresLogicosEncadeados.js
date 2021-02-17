console.log("Trabalhando com Operadores Lógicos Encadeados");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador1 = 15;// 20;
const acompanhado = true;//false;//Define se o comprador está acompanhado ou não
//suponhamos cliente 1 deseja comprar uma passagem para Salvador
const temPassagemComprada = true;//false;//Define se tem passagem comprada ou não
console.log("Destinos Possiveis: ");
console.log(listaDeDestinos);

destino = listaDeDestinos.indexOf("Salvador");//procura salvador em nossa lista
if ((idadeComprador1 >= 18 || acompanhado) && temPassagemComprada) {//Agora estamos utilizando o operador lógico "||"(ou), isso significa que quando o usuário for maior de idade ou estiver acompanhado ele poderá comprar a passagem. Caso eu utilizasse o operador lógico "&&"(e), além de maior de idade o comprador deveria estar acompanhado. 
    listaDeDestinos.splice(destino, 1);//remove a partir de salvador 1 elemento
    console.log("Embarquer realizado com sucesso!");
}  else {//caso nenhum dos três requisitos for atendido é impossivel a venda de passagem para salvador
    console.log("Não foi possivém o embarque!");
}


console.log(listaDeDestinos);

//Outra maneira de escrever condicionais: 

const condicao1 = idadeComprador1 >= 18 ? "Passageiro Maior de Idade" : "Passageiro Menor de Idade";

const condicao2 = acompanhado ? "Passageiro estava acompanhado" : "Passageiro não estava acompanhado";

const condicao3 = temPassagemComprada ? "Têm Passagem" : "Não tem passagem";

console.log(`-${condicao1} \n-${condicao2} \n-${condicao3}`)//"/n" pula a linha
