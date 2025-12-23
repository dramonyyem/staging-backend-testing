const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);

router.get("/products", (req, res) => {
  const data = [
    {
      id: "1",
      name: "Yem Daramony",
    },
    {
      id: "2",
      name: "Product Two",
    },
    {
      id: "3",
      name: "Product Three",
    },
  ];

  res.json(data);
});
module.exports = router