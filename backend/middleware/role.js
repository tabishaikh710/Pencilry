const jwt = require("jsonwebtoken");
const Blacklist = require("../models/blacklist");

const verifyTokenAndAuthorizeRoles = (allowedRoles) => {
  return async (req, res, next) => {
    try {
      // 1. Extract token from headers/body/query
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
          message: "Token is required for authentication",
        });
      }

      // 2. Validate token format (Bearer scheme)
      const [scheme, bearerToken] = rawToken.split(" ");
      if (scheme !== "Bearer" || !bearerToken) {
        return res.status(403).json({
          success: false,
          message: "Invalid token format",
        });
      }

      // 3. Check if token is blacklisted
      const blacklisted = await Blacklist.findOne({ token: bearerToken });
      if (blacklisted) {
        return res.status(401).json({
          success: false,
          message: "Session expired. Please log in again.",
        });
      }

      // 4. Decode and verify the token
      const decoded = jwt.verify(bearerToken, process.env.SECRET_KEY);
      if (!decoded?.id) {
        return res.status(401).json({
          success: false,
          message: "Invalid token payload",
        });
      }

      // 5. Attach user data to the request
      req.user = { _id: decoded.id, role: decoded.role };

      // 6. Enforce role-based authorization
      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({
          success: false,
          message: "Access denied: Insufficient permissions",
        });
      }

      next();
    } catch (error) {
      console.error("Token verification error:", error.message);
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({
          success: false,
          message: "Token expired. Please log in again.",
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