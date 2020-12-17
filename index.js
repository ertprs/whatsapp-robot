// Supports ES6
// import { create, Whatsapp } from 'venom-bot';

const venom = require('venom-bot');

// (async () => {
//     const db = require("./db")
//     // await db.full_group_by();
//     const clientes = await db.selectLogs();
//     console.log(clientes)
// }) ();


// venom
//   .create()
//   .then((client) => start(client))
//   .catch((erro) => {
//     console.log(erro);
//   });

var banco = {
    user1:{
        stage:0
    },
    user2:{
        stage:2
    }
}

var stages = {
    0:{
        descricao:"Boas Vindas!",
        obj: require("./0.js")
    },
    1:{
        descricao:"Intranet",
        obj: require("./1.js")
    },
    2:{
        descricao:"Cliente",
        obj: require("./2.js")
    },
    3:{
        descricao:"Outros",
        obj: require("./3.js")
    },
    4:{
        descricao:"Encerrar",
        obj: require("./4.js")
    }
}

function getStage(user){
    return banco[user].stage
}

console.log(stages[getStage("user1")].obj.execute());
console.log(stages[getStage("user2")].obj.execute());

// function start(client) {
//   client.onMessage((message) => {
//     if (message.body === 'oi' && message.isGroupMsg === false) {
//       client
//         .sendText(message.from, 'opa! sou o WhatsApp Robot da iBridge e estou em desenvolvimento!')
//         .then((result) => {
//           console.log('Result: ', result); //return object success
//         })
//         .catch((erro) => {
//           console.error('Error when sending: ', erro); //return object error
//         });
//     }
//   });
// }

