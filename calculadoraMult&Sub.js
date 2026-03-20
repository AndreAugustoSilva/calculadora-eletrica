// Calculadora de múltiplos e submúltiplos //

function mulSub() {

    let unidade = prompt("Digite a unidade a ser convertida (Amperes, Volts, Watts, Ohms): ");
    let prefixo1;
    let prefixo2;
    let prefixoLetra;
    let id1 = parseInt(prompt("Digite o primeiro prefixo\n 1 - Giga;\n2 - Mega;\n3 - Kilo;\n4 - Base;\n5 - Mili;\n6 - Micro;\n7 - Nano;\n8 - Pico"));

    switch(id1){
        case 1:
            prefixo1 = 10**9;
            break;
        case 2:
            prefixo1 = 10**6;
            break;
        case 3:
            prefixo1 = 1000;
            break;
        case 4:
            prefixo1 = 1;
            break;
        case 5:
            prefixo1 = 10**-3;
            break;
        case 6:
            prefixo1 = 10**-6;
            break;
        case 7:
            prefixo1 = 10**-9;
            break;
        case 8:
            prefixo1 = 10**-12;
            break;
    }

    let id2 = parseInt(prompt("Digite o segundo prefixo\n 1 - Giga;\n2 - Mega;\n3 - Kilo;\n4 - Base;\n5 - Mili;\n6 - Micro;\n7 - Nano;\n8 - Pico"));

    switch(id2){
        case 1:
            prefixoLetra = "giga";
            prefixo2 = 10**-9;
            break;
        case 2:
            prefixoLetra = "mega";
            prefixo2 = 10**-6;
            break;
        case 3:
            prefixoLetra = "quilo";
            prefixo2 = 10**-3;
            break;
        case 4:
            prefixoLetra = "";
            prefixo2 = 1;
            break;
        case 5:
            prefixoLetra = "mili";
            prefixo2 = 1000;
            break;
        case 6:
            prefixoLetra = "micro";
            prefixo2 = 10**6;
            break;
        case 7:
            prefixoLetra = "nano";
            prefixo2 = 10**9;
            break;
        case 8:
            prefixoLetra = "pico";
            prefixo2 = 10**12;
            break;
    }
    let valor = prompt("Digite o valor a ser convertido: ");
    
    console.log("O resultado é ",prefixo1*prefixo2*valor,prefixoLetra,unidade,".");
}