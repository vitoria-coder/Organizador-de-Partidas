const db = require('../config/db');

//novaspartidas
exports.create = (title, date, location, callback) =>{
    const query = 'INSERT INTO matches (title, date, location) VALUES  (?,?,?)';
    db.query(query, [title, date, location], callback);
};

//buscatodaspartidas
exports.findAll = (callback) =>{
    db.query('SELECT * FROM matches', callback);
};

//buscapartidaporID
exports.findById = (id, callback) =>{
    db.query('SELECT * FROM matches WHERE id = ?', [id], callback);
};

//atualizapartida
exports.update = (id, title, date, location, callback) =>{
    const query = 'UPDATE matches SET title = ?, date = ?, location = ? WHERE id = ?';
    db.query(query, [title, date, location, id], callback);
};

//removeUMApartida
exports.delete = (id, callback) => {
    db.query('DELETE FROM matches WHERE id = ?', [id], callback);
};