let id = parseInt(prompt("Digite um ID para realizar um cálculo (respostas no console):\n- 0 para sair;\n- 1 para calcular múltiplos e submúltiplos;\n- 2 para calcular o consumo de um eletrodoméstico;\n- 3 para implementar a Lei de Ohm;\n- 4 para calcular a resistência de um resistor."));

while(id != 0) {
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
    }
}