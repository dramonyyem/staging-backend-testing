const { json } = require("express");

exports.getUsers = (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
};

exports.getProfile = async(req, res) => {
  try {
    const user = req?.user;
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
