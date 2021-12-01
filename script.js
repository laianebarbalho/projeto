function microondas(pratoCliente, tempoCliente) {
    let prato = pratoCliente;
    let tempoInicial = 0;

    if(prato == "pipoca") {
        return tempoInicial = 10; 
    } else if (prato == "macarrão") {
        return tempoInicial = 8;
    } else if (prato == "carne") {
        return tempoInicial = 15;
    } else if (prato == "feijão") {
        return tempoInicial = 12;
    } else if (prato == "brigadeiro"){
        return tempoInicial = 8;
    } else {
        return "Prato Inexistente! Por favor, escolha um prato válido";
    }

    switch(pratoCliente, tempoCliente) {
        case (tempoCliente < tempoInicial):
            return "Prato Pronto, Tempo insuficiente!"
    }
}

console.log(microondas("feijão", 12))

