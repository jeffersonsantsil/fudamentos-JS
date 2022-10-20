const primeiroNumero = 3;
const segundoNumero = 2;

//Soma
const operacaoSoma = primeiroNumero + segundoNumero;
//Subtração
const operacaoSubtracao = primeiroNumero - segundoNumero;
// Multiplicação
const operacaoMultiplicacao = primeiroNumero * segundoNumero;
//Divisão
const operaDivisao = primeiroNumero / segundoNumero;

//Exibição
console.log("O valor de soma entre o número", primeiroNumero, "+", segundoNumero, "="  ,operacaoSoma);
console.log("O valor de Subtração entre o número", primeiroNumero, "-", segundoNumero, "="  ,operacaoSubtracao);
console.log("O valor de Multiplicação entre o número", primeiroNumero, "*", segundoNumero, "="  ,operacaoMultiplicacao);
console.log("O valor de divisão entre o número", primeiroNumero, "/", segundoNumero, "="  ,operaDivisao);

const numeroQuebrado = 3.3;
const numeroDeComplemento = .7;
const soma = numeroQuebrado + numeroDeComplemento;

console.log(soma);


//NaN (Not a Number) -> Não é um Número

const numero = 33;
const texto = "Jefferson";

const nan = numero * texto;

console.log(nan);
