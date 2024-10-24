let numeros = [5, 10, 15, 20];

let tam = numeros.length;

let valor = numeros[tam - 1];

numeros.push(25);

let pessoa = {
    nome: 'maria',
    cpf: '123121231'
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// indice
for (let i in numeros) {
    console.log(i);
}

let ns = [];

// elemento
for (let numero of numeros) {
    let nv = numero + 2;
    ns.push(nv);
}

let ns1 = numeros.map((numero, i) => {
    return numero + 2;
})