const express = require("express");
const dotenv = require("dotenv").config();
const phoneController = require("./controllers/phoneController.js");
const app = express();
const cors = require("cors");

require("./db");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //this helps to send data from postman to mongoDB



app.get("/", (req, res) => res.send("API is running  🌎 !!!"));
app.use("/mobile", phoneController);

const PORT = process.envPORT || 8000;
app.listen(PORT, () => console.log("Server is Connected on", PORT));
