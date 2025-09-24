var frutas=[]
var f 
do{
    f = prompt("Digite a fruta")
    frutas.push(f)
    if(f==""){
        alert("Voce nao digitou nada, digite ou cancele")
        frutas.pop()
    }
}while(f!=null)

alert(frutas)

for(var i=0;i<frutas.length;i++){
    document.write("<h2>"+frutas[i]+"</h2>")
    frutas.pop()
}