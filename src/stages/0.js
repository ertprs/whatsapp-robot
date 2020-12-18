const servicos = require("../servicos")

function execute() {

    let sistemas = "Favor digite o número do sistema para interação:\n"

    Object.keys(servicos.sistemas).forEach((value) => {
        let element = servicos.sistemas[value]
        sistemas +=  `${value} - ${element.descricao}\n`
    })
    return [
        "Olá! Sou o chatbot da iBridge e estou em desenvolvimento.. Você está no estágio 0..",
        sistemas
    ]
}

exports.execute = execute;