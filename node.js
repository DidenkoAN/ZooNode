const express = require("express");
const cors = require("cors");
const app = express();
const { sequelize } = require("./db");
const router = require("./router/index");

PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api", router);

const server = require("http").createServer(app);

const start = async () => {
  await sequelize.authenticate();
  await sequelize.sync();
  server.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
  });
};

start();
