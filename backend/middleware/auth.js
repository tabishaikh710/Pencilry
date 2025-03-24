const jwt = require("jsonwebtoken");
const Blacklist=require('../models/blacklist');

const verifyToken = async (req, res, next) => {
    console.log("Headers received:", req.headers); // Debugging all headers

    const token = req.headers.authorization || req.headers.Authorization || req.body.token || req.query.token ;
    console.log("Extracted Token:", token); // Debugging token extraction

    if (!token) {
        console.log("No token received");
        return res.status(403).json({
            success: false,
            message: "A token is required for authentication",
        });
    }

    try {
        const bearer = token.split(" ");
        if (bearer.length !== 2 || bearer[0] !== "Bearer") {
            console.log("Invalid token format:", token);
            return res.status(403).json({
                success: false,
                message: "Invalid token format",
            });
        }

        const bearerToken = bearer[1];

      const blacklistedToken= await  Blacklist.findOne({token:bearerToken});

      if(blacklistedToken){
        
        return res.status(400).json({
            success: false,
            msg:'this session has been expired, please login again'
        });

      }


        const decodedData = jwt.verify(bearerToken, process.env.SECRET_KEY);

        console.log("Decoded Token:", decodedData); // Debugging decoded token
        req.user = decodedData;
    } catch (error) {
        console.log("Token verification error:", error.message);
        return res.status(401).json({
            success: false,
            message: "Invalid token.",
        });
    }

    return next();
};

module.exports = verifyToken;
