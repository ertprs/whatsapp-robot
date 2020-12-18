// Supports ES6
// import { create, Whatsapp } from 'venom-bot';

const venom = require('venom-bot');
const banco = require("./banco")
const stages = require("./stages")

// (async () => {
//     const db = require("./db")
//     // await db.full_group_by();
//     const clientes = await db.selectLogs();
//     console.log(clientes)
// }) ();

// let resp = stages.step[getStage("554896213107@c.us")].obj.execute();
// for (let index = 0; index < Array(resp).length; index++) {
//   const element = Array(resp)[index];
//   console.log(element)
// } 

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    let resp = stages.step[getStage(message.from)].obj.execute(message.from, message.body);
    for (let index = 0; index < resp.length; index++) {
      const element =resp[index];
      client.sendText(message.from, element)
    }   
  });
}

function getStage(user){
  //CASO EXISTA ESSE NUMERO NO BANCO
  if( banco.db[user]) {
    return banco.db[user].stage
  } else {
  //CASO SEJA A PRIMEIRA VEZ DO NÚMERO
    banco.db[user] = {
      stage: 0,
      itens: [],
    }
  }
    return banco.db[user].stage;
}





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