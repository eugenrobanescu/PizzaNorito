const express = require("express");
const path = require("path");
const foodRouter = require("./routes/foodRoutes");
const app = express();

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
});

app.use(express.json());

app.use(express.static(path.join("client2/dist/pizzaClient")));

app.use("/api/food", foodRouter);
app.get("/*", (req, res) =>
    res.sendFile(path.join("client2/dist/pizzaClient/index.html"))
);
module.exports = app;
