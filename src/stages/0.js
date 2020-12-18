const servicos = require("../servicos")
const banco = require('../banco')


function execute(user, msg) {

    // console.log(user)

    if (msg === "1") {
        banco.db[user].stage = "c"
        return [
            "MENU CONTATOS\n----------------------\nPara CADASTRO, digite 1;\nPara CONSULTA, digite 2."
        ]
    }

    if (msg === "2") {
        banco.db[user].stage = 1
        return ["Vamos lá.. ok?"]
    }

    if (msg === "*") {
        banco.db[user].stage = 0
        return ["Tudo bem.. Até mais! "]
    }
    
    return [
        "Olá! Sou o assistente virtual da iBridge e estou em desenvolvimento.. ",
        "Caso queira conversar sobre contatos, digite 1..\nCaso queira informações sobre nossos sistemas, digite 2..",
        "Ou caso queira encerrar, digite *"
    ]
}

exports.execute = execute;