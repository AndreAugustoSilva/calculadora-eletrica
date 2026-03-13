//Calcular o consumo de um eletrodoméstico//

let item = prompt("Digite o nome do eletrodoméstico: ");
let horas = Number(prompt("Digite quantas horas o eletrodoméstico funciona por dia em média: "));
let potencia = Number(prompt("Deseja trabalhar com kW ou W (1 para kW e 2 para W)?"));
let consumoMensal;
if (potencia == 1){
    potencia = parseFloat(prompt("Digite a potência em Kw: "));
    consumoMensal = (potencia * horas) * 30;
} else if (potencia == 2){
    potencia = parseFloat(prompt("Digite a potência em Watts: "));
    consumoMensal = ((potencia * horas) * 30) / 1000;
} else console.log("Digite um valor válido.")
let taxa = parseFloat(prompt("Digite o preço por kWh da sua região: "))
let preco = consumoMensal * taxa;
console.log("O eletrodoméstico ",item," gasta ",consumoMensal.toFixed(2)," kWh por mês. Isso equivale a ",preco.toFixed(2),"R$ mensais.");