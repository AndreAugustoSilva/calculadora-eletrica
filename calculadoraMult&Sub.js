// Calculadora de múltiplos e submúltiplos //

let unidade = prompt("Digite a unidade a ser convertida (A, V, W, Ohm): ")
let id1 = prompt("Digite o primeiro prefixo: ")
let id2 = prompt("Digite o segundo prefixo: ")
let valor = prompt("Digite o valor a ser convertido: ")
let prefixo1
let prefixo2
console.log("O resultado é ",valor*1000,".")
switch(id1){
    case 1:
        prefixo1 = 10**9
        break;
    case 2:
        prefixo1 = 10**6
        break;
    case 3:
        prefixo1 = 10**3
        break;
}