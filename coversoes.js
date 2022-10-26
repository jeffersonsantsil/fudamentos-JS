const varNumber = 456;
const varString = "456";

console.log(varNumber === varString); //faz a comparação do valor e tipo
console.log(varNumber == varString); //faz a comparação apenas do valor

console.log(varNumber + varString); // por ser um number e uma string ele faz a concatenação, ou seja implícitamente o js converte o number em string

// Conversão explícita

// Number() faz a conversão de string em Número
// String() faz a conversão de Número em String

console.log(varNumber + Number(varString));

