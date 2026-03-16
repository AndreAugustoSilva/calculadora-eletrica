// Inputs: 4 ou 5 faixas, 1ª faixa, 2ª faixa, 3ª faixa, 4ª faixa, 5ª faixa //

function resistor() {

    let cor1, cor2, cor3, cor4
    let id = parseInt(prompt("O resistor possui quatro ou cinco faixas?"));

    switch(id){

        case 4:
            cor1 = parseInt(prompt("Digite a cor da primeira faixa:\n- 0 para preto\n- 1 para marrom\n- 2 para vermelho\n- 3 para laranja\n- 4 para amarelo\n- 5 para verde\n- 6 para azul\n- 7 para violeta\n- 8 para cinza\n- 9 para branco")*10);
            cor2 = parseInt(prompt("Digite a cor da segunda faixa:\n- 0 para preto\n- 1 para marrom\n- 2 para vermelho\n- 3 para laranja\n- 4 para amarelo\n- 5 para verde\n- 6 para azul\n- 7 para violeta\n- 8 para cinza\n- 9 para branco"));
            cor3 = parseInt(prompt("Digite a cor da terceira faixa:\n- 0 para preto\n- 1 para marrom\n- 2 para vermelho\n- 3 para laranja\n- 4 para amarelo\n- 5 para verde\n- 6 para azul\n- 7 para violeta\n- 8 para dourado\n- 9 para prateado"));
            cor4 = parseInt(prompt("Digite a cor da quarta faixa:\n- 0 para marrom\n- 1 para vermelho\n- 2 para verde\n- 3 para azul\n- 4 para violeta\n- 5 para cinza\n- 6 para dourado\n- 7 para prateado"));
            break;
        case 5:
            cor1 = parseInt(prompt("Digite a cor da primeira faixa:\n- 0 para preto\n- 1 para marrom\n- 2 para vermelho\n- 3 para laranja\n- 4 para amarelo\n- 5 para verde\n- 6 para azul\n- 7 para violeta\n- 8 para cinza\n- 9 para branco")*100);
            cor2 = parseInt(prompt("Digite a cor da segunda faixa:\n- 0 para preto\n- 1 para marrom\n- 2 para vermelho\n- 3 para laranja\n- 4 para amarelo\n- 5 para verde\n- 6 para azul\n- 7 para violeta\n- 8 para cinza\n- 9 para branco")*10);
            cor5 = parseInt(prompt("Digite a cor da terceira faixa:\n- 0 para preto\n- 1 para marrom\n- 2 para vermelho\n- 3 para laranja\n- 4 para amarelo\n- 5 para verde\n- 6 para azul\n- 7 para violeta\n- 8 para cinza\n- 9 para branco"));
            cor3 = parseInt(prompt("Digite a cor da quarta faixa:\n- 0 para preto\n- 1 para marrom\n- 2 para vermelho\n- 3 para laranja\n- 4 para amarelo\n- 5 para verde\n- 6 para azul\n- 7 para violeta\n- 8 para dourado\n- 9 para prateado"));
            cor4 = parseInt(prompt("Digite a cor da quinta faixa:\n- 0 para marrom\n- 1 para vermelho\n- 2 para verde\n- 3 para azul\n- 4 para violeta\n- 5 para cinza\n- 6 para dourado\n- 7 para prateado"));
            break;

    }

    if (cor3 >= 0 && cor3 <= 7) {
        cor3 = 10**cor3
    } else if (cor3 == 8) {
        cor3 = 0.1
    } else if (cor3 == 9) {
        cor3 = 0.01
    } else {
        console.log("Algo deu errado, tente novamente.")
    }

    switch(cor4){

        case 0:
            cor4 = 1;
            break;
        case 1:
            cor4 = 2;
            break;
        case 2:
            cor4 = 0.5;
            break;
        case 3:
            cor4 = 0.25;
            break;
        case 4:
            cor4 = 0.1;
            break;
        case 5:
            cor4 = 0.05;
            break;
        case 6:
            cor4 = 5;
            break;
        case 7:
            cor4 = 10;
            break;
        default:
            console.log("Algo deu errado. Tente novamente.")
            break;
            
    }

    if(id == 4){
        cor2 += cor1
        cor2 *= cor3
        
        if(cor2 < 1000){
            console.log("A resistência do resistor mede ",cor2," Ω.\nA tolerância é de ",cor4,"%.")
        } else if (cor2 < 10**6){
            cor2 /= 1000
            console.log("A resistência do resistor mede ",cor2," KΩ.\nA tolerância é de ",cor4,"%.")
        } else if (cor2 < 10**9){
            cor2 /= 10**6
            console.log("A resistência do resistor mede ",cor2," MΩ.\nA tolerância é de ",cor4,"%.")
        } else {
            cor2 /= 10**9
            console.log("A resistência do resistor mede ",cor2," BΩ.\nA tolerância é de ",cor4,"%.")
        }

    } else if(id == 5){
        cor5 += cor1
        cor5 += cor2
        cor5 *= cor3

        if(cor5 < 1000){
            console.log("A resistência do resistor mede ",cor5," Ω.\nA tolerância é de ",cor4,"%.")
        } else if (cor5 < 10**6){
            cor5 /= 1000
            console.log("A resistência do resistor mede ",cor5," KΩ.\nA tolerância é de ",cor4,"%.")
        } else if (cor5 < 10**9){
            cor5 /= 10**6
            console.log("A resistência do resistor mede ",cor5," MΩ.\nA tolerância é de ",cor4,"%.")
        } else {
            cor5 /= 10**9
            console.log("A resistência do resistor mede ",cor5," BΩ.\nA tolerância é de ",cor4,"%.")
        }
    } else {
        console.log("Algo deu errado. Tente novamente.")
    }
}