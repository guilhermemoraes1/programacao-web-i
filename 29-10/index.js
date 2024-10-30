let a = 1;
let b = 100;

// troca valores
[a, b] = [b, a];

// desestruturação de objeto
let aluno = {nome: 'Maria', matriculado: true};
let {nome, matriculado} = aluno;

let iniciaEstado = (v) => {
    // retorna um array com o valor do parametro e uma função
    return [v, (k) => k + 1];
}

let d = 1;
let [estado, setEstado] = iniciaEstado(d);
let resultado = setEstado(estado);

let valores1 = [1, 2, 3];
let valores2 = [4, 5, 6];

// espalhamento ou spread
let valores = [...valores1, ...valores2];

// mesma lista com mesmo valores
let valoresCopia1 = [...valores];
valoresCopia1.push(10);

// lista diferente com mesmo valores
let valoresCopia2 = [...valores];
valoresCopia2.push(20);