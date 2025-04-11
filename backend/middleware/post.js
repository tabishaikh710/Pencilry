const jwt = require("jsonwebtoken");
const Blacklist = require('../models/blacklist');

const verifyToken = async (req, res, next) => {
    try {
      const rawToken = 
        req.headers.authorization || // Check for 'Authorization' header
        req.headers.Authorization || // Check for alternative capitalization
        req.body.token ||            // Check for 'token' in request body
        req.query.token;             // Check for 'token' in query parameters
  
      if (!rawToken) {
        return res.status(403).json({
          success: false,
          message: "A token is required for authentication",
        });
      }
  
      const [scheme, bearerToken] = rawToken.split(" ");
      if (scheme !== "Bearer" || !bearerToken) {
        return res.status(403).json({
          success: false,
          message: "Invalid token format",
        });
      }
  
      // Log the token being verified
      console.log("Token to verify:", bearerToken);
  
      // 3. Check blacklist
      const blacklisted = await Blacklist.findOne({ token: bearerToken });
      if (blacklisted) {
        return res.status(401).json({
          success: false,
          message: "This session has expired. Please log in again.",
        });
      }
  
      // 4. Verify token
      const decoded = jwt.verify(bearerToken, process.env.SECRET_KEY);
      console.log("Decoded Token:", decoded);
  
    // 5. Attach user data
if (!decoded || !decoded.id) {
    return res.status(401).json({
      success: false,
      message: "Invalid token payload",
    });
  }
  
  req.user = { _id: decoded.id }; // ✅ This will make _id available later
  next();
  
    } catch (error) {
      console.error("Token verification error:", error.message);
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({
          success: false,
          message: "Token has expired. Please log in again.",
        });
      }
  
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token",
      });
    }
  };

module.exports = verifyToken;
