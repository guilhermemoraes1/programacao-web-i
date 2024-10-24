const elementoResultado = document.getElementById('elementoResultado');
const resultado = document.getElementById('resultado');
let elementoValor1 = document.getElementById('valor1');
let elementoValor2 = document.getElementById('valor2');
let elementoOperador = document.getElementById('operador');

const mostrarNumeroFloat = function(numero) {
    // fixa as casas decimais em 3
    resultado.textContent = numero.toFixed(3);
    // troca o ponto por vírgula quando tiver casa decimal
    resultado.textContent = resultado.textContent.replace(".", ",");
}

const mostrarResultado = function(calculo) {
    // se a condição da ternary operator for falsa chama a função
    Number.isInteger(calculo) ? resultado.textContent = calculo : mostrarNumeroFloat(calculo);
}

const somar = (n1, n2) => n1 + n2;

const subtrair = (n1, n2) => n1 - n2;

const multiplicar = (n1, n2) => n1 * n2;

const dividir = (n1, n2) => n1 / n2;

const calculadora = (func, valor1, valor2) => func(valor1, valor2);

const tornarElementoVisivel = function () {
    // quando a função é chamada, o elemento invisível aparece na tela
    elementoResultado.className = 'd-flex';
}

function calcular() {
    // quando o usuário clica no botão, se a condição for verdadeira chama a função
    elementoResultado.className.includes('d-none') && tornarElementoVisivel();

    let v1 = parseFloat(elementoValor1.value);
    let v2 = parseFloat(elementoValor2.value);
    let calculo;

    switch(operador.value) {
        case('+'): {
            calculo = calculadora(somar, v1, v2);
            break;
        } case('-'): {
            calculo = calculadora(subtrair, v1, v2);
            break;
        } case('*'): {
            calculo = calculadora(multiplicar, v1, v2);
            break;
        } case('/'): {
            calculo = calculadora(dividir, v1, v2);
            break;
        } default: {
            calculo = 'Operador inválido';
            break;
        }
    }
    
    // o usuário recebe uma mensagem de erro, se digitar um operador inválido
    calculo === 'Operador inválido' ? resultado.textContent = calculo : mostrarResultado(calculo);
}