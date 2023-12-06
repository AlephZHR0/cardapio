function aumenta(id) {
    var element = document.getElementById(id);
    var value = parseFloat(element.value);
    if (isNumeric(value)) {
        value++;
        element.value = value;
    } else {
        value = 1;
        element.value = value;
    }
}

function diminui(id) {
    var element = document.getElementById(id);
    var value = parseFloat(element.value);
    if (value > 0 && isNumeric(value)) {
        value--;
        element.value = value;
    } else {
        value = 0;
        element.value = value;
    }
}

function isNumeric(value) {
    if (!isNaN(value)) {
        return true;
    }
    return false;
}

function finalizarPedido() {
    const whatsappEndpoint = "https://wa.me/";
    const numero = "5511953411693";
    const parametro = "/?text="
    let mensagemInicial = "Olá, tudo bem?\nSegue meu pedido:";
    let itensPedidos = "";
    let valorFinal = 0;
    let listaDeItens = document.getElementsByClassName("item")
    for (var i = 0; i < listaDeItens.length; i++) {
        let item = listaDeItens[i];
        quantidade = item.getElementsByTagName("input")[0].value;
        if (quantidade > 0) {
            nome = item.getElementsByClassName("nome-item")[0].textContent;
            let preco = item.getElementsByClassName("preco-item")[0].textContent;
            preco = parseFloat(preco.replace(/[^\d,]/g, '').replace(',', '.'));
            valorFinal += preco * quantidade;
            itensPedidos += `\n- ${quantidade} ${nome};`;
        }
    }
    if (itensPedidos == "") {
        alert("Você não selecionou nenhum item!");
        return;
    }
    valorFinal = `\n----------------------\nValor Final: R$${valorFinal.toFixed(2)}`
    let mensagemFinal = whatsappEndpoint + numero + parametro + encodeURIComponent(mensagemInicial + itensPedidos + valorFinal);
    // console.log(mensagemFinal);
    window.open(mensagemFinal);
}
