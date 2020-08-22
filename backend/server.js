const express = require("express");
const cors = require("cors");
const app = express();
var mysql = require('mysql');

const PORT = 4000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'TodoApp'
});

//connect to database
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

app.get('/', (req, res) => {
    let sql = "SELECT * FROM todos";
    let query = connection.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});