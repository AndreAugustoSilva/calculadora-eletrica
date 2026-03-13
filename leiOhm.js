//Calcular a Lei de Ohm//

function ohmLaw() {

    let id = parseInt(prompt("Digite qual valor você deseja descobrir (1 para tensão, 2 para resistência e 3 para corrente)"))
    let tensao = 0
    let resistencia = 0
    let corrente = 0

    if(id != 1){
        tensao = parseInt(prompt("Digite a tensao"))
    }
    if(id != 2){
        resistencia = parseInt(prompt("Digite a resistência"))
    }
    if(id != 3){
        corrente = parseInt(prompt("Digite a corrente"))
    }
    if(id == 1){
        tensao = resistencia * corrente
        console.log("A tensão é de ",tensao,"V.")
    }
    if(id == 2){
        resistencia = tensao / corrente
        console.log("A resistência é de ",resistencia,"Ohms.")
    }
    if(id == 3){
        corrente = tensao / resistencia
        console.log("A corrente é de ",corrente,"A.")
    }
}