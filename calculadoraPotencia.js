// Calcular a potência de um circuito elétrico //

function potencia() {
    let p, v, a;
    v = parseFloat(prompt("Digite a voltagem: "));
    a = parseFloat(prompt("Digite a amperagem: "));
    p = v * a;
    console.log("A potência mede " , p , "W.");
}