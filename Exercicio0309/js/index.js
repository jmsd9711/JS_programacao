const nAleatorio = Math.floor(Math.random() * 101);
console.log(nAleatorio);

let palpite, tentativas = 0;

for (tentativas = 1; palpite !== nAleatorio; tentativas++) {
  palpite = parseInt(prompt("Digite um valor: "));

  if (palpite > nAleatorio) {
    alert("Seu palpite é maior que o número sorteado");
  } else if (palpite < nAleatorio) {
    alert("Seu palpite é menor que o número sorteado");
  } else {
    alert("Você acertou o valor!! " + nAleatorio + " em " + tentativas + " Tentativas");
  }
}