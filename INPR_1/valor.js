const prompt = require("prompt-sync")();

let valor = parseFloat(prompt("Qual o valor: "));
let tempo = parseFloat(prompt("Tempo: "));
let prestacao= valor+((valor*(8.5/100)*tempo))
console.log(prestacao)