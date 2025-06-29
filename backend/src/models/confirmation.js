const db = require('../config/db');

//Confirmações
exports.create = (match_id, user_name, callback) =>{
    const query = 'INSERT INTO confirmations (match_id, user_name) VALUES (?,?)';
    console.log('Executando query:', query, 'com valores:', match_id, user_name);
    db.query(query,[match_id, user_name], callback);
};

//BuscaConfirmaçoẽsPorPartidas
exports.findByMatchId = (match_id, callback) => {
    const query = 'SELECT * FROM confirmations WHERE match_id =?';
    db.query(query,[match_id], callback);
};  