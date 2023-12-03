CREATE DATABASE IF NOT EXISTS pokedex;

USE pokedex;

DROP TABLE IF EXISTS pokemon;

CREATE TABLE
    pokemon (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    );

INSERT INTO
    pokemon (name, description)
VALUES
    (
        'Pikachu',
        'Pikachu is an Electric-type Pokémon introduced in Generation I.'
    ),
    (
        'Charmander',
        'Charmander is a Fire-type Pokémon introduced in Generation I.'
    ),
    (
        'Squirtle',
        'Squirtle is a Water-type Pokémon introduced in Generation I.'
    ),
    (
        'Bulbasaur',
        'Bulbasaur is a Grass/Poison-type Pokémon introduced in Generation I.'
    ),
    (
        'Chikorita',
        'Chikorita is a Grass-type Pokémon introduced in Generation II.'
    ),
    (
        'Cyndaquil',
        'Cyndaquil is a Fire-type Pokémon introduced in Generation II.'
    ),
    (
        'Totodile',
        'Totodile is a Water-type Pokémon introduced in Generation II.'
    ),
    (
        'Treecko',
        'Treecko is a Grass-type Pokémon introduced in Generation III.'
    ),
    (
        'Torchic',
        'Torchic is a Fire-type Pokémon introduced in Generation III.'
    ),
    (
        'Mudkip',
        'Mudkip is a Water-type Pokémon introduced in Generation III.'
    );