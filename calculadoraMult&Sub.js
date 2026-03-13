// Calculadora de múltiplos e submúltiplos //

function mulSub() {

    let unidade = prompt("Digite a unidade a ser convertida (A, V, W, Ohm): ");
    let prefixo1;
    let prefixo2;
    let id1 = parseInt(prompt("Digite o primeiro prefixo\n 1 - Giga;\n2 - Mega;\n3 - Kilo;\n4 - Base;\n5 - Mili;\n6 - Micro;\n7 - Nano;\n8 - Pico"));

    switch(id1){
        case 1:
            prefixo1 = 1000000000;
            break;
        case 2:
            prefixo1 = 1000000;
            break;
        case 3:
            prefixo1 = 1000;
            break;
        case 4:
            prefixo1 = 1;
            break;
        case 5:
            prefixo1 = 0.001;
            break;
        case 6:
            prefixo1 = 0.000001;
            break;
        case 7:
            prefixo1 = 0.000000001;
            break;
        case 8:
            prefixo1 = 0.000000000001;
            break;
    }
    let id2 = parseInt(prompt("Digite o segundo prefixo\n 1 - Giga;\n2 - Mega;\n3 - Kilo;\n4 - Base;\n5 - Mili;\n6 - Micro;\n7 - Nano;\n8 - Pico"));
    switch(id2){
        case 1:
            prefixo2 = 0.000000001;
            break;
        case 2:
            prefixo2 = 0.000001;
            break;
        case 3:
            prefixo2 = 0.001;
            break;
        case 4:
            prefixo2 = 1;
            break;
        case 5:
            prefixo2 = 1000;
            break;
        case 6:
            prefixo2 = 1000000;
            break;
        case 7:
            prefixo2 = 1000000000;
            break;
        case 8:
            prefixo2 = 1000000000000;
            break;
    }
    let valor = prompt("Digite o valor a ser convertido: ");
    console.log("O resultado é ",prefixo1*prefixo2*valor,".");
}