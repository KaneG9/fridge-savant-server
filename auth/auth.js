const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function(req, res, next) {
    const header = req.header('Authorization')

    if(!header){
        return res.status(401).json({msg: 'No token ,authorization denied'});
    }
    

    try {
        const token = header.split("Bearer ")[1]
        const decoded = jwt.verify(token, process.env.jwtSecret);
        req.user = decoded.user;
        next()
    } catch (error) {
        res.status(401).json({msg: 'Token is not valid'});
    }
}