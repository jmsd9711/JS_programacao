lista= ["Gervronilson", "Estrada A", "Linha B", 1880, 18.5,true]

alert(lista)

// Exibir elemento da lista percorrendo com laço de repetição e inserindo ps dados no HTML

for(var i=0; i<lista.length; i++){
    document.write("<h2>"+ lista[i]+ "</h2>")
}

// Adicionar elemento ao fim da lista

lista.push("84500-000")

alert(lista)

// remover o ultimo elemento

lista.pop()
alert(lista)

// remover o primeiro elemento da lista

lista.shift()
alert(lista)

// adicionar item como primeiro elemento da lista

lista.unshift("Gervonesio")
alert(lista)