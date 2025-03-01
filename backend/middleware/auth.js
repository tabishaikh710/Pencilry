const jwt =require('jsonwebtoken');

const verifyToken = (req, res, next) => {

    const config=process.env
    const token =req.body.token || req.query.token || req.headers["authorization"];
    
    if(!token){
        return res.status(403).json({
            success:false,
            message: "No token provided."});
    }
    try {
        
        const bearer= token.split()
        const bearerToken = bearer[1]
       
        const decodedData = jwt.verify(bearerToken, config.SECRET_KEY)




        
    } catch (error) {
        return res.status(401).json({
            success:false,
            message: "invalid token."});
    }

    return next();
}

module.exports = verifyToken;