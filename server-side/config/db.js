const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
    user:"root",
    host :"localhost",
    password:"password",
    database:"scrapeddata",
    insecureAuth : true,
});

module.exports = db;