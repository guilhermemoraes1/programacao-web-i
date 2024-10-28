const elementoResultado = document.getElementById('elementoResultado');
const resultado = document.getElementById('resultado');
let elementoValor1 = document.getElementById('valor1');
let elementoValor2 = document.getElementById('valor2');
let elementoOperador = document.getElementById('operador');

const mostrarResultado = function(calculo) {
    // formata o número de acordo com o local e defini quantas casas decimais mostrar no máximo 
    resultado.textContent = "Resultado: " + calculo.toLocaleString('pt-BR', { maximumFractionDigits: 4 });
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
    calculo === 'Operador inválido' ? resultado.textContent = "Resultado: " + calculo : mostrarResultado(calculo);
}