const express = require("express");
const database = require("./database");

const app = express();

app.get("/api/hello", (req, res) => {
    res.status(200).send("Hello");
});

app.get("/api/pokemons", async (req, res) => {
    try {
        const [pokemons] = await database.query("SELECT * FROM pokemon;");
        res.status(200).send(pokemons);
    } catch(e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/api/pokemons", (req, res) => {
    const { name, description } = req.body;

    if(!name || !description) {
        return res.status(400).send("Name or description missing")
    }

    database.query("INSERT INTO pokemon (nom, description) VALUES (?, ?)", [name, description])
        .then(() => {

        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Internal Server Error")
        });
});

module.exports = app;