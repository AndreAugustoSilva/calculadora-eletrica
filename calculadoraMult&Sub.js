// Calculadora de múltiplos e submúltiplos //

let unidade = prompt("Digite a unidade a ser convertida (A, V, W, Ohm): ")
let id1 = prompt("Digite o primeiro prefixo: ")
let id2 = prompt("Digite o segundo prefixo: ")
let valor = prompt("Digite o valor a ser convertido: ")
let prefixo1
let prefixo2
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
    case 4:
        prefixo1 = 1
        break;
    case 5:
        prefixo1 = 10**(-3)
        break;
    case 6:
        prefixo1 = 10**(-6)
        break;
    case 7:
        prefixo1 = 10**(-9)
        break;
    case 8:
        prefixo1 = 10**(-12)
        break;
}
switch(id2){
    case 1:
        prefixo2 = 10**(-9)
        break;
    case 2:
        prefixo2 = 10**(-6)
        break;
    case 3:
        prefixo2 = 10**(-3)
        break;
    case 4:
        prefixo2 = 1
        break;
    case 5:
        prefixo2 = 10**3
        break;
    case 6:
        prefixo2 = 10**6
        break;
    case 7:
        prefixo2 = 10**9
        break;
    case 8:
        prefixo2 = 10**12
        break;
}
console.log("O resultado é ",prefixo1*prefixo2*valor,".")