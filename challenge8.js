const calcTip = function (conta) {
    return conta >=50 && conta <= 300 ? conta * 0.15 : conta * 0.2;
}

const contas = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totais = [];

for (let i = 0; i < contas.length; i++) {
    const tip = calcTip(contas[i]);
    tips.push(tip);
    totais.push(contas[i] + tip);
}

const calcAverage = function(arr) {
    let soma = 0;
    for(let i = 0; i < arr.length; i++) {
        //soma = soma + arr[i];
        soma += arr[i];
    }
    return soma / arr.length;
}

console.log(calcAverage(contas));
console.log(calcAverage(tips));
console.log(calcAverage(totais));