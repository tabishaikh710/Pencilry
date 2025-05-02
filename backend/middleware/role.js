const jwt = require("jsonwebtoken");
const Blacklist = require("../models/blacklist");

const verifyTokenAndAuthorizeRoles = (roles) => {
  return async (req, res, next) => {
    try {
      const rawToken = (
        req.headers.authorization ||
        req.headers.Authorization ||
        req.body.token ||
        req.query.token ||
        ""
      ).trim();

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

      const blacklisted = await Blacklist.findOne({ token: bearerToken });
      if (blacklisted) {
        return res.status(401).json({
          success: false,
          message: "This session has expired. Please log in again.",
        });
      }

      const decoded = jwt.verify(bearerToken, process.env.SECRET_KEY);
      console.log("Decoded Token:", decoded);

      if (!decoded || !decoded.id) {
        return res.status(401).json({
          success: false,
          message: "Invalid token payload",
        });
      }

      req.user = { _id: decoded.id, role: decoded.role };
      console.log("User Role from Token:", req.user.role);

      if (roles.length > 0 && !roles.includes(req.user.role)) {
        return res.status(403).json({
          success: false,
          message: "Access denied: Insufficient role",
        });
      }

      next();
    } catch (error) {
      console.error("Token verification error:", error.message);
      if (error.name === "TokenExpiredError") {
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
};

module.exports = verifyTokenAndAuthorizeRoles;
