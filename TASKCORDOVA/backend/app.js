const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require("./routes/taskRoutes.js");
const app = express();
dotenv.config();
app.use(express.json());

app.use(
  cors({ 
    origin: "http://localhost:5173",
  })
);


app.use("/", routes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose.connect(process.env.CONN_URL,);

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});