const jwt = require("jsonwebtoken");

require("../config/dotenvConfig");
 

const generateToken = (payload, expire) => {

  const JWT_SECRET = process.env.JWT_ACCESS_SECRET;
  

  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET not defined in environment variables!");
  }
  return jwt.sign(payload, JWT_SECRET, { expiresIn: expire });
};


const decoderJWT = (token) => {

  const JWT_SECRET = process.env.JWT_ACCESS_SECRET;

  const decode = jwt.verify(token, JWT_SECRET);

  return decode;
}

module.exports = {
    generateToken,
    decoderJWT
}; // export the function
