var stages = {
    0:{
        descricao:"Boas Vindas! Você está no estágio 0",
        obj: require("./stages/0")
    },
    1:{
        descricao:"Intranet",
        obj: require("./stages/1")
    }
//     2:{
//         descricao:"Cliente",
//         obj: require("./stages/2.js")
//     },
//     3:{
//         descricao:"Outros",
//         obj: require("./stages/3.js")
//     },
//     4:{
//         descricao:"Encerrar",
//         obj: require("./stages/4.js")
//     }
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