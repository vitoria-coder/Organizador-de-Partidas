const Confirmation = require('../models/confirmation');

//CriaçãoNovaConfirmação
exports.createConfirmation = (req, res) => {
    const { match_id, user_name } = req.body;

    console.log('Dados recebidos na confirmação:', match_id, user_name);

    if(!match_id || !user_name){
        return res.status(400).json({error: 'match_id e user_nome são obrigatórios.'})
    }
    Confirmation.create(match_id, user_name, (err, result) =>{
        if(err){
            console.logo('Erro ao inserir informações:', err);
            return res.status(500).json({ error: err.sqlMessage || err.message || err});
        }

        console.log('Confirmação inserida com sucesso:', result);
        res.status(201).json({ message: 'Presença confirmada com sucesso!'});
    });
}

//ListaConfirmaçõesDePartidas
exports.getConfirmationsByMatchId = (req,res) =>{
    const { match_id } = req.params;

    Confirmation.findByMatchId(match_id, (err, results) =>{
        if(err) return res.status(500).json({error:err});
        res.status(201).json(results);
    });
};
