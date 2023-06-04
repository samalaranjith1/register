const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const cors = require("cors");
const router = require("./routes/routes");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.listen(9002, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port 9002");
});

// mongoose.set("useNewUrlParser", true);
// mongoose.set("useUnifiedTopology", true);

mongoose.connect("mongodb://127.0.0.1:27017/usersDB").catch((error) => {
  console.log(error);
});
checkDb();
function checkDb(error) {
  if (error) {
    console.log("Error connecting to DB");
  } else {
    console.log("Successfully connected to DB");
  }
}
app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.use(express.json());
app.use(router);
