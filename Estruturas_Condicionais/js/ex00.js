var nome, idade

nome = prompt("Digite seu nome: ")
idade = parseInt(prompt("Digite sua idade: "))

if(idade>=18){
    alert(nome+" você já pode tentar tirar a CNH")
}else{
    alert(nome+" você ainda não idade para tirar a CNH")
}