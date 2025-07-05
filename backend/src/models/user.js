const db = require('../config/db');

exports.create = (name, email, hashedPassword, callback) =>{
    const query = 'INSERT INTO users (username, email, password) VALUES (?,?,?)';
    db.query(query, [name, email, hashedPassword], callback);
};

//BUSCA POR UM USUÁRIO PELO E-MAIL(USADO NO LOGIN);
exports.findByEmail = (email, callback) =>{
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], callback);
};