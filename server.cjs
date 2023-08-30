const express = require("express");
const path = require("path");
var app = express();
var PORT = 3003;
app.use("/", express.static(path.join(__dirname, "public")));
app.get("/api/v1/", function (req, res) {
    res.json({
        message: "Welcome to sample API",
        success: true,
    });
});
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.listen(PORT, function () {
    console.log("App running on port ".concat(PORT));
});
