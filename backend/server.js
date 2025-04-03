const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "db",
    user: "root",
    password: "rootpassword",
    database: "userdb"
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL database!");
});

app.post("/users", (req, res) => {
    const { name, email } = req.body;
    db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: "User added" });
    });
});

app.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
