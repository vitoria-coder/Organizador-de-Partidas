const db = require ('../config/db');
const bcrypt = require('bcrypt');

//cadastranovosusuários&criptografaasenha
exports.register = (req, res) =>{
    const {name, email, password} = req.body;
    const hash = bcrypt.hashSync(password, 10);

  User.create(name, email, hash, (err, results) =>{
    if(err) return res.status(500).json({error:err});
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!'});
  });
   
};

//logindosusuários
exports.login = (req, res) =>{
    const {email, password} = req.body;

   User.findByEmail(email, (err, results) =>{
    if(err) return res.status(500).json({ error:err});
    if(results.length ===0)
        return res.status(401).json({ message: 'Usuário não encontrado.'});
    const user = results[0];
    const isValid = bcrypt.compareSync(password, user.password);

    if(!isValid)
        return res.status(401).json({ message: 'Senha incorreta.'});
        
    res.status(200).json({ message: 'Login bem-sucedido', user});
   });
};
