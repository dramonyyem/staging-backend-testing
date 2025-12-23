const jwt = require("jsonwebtoken");

require("../config/dotenvConfig");

const generateToken = (payload, expire) => {
  const JWT_TOKEN = process.env.JWT_TOKEN;
  if (!JWT_TOKEN) {
    throw new Error("JWT_SECRET not defined in environment variables!");
  }
  const expiresIn = expire ? expire : "1h";

  return jwt.sign(payload, JWT_TOKEN, { expiresIn });
};

const decoderJWT = (token) => {
  const JWT_TOKEN = process.env.JWT_TOKEN;
  const decode = jwt.verify(token, JWT_TOKEN);
  return decode;
};

module.exports = {
  generateToken,
  decoderJWT,
}; // export the function
