const dotenv = require("dotenv");
dotenv.config();

const authGuard = (req, res, next) => {
  // const token = req.headers.authorization;
  // if (!token) return res.status(401).json({ message: "Unauthorized" });
  // const decoded = jwt.verify(token, JWT_SECRET);
  // req.user = decoded;

  // console.log(req.user);
  next();
};

module.exports = authGuard