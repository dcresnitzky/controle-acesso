const fs = require("fs");
const path = require("path");

const router = require('express').Router();

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        require(path.join(__dirname, file))(router);
    });

module.exports = router;