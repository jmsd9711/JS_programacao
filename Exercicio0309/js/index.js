const nAleatorio = Math.floor(Math.random() * 101);
console.log(nAleatorio);

var palpite, tentativas = 1

palpite = parseInt(prompt("Digite um valor: "))

while(palpite!=nAleatorio){
    if(palpite>nAleatorio){
        alert("Seu palpite é maior que o número sorteado")
    }
    if(palpite<nAleatorio){
        alert("Seu palpite é menor que o número sorteado")
    }
    palpite = parseInt(prompt("Digite um novo valor: "))

    tentativas++
}
alert("Você acertou o valor!! "+nAleatorio+" em "+tentativas+" Tentativas")