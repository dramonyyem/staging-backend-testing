// const { generateAccessToken } = require("../utils/jwtToken");
const User = require("../models/User");
const { hashPassword, verifyPassword } = require("../utils/convertPassword");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username,password)
    // const user = await User.findOne({
    //   username: username,
    // });

    // consol.log(user);
    // if (!user) {
    //   return res.json({
    //     status: false,
    //   });
    //   // throw new Error("User not found !!");
    // }

    // const isVerified = await verifyPassword(password, user.password);

    // if (!isVerified) {
    //   return res.json({
    //     status: false,
    //   });
    //   // throw new Error("User not found !!");
    // }

  
    return res.json({
      status: true,
    });
  } catch (error) {
    throw new Error("User not found !!");
  }
};

exports.postSignUp = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const hashedPassword = await hashPassword(password);

    const user = await new User({
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
