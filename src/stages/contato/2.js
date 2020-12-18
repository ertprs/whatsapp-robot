const banco = require("../../banco")
const stages = (require("../../stages"))
function execute(user, msg) {

    console.log(msg)
    const nome = msg;

    if (msg === "*") {
        banco.db[user].stage = 0;
        return ["É uma pena..Até mais!"]
    }

    if (msg === "#") {
        banco.db[user].stage = "t-2";
        return [`Muito bem.. O número que será salvo para o ${nome}, será: ${msg.from}`]
    }

    // if(!servicos.carta[msg]) {
    //     return ["Número inválido. Informe um dos números apresentados.", 
    //     "Digite # para finalizar ou * para cancelar."]
    // }

    return [
        `O NOME é ${msg}?`,
        "Digite # para confirmar ou * para cancelar."    
    ]
}

exports.execute = execute;