# calculadora-eletrica
calculadora eletrica

Calculadora de Consumo de Eletrodomésticos

Este projeto consiste em uma aplicação simples em JavaScript para calcular o consumo mensal de energia de um eletrodoméstico, considerando a potência do aparelho e as horas de uso diário.

Funcionalidade

O programa solicita ao usuário:

O nome do eletrodoméstico.

O número de horas que o eletrodoméstico funciona por dia.

A unidade de medida da potência: kW ou W (Watts).

A potência do eletrodoméstico (em kW ou W, dependendo da escolha do usuário).

Com essas informações, o programa calcula o consumo mensal em kWh e o custo estimado com base em uma tarifa fictícia de R$ 0,90 por kWh. O resultado é exibido no console, indicando o consumo e o valor gasto mensalmente.

Como funciona

O usuário informa o nome do eletrodoméstico e as horas de uso diário.

O programa pergunta a unidade de medida da potência (kW ou W).

Dependendo da escolha do usuário, a potência será solicitada em kW ou W.

O cálculo do consumo mensal é realizado:

Se a potência estiver em kW: Consumo = Potência (kW) × Horas por dia × 30 dias.

Se a potência estiver em W: A potência será convertida para kW dividindo por 1000, e o cálculo será feito da mesma forma.

O custo mensal é calculado multiplicando o consumo mensal por R$ 0,90.

O resultado final é mostrado no console.

Exemplo de Execução
Entrada:
Digite o nome do eletrodoméstico: Ar-condicionado
Digite quantas horas o eletrodoméstico funciona por dia em média: 6
Deseja trabalhar com kW ou W (1 para kW e 2 para W)? 1
Digite a potência em Kw: 1.5
Saída:
O eletrodoméstico Ar-condicionado gasta 270.00 kWh por mês. Isso equivale a 243.00 R$ no mês.
Como usar

Clone o repositório:

git clone https://github.com/seuusuario/repository.git

Abra o arquivo index.html em um navegador da sua escolha. (Se você preferir rodar no console, coloque o código em um arquivo .js e execute com Node.js.)

Siga as instruções exibidas no prompt do navegador.

Tecnologias Utilizadas

JavaScript: A linguagem de programação utilizada para construir a lógica do cálculo.

Sinta-se à vontade para fazer um fork deste repositório, criar uma branch para implementar melhorias e enviar pull requests.