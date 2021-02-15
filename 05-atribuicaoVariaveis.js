console.log("Trabalhando com atribuição de variáveis");

const idade = 29;
const nome = "Ricardo";
const sobrenome = "Bugan";

console.log(nome + " " + sobrenome);
console.log(nome,sobrenome);
console.log("Meu nome é " + nome,sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome}`);

//nome = nome + sobrenome; ocorre um erro por que declareri nome como constante, não posso atribuir outro valor para ela

let nome2 = "Ricardo";
let sobrenome2 = "Bugan";

nome2 = nome2 + sobrenome2;//dá certo pois let é varivavel 
console.log(nome2);

const nomeCompleto = nome + sobrenome; //agora que atribuimos valor para "nomeCompleto" não podemos mais alterar está constante
console.log(nomeCompleto);