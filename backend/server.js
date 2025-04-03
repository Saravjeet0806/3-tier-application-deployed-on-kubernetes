const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "db",
    user: "root",
    password: "password",
    database: "testdb"
});

db.connect(err => {
    if (err) console.error("Database connection error:", err);
    else console.log("Connected to MySQL");
});

app.post("/api/data", (req, res) => {
    const { name } = req.body;
    db.query("INSERT INTO users (name) VALUES (?)", [name], (err) => {
        if (err) res.status(500).send(err);
        else res.send("Data inserted");
    });
});

app.get("/api/data", (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results);
    });
});

app.listen(5000, () => console.log("Server running on port 5000"));
