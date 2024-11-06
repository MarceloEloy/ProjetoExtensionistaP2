const url = window.location.href
var localStorage = window.localStorage
    if(url.includes('file:///C:/Users/marco/Desktop/ProjetoExtensionista/ItemsChocolate.html')){
        // LEMBRAR DE TROCAR O URL NA MAQUINA DA FACULDADE
        var chocolate = document.getElementById("BotaoChocolate");
        localStorage = window.localStorage
        chocolate.addEventListener("click", () => {
            const lojachocolate1 = document.getElementById("lojachocolate1")
            const lojachocolate2 = document.getElementById("lojachocolate2")
            const lojachocolate3 = document.getElementById("lojachocolate3")
            const lojachocolate4 = document.getElementById("lojachocolate4")
            const lojachocolate5 = document.getElementById("lojachocolate5")
            const quantidadeChocolate = document.getElementById("quantidadeChocolate").value
            if(lojachocolate1.checked){
                console.log(lojachocolate1.value)
                localStorage.setItem("valorChocolate", lojachocolate1.value)
            }
            if(lojachocolate2.checked){
                console.log(lojachocolate2.value)
                localStorage.setItem("valorChocolate", lojachocolate2.value)
            }
            if(lojachocolate3.checked){
                console.log(lojachocolate3.value)
                localStorage.setItem("valorChocolate", lojachocolate3.value)
            }
            if(lojachocolate4.checked){
                console.log(lojachocolate4.value)
                localStorage.setItem("valorChocolate", lojachocolate4.value)
            }
            if(lojachocolate5.checked){
                console.log(lojachocolate5.value)
                localStorage.setItem("valorChocolate", lojachocolate5.value)
            }
            if(localStorage.getItem("valorChocolate") == null){
                window.alert("erro ao realizar compra")
                localStorage.setItem("valorChocolate", 0)
            }
            if(quantidadeChocolate != ""){
                const Jchocolate = {
                    item: "chocolate",
                    valor: localStorage.getItem("valorChocolate"),
                    quantidade: quantidadeChocolate
                }
                
                localStorage.setItem("Chocolate", JSON.stringify(Jchocolate))
             
            }
            else{
                window.alert("Falha ao adicionar item")
            }
        })}
    if(url.includes('file:///C:/Users/marco/Desktop/ProjetoExtensionista/ItemsBatata.html')){
        // LEMBRAR DE TROCAR O URL NA MAQUINA DA FACULDADE
        var Batata = document.getElementById("BotaoBatata");
        localStorage = window.localStorage
         Batata.addEventListener("click", () => {
        const lojaBatata1 = document.getElementById("lojaBatata1")
        const lojaBatata2 = document.getElementById("lojaBatata2")
        const lojaBatata3 = document.getElementById("lojaBatata3")
        const lojaBatata4 = document.getElementById("lojaBatata4")
        const lojaBatata5 = document.getElementById("lojaBatata5")
        const quantidadeBatata = document.getElementById("quantidadeBatata").value
        if(lojaBatata1.checked){
            console.log(lojaBatata1.value)
            localStorage.setItem("valorBatata", lojaBatata1.value)
        }
        if(lojaBatata2.checked){
            console.log(lojaBatata2.value)
            localStorage.setItem("valorBatata", lojaBatata2.value)
        }
        if(lojaBatata3.checked){
            console.log(lojaBatata3.value)
            localStorage.setItem("valorBatata", lojaBatata3.value)
        }
        if(lojaBatata4.checked){
            console.log(lojaBatata4.value)
            localStorage.setItem("valorBatata", lojaBatata4.value)
        }
        if(lojaBatata5.checked){
            console.log(lojaBatata5.value)
            localStorage.setItem("valorBatata", lojaBatata5.value)
        }
        if(localStorage.getItem("valorBatata") == null){
            window.alert("erro ao realizar compra")
            localStorage.setItem("valorBatata", 0)
        }
        if(quantidadeBatata != ""){
            const JBatata = {
                item: "Batata",
                valor: localStorage.getItem("valorBatata"),
                quantidade: quantidadeBatata
            };
            localStorage.setItem("Batata", JSON.stringify(JBatata))
            
        }
        else{
            window.alert("Falha ao adicionar item")
        }
})}
if(url.includes('file:///C:/Users/marco/Desktop/ProjetoExtensionista/ItemsMorango.html')){
    // LEMBRAR DE TROCAR O URL NA MAQUINA DA FACULDADE
    var Morango = document.getElementById("BotaoMorango");
    localStorage = window.localStorage
     Morango.addEventListener("click", () => {
    const lojaMorango1 = document.getElementById("lojaMorango1")
    const lojaMorango2 = document.getElementById("lojaMorango2")
    const lojaMorango3 = document.getElementById("lojaMorango3")
    const lojaMorango4 = document.getElementById("lojaMorango4")
    const lojaMorango5 = document.getElementById("lojaMorango5")
    const quantidadeMorango = document.getElementById("quantidadeMorango").value
    if(lojaMorango1.checked){
        console.log(lojaMorango1.value)
        localStorage.setItem("valorMorango", lojaMorango1.value)
    }
    if(lojaMorango2.checked){
        console.log(lojaMorango2.value)
        localStorage.setItem("valorMorango", lojaMorango2.value)
    }
    if(lojaMorango3.checked){
        console.log(lojaMorango3.value)
        localStorage.setItem("valorMorango", lojaMorango3.value)
    }
    if(lojaMorango4.checked){
        console.log(lojaMorango4.value)
        localStorage.setItem("valorMorango", lojaMorango4.value)
    }
    if(lojaMorango5.checked){
        console.log(lojaMorango5.value)
        localStorage.setItem("valorMorango", lojaMorango5.value)
    }
    if(localStorage.getItem("valorMorango") == null){
        window.alert("erro ao realizar compra")
        localStorage.setItem("valorMorango", 0)
    }
    if(quantidadeMorango != ""){
        const JMorango = {
            item: "Morango",
            valor: localStorage.getItem("valorMorango"),
            quantidade: quantidadeMorango
        };
        localStorage.setItem("Morango", JSON.stringify(JMorango))
        
    }
    else{
        window.alert("Falha ao adicionar item")
    }
})}
if(url.includes('file:///C:/Users/marco/Desktop/ProjetoExtensionista/ItemsSoda.html')){
    // LEMBRAR DE TROCAR O URL NA MAQUINA DA FACULDADE
    var Soda = document.getElementById("BotaoSoda");
    localStorage = window.localStorage
     Soda.addEventListener("click", () => {
    const lojaSoda1 = document.getElementById("lojaSoda1")
    const lojaSoda2 = document.getElementById("lojaSoda2")
    const lojaSoda3 = document.getElementById("lojaSoda3")
    const lojaSoda4 = document.getElementById("lojaSoda4")
    const lojaSoda5 = document.getElementById("lojaSoda5")
    const quantidadeSoda = document.getElementById("quantidadeSoda").value
    if(lojaSoda1.checked){
        console.log(lojaSoda1.value)
        localStorage.setItem("valorSoda", lojaSoda1.value)
    }
    if(lojaSoda2.checked){
        console.log(lojaSoda2.value)
        localStorage.setItem("valorSoda", lojaSoda2.value)
    }
    if(lojaSoda3.checked){
        console.log(lojaSoda3.value)
        localStorage.setItem("valorSoda", lojaSoda3.value)
    }
    if(lojaSoda4.checked){
        console.log(lojaSoda4.value)
        localStorage.setItem("valorSoda", lojaSoda4.value)
    }
    if(lojaSoda5.checked){
        console.log(lojaSoda5.value)
        localStorage.setItem("valorSoda", lojaSoda5.value)
    }
    if(localStorage.getItem("valorSoda") == null){
        window.alert("erro ao realizar compra")
        localStorage.setItem("valorSoda", 0)
    }
    if(quantidadeSoda != ""){
        const JSoda = {
            item: "Soda",
            valor: localStorage.getItem("valorSoda"),
            quantidade: quantidadeSoda
        };
        localStorage.setItem("Soda", JSON.stringify(JSoda))
        
    }
    else{
        window.alert("Falha ao adicionar item")
    }
})}
if(url.includes('file:///C:/Users/marco/Desktop/ProjetoExtensionista/ItemsPao.html')){
    // LEMBRAR DE TROCAR O URL NA MAQUINA DA FACULDADE
    var Pao = document.getElementById("BotaoPao");
    localStorage = window.localStorage
     Pao.addEventListener("click", () => {
    const lojaPao1 = document.getElementById("lojaPao1")
    const lojaPao2 = document.getElementById("lojaPao2")
    const lojaPao3 = document.getElementById("lojaPao3")
    const lojaPao4 = document.getElementById("lojaPao4")
    const lojaPao5 = document.getElementById("lojaPao5")
    const quantidadePao = document.getElementById("quantidadePao").value
    if(lojaPao1.checked){
        console.log(lojaPao1.value)
        localStorage.setItem("valorPao", lojaPao1.value)
    }
    if(lojaPao2.checked){
        console.log(lojaPao2.value)
        localStorage.setItem("valorPao", lojaPao2.value)
    }
    if(lojaPao3.checked){
        console.log(lojaPao3.value)
        localStorage.setItem("valorPao", lojaPao3.value)
    }
    if(lojaPao4.checked){
        console.log(lojaPao4.value)
        localStorage.setItem("valorPao", lojaPao4.value)
    }
    if(lojaPao5.checked){
        console.log(lojaPao5.value)
        localStorage.setItem("valorPao", lojaPao5.value)
    }
    if(localStorage.getItem("valorPao") == null){
        window.alert("erro ao realizar compra")
        localStorage.setItem("valorPao", 0)
    }
    if(quantidadePao != ""){
        const JPao = {
            item: "Pao",
            valor: localStorage.getItem("valorPao"),
            quantidade: quantidadePao
        };
        localStorage.setItem("Pao", JSON.stringify(JPao))
        
    }
    else{
        window.alert("Falha ao adicionar item")
    }
})}
    if (url.includes('file:///C:/Users/marco/Desktop/ProjetoExtensionista/ConclusaoCompra.html')){// LEMBRAR DE TROCAR O URL NA MAQUINA DA FACULDADE

        var botaomostrar = document.getElementById("BotaoConclusao")
        botaomostrar.addEventListener("click", () =>{
            const botaoconfirmar = document.getElementById("BotaoCompraConfirmar")
            botaoconfirmar.style.display = ("inline")
            var chocolate = JSON.parse(localStorage.getItem("Chocolate"))
            var morango = JSON.parse(localStorage.getItem("Morango"))
            var batata = JSON.parse(localStorage.getItem("Batata"))
            var soda = JSON.parse(localStorage.getItem("Soda"))
            var pao = JSON.parse(localStorage.getItem("Pao"))
            listaItems = [chocolate, batata, morango, soda, pao]
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
                    listaQuantidade.innerHTML = listaItems[i].quantidade
                    lista1.appendChild(listaItem)
                    lista2.appendChild(listaValor)
                    lista3.appendChild(listaQuantidade)}
            }
    })
}
const botaoconfirmar = document.getElementById("BotaoCompraConfirmar")
botaoconfirmar.addEventListener("click", () => {
    localStorage = window.localStorage
    localStorage.clear()
    window.alert("Compra realizada com sucesso!")
})