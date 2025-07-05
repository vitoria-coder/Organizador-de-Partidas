const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET = process.env.JWT_SECRET;

module.exports = function (req, res, next){
    const token = req.headers['authorization'];

    if(!token) return res.status(401).json({ message: 'Token não fornececido.'});
    jwt.verify(token, SECRET, (err, decoded) =>{
        if(err) return res.status(401).json({ message:'Token inválido.'});

        req.user = decoded;
        next();
    })
}