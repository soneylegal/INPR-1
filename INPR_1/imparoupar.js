const prompt = require("prompt-sync")()

let numero = Number(prompt("Digite o número: "))
if (numero % 2 == 0) {
    console.log("É par")
} else {
    console.log("É impar")
}