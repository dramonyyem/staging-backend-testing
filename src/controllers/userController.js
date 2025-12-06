exports.getUsers = (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
};

exports.getProfile = (req, res) => {
  res.json({
    name:"Yem Daramony",
    email:"daramony.ydm@gmail.com"
  });
}




