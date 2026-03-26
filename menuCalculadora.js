let id = 1

while(id != 0) {

    id = parseInt(prompt("Digite um ID para realizar um cálculo (respostas no console):\n- 0 para sair;\n- 1 para calcular múltiplos e submúltiplos;\n- 2 para calcular o consumo de um eletrodoméstico;\n- 3 para implementar a Lei de Ohm;\n- 4 para calcular a resistência de um resistor;\n- 5 para calcular a potência de um circuito."));

    switch(id) {
        case 1:
            mulSub();
            break;
        case 2:
            consume();
            break;
        case 3:
            ohmLaw();
            break;
        case 4:
            resistor();
            break;
        case 5:
            potencia();
            break;
        default:
            console.log("Escreva um ID válido.")
            break;
    }
}