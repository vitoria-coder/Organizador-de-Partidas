const db = require('../config/db');
const Match = require('../models/match');

//criaçõesdeNovaspartidas//
exports.createMatch = (req, res) =>{
    const { title, date, location } = req.body;
    
    Match.create(title, date, location, (err, result) =>{
        if(err) return res.status(500).json({ error:err});
        res.status(201).json({ message: 'Partida criada com sucesso!'});
    });
};

//listagemdeTODASaspartidas//
exports.getAllMatches = (req,res) =>{
    Match.findAll((err, results) =>{
        if(err) return res.status(500).json({ error:err});
        res.status(200).json(results);
    });
};

//buscasPartidasporID;
exports.getMatchById = (req, res) =>{
    const { id } = req.params;

    Match.findById(id, (err, results) =>{
        if(err) return res.status(500).json({ error:err});
        if(results.length === 0)
            return res.status(404).json({ message: 'Partida não encontrada.'});

        res.status(200).json(results[0]);
    });
};

//atualizarUMApartida;
exports.updateMatch = (req, res) =>{
    const {id} = req.params;
    const{title, date, location} = req.body;

    Match.update(id, title, date, location, (err, results) =>{
        if(err) return res.status(500).json({error:err});
        res.status(200).json({ message: 'Partida atualizada com sucesso!'});
    });
};

//RemoveUMApartida;
exports.deleteMatch = (req,res) =>{
    const { id } = req.params;

    Match.delete(id, (err, results) =>{
        if(err) return res.status(500).json({error: err});
        res.status(200).json({message: 'Partida removida com sucesso!!'});
    });
};