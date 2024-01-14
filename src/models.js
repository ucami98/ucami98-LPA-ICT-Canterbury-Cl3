const mysql = require("promise-mysql");

const UsersSchema= new mysql.Schema({
    firstName: String,
    lastName: String,
    user: String,
    email: String,
    password: String,
    phone: Number,
    DoB: Date
})

module.exports =  mysql.model('users', UsersSchema )