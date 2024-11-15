const url = window.location.href
var localStorage = window.localStorage
var valorFinal = 0;
        var botaomostrar = document.getElementById("BotaoConclusao")
        botaomostrar.addEventListener("click", () =>{
            const botaoconfirmar = document.getElementById("BotaoCompraConfirmar")
            botaoconfirmar.style.display = ("inline")
            document.getElementById("precoTot").style.display = ("flex")
            var chocolate = JSON.parse(localStorage.getItem("Chocolate"))
            var morango = JSON.parse(localStorage.getItem("Morango"))
            var batata = JSON.parse(localStorage.getItem("Batata"))
            var soda = JSON.parse(localStorage.getItem("Soda"))
            var agua = JSON.parse(localStorage.getItem("Agua"))
            var pao = JSON.parse(localStorage.getItem("Pao"))
            var listaItems = [chocolate, batata, morango, soda, pao, agua]
            const lista1 = document.getElementById("lista1")
            const lista2 = document.getElementById("lista2")
            const lista3 = document.getElementById("lista3")
            while(lista1.firstChild){
                lista1.removeChild(lista1.firstChild)
            }
            while(lista2.firstChild){
                lista2.removeChild(lista2.firstChild)
            }
            while(lista3.firstChild){
                lista3.removeChild(lista3.firstChild)
            }
            for(i in listaItems){
                var listaItem = document.createElement("li")
                var listaValor = document.createElement("li")
                var listaQuantidade = document.createElement("li")
                if(listaItems[i] == null || listaItems[i] == undefined){i=i+1}
                else{listaItem.innerHTML = listaItems[i].item
                    listaValor.innerHTML = listaItems[i].valor
                    valorFinal += parseFloat(listaItems[i].valor * listaItems[i].quantidade) +0.0
                    listaQuantidade.innerHTML = listaItems[i].quantidade
                    lista1.appendChild(listaItem)
                    lista2.appendChild(listaValor)
                    lista3.appendChild(listaQuantidade)}
            }
            document.getElementById("precoTotal").innerHTML =  ("Valor Final: " + valorFinal)
    })
const botaoconfirmar = document.getElementById("BotaoCompraConfirmar")
botaoconfirmar.addEventListener("click", () => {
    localStorage = window.localStorage
    localStorage.clear()
    window.alert("Compra realizada com sucesso!")
})