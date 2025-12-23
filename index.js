const express = require("express");
const cors = require("cors");
const corsConfig = require("./src/config/corsConfig");
const { port } = require("./src/config/dotenvConfig");
const privateRoutes = require("./src/routes/privateRoute");
const publicRoutes = require("./src/routes/publicRoute");
const { connectMongoDB } = require("./src/config/dbConfig");
const authGuard = require("./src/middleware/authGuard");
const app = express();
connectMongoDB();

app.use(cors(corsConfig));

app.use(express.json());

app.use("/", publicRoutes);


app.post("/user", (req, res) => {
  const data = req.body;

  res.json({ data });
});

app.get("/", (req, res) => res.send("hello backend!!"));

app.use("/", authGuard, privateRoutes);


// app.use(errorHandler());

app.listen(port, () => {
  console.log(`🚀 Server running on `);
});
