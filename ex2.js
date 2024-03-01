//Função Saudação:
//Crie uma função chamada saudacao que aceite um nome como parâmetro e retorne uma saudação personalizada.
function saudacao(nome) {
    return console.log("seja bem-vindo " + nome)
}
saudacao("Luiz")


//Função Soma e Quadrado:
//Crie uma função chamada somaQuadrado que aceite dois números como parâmetros e retorne a soma dos números e o quadrado dessa soma.
function somaQuadrado(n1, n2) {
    let soma = n1 + n2
    return soma * soma
}
console.log(somaQuadrado(2, 3))


//Função Concatenação:
//Crie uma função chamada concatenaPalavras que aceite duas strings como parâmetros e retorne a concatenação delas.
function concatenaPalavras(p1, p2) {
    return p1 + " " + p2
}
console.log(concatenaPalavras("Luiz", "Felipe"))


//Acesso a Caracteres:
//Crie uma função chamada primeiroUltimoCaractere que aceite uma string como parâmetro e retorne uma string contendo o primeiro e o último caractere.
function primeiroUltimoCaractere(palavra) {
    return palavra.charAt(0) + palavra.charAt(palavra.length - 1)
}
console.log(primeiroUltimoCaractere("nome"))


//Função Comparação:
//Crie uma função chamada comparacaoNumeros que aceite dois números como parâmetros e retorne uma mensagem indicando qual é maior.
function comparacao(n1, n2) {
    if (n1 > n2) {
        return n1
    } else {
        return n2
    }
}
console.log("o maior número é: " + comparacao(5, 8))


//Escopo de Variáveis:
//Crie uma função que declare uma variável dentro dela e outra fora. Tente acessar essas variáveis dentro e fora da função, observando o escopo.
let variavelFora = 2
function varDentro() {
    let variavelDentro = 1
    console.log(variavelDentro)
}
varDentro()
console.log(variavelFora)


//Função Média:
//Crie uma função chamada calcularMedia que aceite um array de números como parâmetro e retorne a média.
function calculaMedia(numeros) {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    soma = soma / numeros.length
    return soma
}
var numeros = new Array(5, 2, 6, 4, 9)
console.log(calculaMedia(numeros))


//Função Fatorial
//Crie uma função chamada fatorial que aceite um número como parâmetro e retorne o fatorial desse número.
function factorial(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}
console.log(factorial(5))


//Callback Simples:
//Crie uma função chamada executaCallback que aceite outra função como parâmetro e a execute.
function executaCallback(n1, n2, funcao) {
    return funcao(n1, n2)
}
console.log(executaCallback(2, 4, somaQuadrado))


//Função de aguardar:
//Crie uma função chamada aguardarSegundos que aguarde um número específico de segundos antes de exibir uma mensagem.
function escreverMsg() {
    console.log("função executada")
}
function aguardarSegundos(funcao) {
    setTimeout(funcao, 2000)
}
aguardarSegundos(escreverMsg)


//Validação de Números:
//Crie uma função chamada ehNumero que aceite um parâmetro e retorne verdadeiro se for um número e falso caso contrário.
function eNumero(parametro) {
    return !isNaN(parametro)
}
console.log(eNumero("g"))