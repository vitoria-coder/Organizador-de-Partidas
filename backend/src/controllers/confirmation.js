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


exports.deleteConfirmation = (req,res) =>{
    const confirmationId = req.params.id;
    const userId = req.user.user_Id;

    Confirmation.findById(confirmationId, (err, result) =>{
        if(err) return res.status(500).json({ error:err});

        const confirmation = result[0];

        if(!confirmation){
            return res.status(404).json({ message: 'Confirmação não encontrada.'});
        }

        if(confirmation.user_Id !== userId){
            return res.status(403).json({ message: 'Você não tem permissão para excluir essa confirmação.'})
        }
        Confirmation.delete(confirmationId, (err) =>{
            if(err) return res.status(500).json({ error:err });
            res.status(200).json({ message: 'Confirmação excluída com sucesso.'})
        });
    });
};
