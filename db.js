async function connect() {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/ibridge_robot")
    console.log("Conectou no mysql... :) ")
    global.connection = connection
    return connection;
}
connect();




























async function listarTodosContatos() {
    const conn = await connect()
    return await conn.query('SELECT clientes.nome FROM contatos;')
}

async function full_group_by() {
    const conn = await connect()
    return await conn.query("SET sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));")
}



module.exports = {listarTodosContatos, full_group_by}