const bcrypt = require("bcrypt");


const hashPassword = async(password) => {
    const saltround = 10;
    const hashedPassword = await bcrypt.hash(password, saltround);
    return hashedPassword;
}

const verifyPassword = async(plainPassword,hashedPassword) => {
    const isVerified = await bcrypt.compare(plainPassword,hashedPassword);
    return isVerified;
}


module.exports = {
    hashPassword,
    verifyPassword
}