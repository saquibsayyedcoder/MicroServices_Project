// middleware/auth.js
const jwt = require("jsonwebtoken");

module.exports.auth = (req, res, next) => {
  try {
    let token;

    // 1. Check Authorization Bearer token
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // 2. Check HTTP-only cookie
    if (!token && req.cookies?.token) {
      token = req.cookies.token;
    }

    // If no token
    if (!token) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // { id: ... }

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
