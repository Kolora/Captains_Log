const express = require("express");

require("dotenv").config();

const mongoConfig = require("./config");

const LogRoutes = require("./routes/LogRoutes");

const app = express();

const PORT = 8080;

mongoConfig();

const jsxEngine = require("jsx-view-engine");

const methodOverride = require("method-override");

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.use(methodOverride("_method"));

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

// routes
app.use("/logs", LogRoutes);

// "root" route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT, process.env.MONGO_URL);
});

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT, process.env.MONGO_URL);
});
