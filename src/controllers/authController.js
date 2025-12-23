// const { generateAccessToken } = require("../utils/jwtToken");
const { decode } = require("punycode");
const User = require("../models/User");
const VerifySession = require("../models/VerifySession");
const { hashPassword, verifyPassword } = require("../utils/convertPassword");
const { generateToken } = require("../utils/jwtToken");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { username, password, idToken } = req.body;

    if (idToken) {
      return res.json({
        status: true,
        idToken,
      });
    }
    const user = await User.findOne({ username: username });
    // if (!user) {
    //   return res.json({
    //     status: false,
    //   });
    // }
    // const isVerified = await verifyPassword(password, user.password);
    // if (!isVerified) {
    //   return res.json({
    //     status: false,
    //   });
    // }
    const payload = {
      _id: user._id,
    };
    const token = generateToken(payload);

    // const sessionId = crypto.randomBytes(32).toString("hex");

    // const verifySession = new VerifySession({
    //   sessionId: sessionId,
    //   payload: token,
    // });

    // await verifySession.save();

    return res.json({
      status: true,
      token,
    });
  } catch (error) {
    throw new Error("User not found !!");
  }
};

exports.postSignUp = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const hashedPassword = await hashPassword(password);

    const user = new User({
      username,
      password: hashedPassword,
      email,
    });

    await user.save();

    return res.json({
      status: true,
      message: "User created Successfully!!",
    });
  } catch (error) {
    throw new Error("User Create Failed !!");
  }
};

// exports.postCheckAccess = async (req, res) => {
//   try {
//     const { token } = req.body;

//     const hashedPassword = await hashPassword(password);

//     const user = new User({
//       username,
//       password: hashedPassword,
//       email,
//     });

//     await user.save();

//     return res.json({
//       status: true,
//       message: "User created Successfully!!",
//     });
//   } catch (error) {
//     throw new Error("User Create Failed !!");
//   }
// };
exports.postVerifySession = async (req, res) => {
  try {
    const { verify } = req.body;

    const user = jwt.decode(verify?.verifySession?.payload);

    const access_token = generateToken({ id: user?._id });
    const refresh_token = generateToken({ id: user?._id }, "30d");
    return res.json({
      status: true,
      access_token,
      refresh_token,
    });
  } catch (error) {
    throw new Error(error);
  }
};
