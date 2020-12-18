var stages = {
    0:{
        descricao:"Boas Vindas",
        obj: require("./stages/0")
    },
    1:{
        descricao:"Opcoes",
        obj: require("./stages/1")
    },
    2:{
        descricao:"Informacao",
        obj: require("./stages/2")
    },
    3:{
        descricao:"Contato",
        obj: require("./stages/3")
    },
    4:{
        descricao:"Encerramento",
        obj: require("./stages/4")
    }
}

exports.step = stages;

// if (message.body === 'oi' && message.isGroupMsg === false) {
//     client
//       .sendText(message.from, 'opa! sou o WhatsApp Robot da iBridge e estou em desenvolvimento!')
//       .then((result) => {
//         console.log('Result: ', result); //return object success
//       })
//       .catch((erro) => {
//         console.error('Error when sending: ', erro); //return object error
//       });
//   }