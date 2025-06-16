const db = require('../config/db');

//confirmaçãodepresençadousuárioemumpartida
exports.confirm = (userId, matchId, callback) => {
    const query = 'INSERT INTO confirmations (user_id, match_id) VALUES (?,?)';
    db.query(query, [userId, matchId], callback);
};

//listadeconfirmaçõesdepresençaPORpartida
exports.findByMatchId = (matchId, callback) =>{
    db.query('SELECT * FROM confirmations WHERE match_id = ?', [matchId], callback);
};