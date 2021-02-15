console.log("Trabalhando com variaveis");

idade = 19;
Idade = 25;
console.log(`idade = ${idade}; Idade = ${Idade}`);

//Acima estamos fazendo duas péssimas práticas, declarando váriaveis sem segruir nenhum padrão, por exemplo, ou escrevemos todas as variaveis com letra maiuscula ou com letra minuscula, também é mais apropriado escrevermos uma váriavel iniciando pelas letras reservadas "let,const ou var"

//string nome = "Ricardo"; <- ERRADO
let nome = "Ricardo";

//int ano = 2021; <-ERRADO
var ano = 2021;

//double salario = 2500.5 <-ERRADO
const salario = 2500.5

//Como podemos perceber tanto para declararmos string/int ou qualquer outro tipo de variavel utilizamos iniciador let/var/const -> mais para frente estudaremos suas diferenças

console.log(`Nome = ${nome}; Ano ${ano}; salario ${salario}`);