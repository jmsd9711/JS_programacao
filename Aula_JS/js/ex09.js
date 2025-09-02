var parcela, valor, quantidade

valor = parseFloat(prompt("Digite o valor da compra: "))
quantidade = parseInt(prompt("Digite a quantidade de parcelas: "))

parcela = valor/ quantidade

alert("o valor das parcelas é de: "+parcela)