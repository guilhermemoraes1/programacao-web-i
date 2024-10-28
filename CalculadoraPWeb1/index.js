const elementoResultado = document.getElementById('elementoResultado');
const resultado = document.getElementById('resultado');
let elementoValor1 = document.getElementById('valor1');
let elementoValor2 = document.getElementById('valor2');
let elementoOperador = document.getElementById('operador');

function definirNumeroDeCasas(lista) {
    let tamanhoDaLista = lista.length;
    let numeroDeCasas;

    switch(tamanhoDaLista) {
        case(1): {
            numeroDeCasas = 1;
            break;
        }
        case(2): {
            numeroDeCasas = 2;
            break;
        }
        case(3): {
            numeroDeCasas = 3;
            break;
        }
        default: {
            numeroDeCasas = 4;
            break; 
        }
    }

    return numeroDeCasas;
}

const mostrarNumeroFloat = function(numero) {
    // armazenar o valor em uma nova variável
    let numeroFloat = numero;

    // transformar o número em string e dividir  em uma lista
    let lista = String(numero).split('');

    let decimais = [];

    // Retirar o ponto e o número inteiro da lista, deixando apenas as casa decimais 
    lista.forEach((numero, i) => {
        if (i > lista.indexOf('.')) {
            decimais.push(numero);
        }
    })

    // o numero de casas decimais vai variar a partir da função definirNumeroDeCasas
    resultado.textContent = numeroFloat.toFixed(definirNumeroDeCasas(decimais));

    // troca o ponto por vírgula 
    resultado.textContent = resultado.textContent.replace(".", ",");
}

const mostrarResultado = function(calculo) {
    // se a condição do operador ternário for falsa chama a função
    Number.isInteger(calculo) ? resultado.textContent = calculo : mostrarNumeroFloat(calculo);
}

// OPERAÇÕES 

const somar = (n1, n2) => n1 + n2;

const subtrair = (n1, n2) => n1 - n2;

const multiplicar = (n1, n2) => n1 * n2;

const dividir = (n1, n2) => n1 / n2;

// FUNÇÃO CALCULAR

const calcular = (func, valor1, valor2) => func(valor1, valor2);

const tornarElementoVisivel = function () {
    // quando a função é chamada, o elemento invisível aparece na tela
    elementoResultado.className = 'd-flex';
}

function usarCalculadora() {
    // quando o usuário clica no botão, se a condição for verdadeira chama a função
    elementoResultado.className.includes('d-none') && tornarElementoVisivel();

    let v1 = parseFloat(elementoValor1.value);
    let v2 = parseFloat(elementoValor2.value);
    let calculo;

    switch(operador.value) {
        case('+'): {
            calculo = calcular(somar, v1, v2);
            break;
        } case('-'): {
            calculo = calcular(subtrair, v1, v2);
            break;
        } case('*'): {
            calculo = calcular(multiplicar, v1, v2);
            break;
        } case('/'): {
            calculo = calcular(dividir, v1, v2);
            break;
        } default: {
            calculo = 'Operador inválido';
            break;
        }
    }
    
    // o usuário recebe uma mensagem de erro, se digitar um operador inválido
    calculo === 'Operador inválido' ? resultado.textContent = calculo : mostrarResultado(calculo);
}