const prompt = require("prompt-sync")();

let user = prompt("Digite seu usuário: ")
let senha = Number(prompt("Digite sua senha: "));
if (user == "Pedro" && senha == 12345) {
    console.log("Acesso autorizado") 
} else {
    console.log("Acesso negado")
}

