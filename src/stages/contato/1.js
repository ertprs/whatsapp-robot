const servicos = require("../../servicos")
const banco = require('../../banco')

function execute(user, msg) {

    if(msg == "1") {
        banco.db[user].stage = "c-cadastro-1"
        return [
            "Muito bem.. vou te fazer algumas perguntas,,",
            "Por favor, qual o NOME do contato?"
        ]
    }

    if(msg == "2") {
        console.log('passou no 2')
    }
    
    return [
        //
    ]
}

exports.execute = execute;