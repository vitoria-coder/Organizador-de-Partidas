const Confirmation = require('../models/confirmation');

//confirmaPresençaemUmapartida;
exports.confirmPresence = (req, res) =>{
    const {user_id, match_id} = req.body;

    Confirmation.confirm(user_id, match_id, (err, results) =>{
        if(err) return res.status(500).json({error:err});
        res.status(201).json({ message: 'Presença confirmada!'})
    });
};

//listaDeconfirmaçõesPorpartida
exports.getConfirmationsByMatch = (req, res) =>{
    const matchId = req.params.matchId;

    Confirmation.findByMatchId(matchId, (err, results) =>{
        if(err) return res.status(500).json({ error: err});
        res.status(200).json(results);
    });
};
