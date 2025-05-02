const jwt = require("jsonwebtoken");
const Blacklist = require("../models/blacklist");

const verifyToken = async (req, res, next) => {
    console.log("Headers received:", req.headers);

    const token = req.headers.authorization || req.headers.Authorization || req.body.token || req.query.token;
    console.log("Extracted Token:", token);

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

        const blacklistedToken = await Blacklist.findOne({ token: bearerToken });
        if (blacklistedToken) {
            return res.status(401).json({
                success: false,
                msg: 'This session has expired. Please log in again.'
            });
        }

        // Verify the token and decode its payload
        const decodedData = jwt.verify(bearerToken, process.env.SECRET_KEY);
        console.log("Decoded Token:", decodedData);

        // Assign user data to req.user
        req.user = {
            _id: decodedData.id,    // Use decodedData.id (not decoded.id)
            role: decodedData.role  // Use decodedData.role (not decoded.role)
        };

        next();
    } catch (error) {
        console.log("Token verification error:", error.message);
        return res.status(401).json({
            success: false,
            message: "Invalid token.",
        });
    }
};

module.exports = verifyToken;