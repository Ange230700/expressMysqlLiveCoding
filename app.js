const express = require('express');
const database = require('./database');

const app = express();

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.status(200).send('Hello');
});

app.get('/api/pokemons', async (req, res) => {
  try {
    const [pokemons] = await database.query('SELECT * FROM pokemon');
    res.status(200).send(pokemons);
  } catch (e) {
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/pokemons', (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    res.status(400).send('Name or description missing');
  }

  database.query('INSERT INTO pokemon (name, description) VALUES (?, ?)', [name, description])
    .then(([results]) => {
      const newPokemon = {
        id: results.insertId,
        name,
        description,
      };
      res.status(201).send(newPokemon);
    })
    .catch(() => {
      res.status(500).send('Internal Server Error');
    });
});

app.put('/api/pokemons/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    if (!name || !description || !id) {
      res.status(400).send('Name or description or id missing');
    }

    const [results] = await database.query('UPDATE pokemon SET name = ?, description = ? WHERE id = ?', [name, description, id]);

    if (results.affectedRows > 0) {
      const newPokemon = {
        id,
        name,
        description,
      };

      res.status(200).send(newPokemon);
    } else {
      res.status(404).send('Pokemon not found');
    }
  } catch (e) {
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/api/pokemons/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).send('Id missing');
    }

    const [results] = await database.query('DELETE FROM pokemon WHERE id = ?', [id]);

    if (results.affectedRows > 0) {
      res.status(200).send({ id });
    } else {
      res.status(404).send('Pokemon not found');
    }
  } catch (e) {
    res.status(500).send('Internal Server Error');
  }
});

module.exports = app;
