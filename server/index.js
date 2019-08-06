const {
    pgUser,
    pgHost,
    pgDatabase,
    pgPassword,
    pgPort
} = require('./keys'),

// expres
express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),

app = express();
app.use(cors());
app.use(bodyParser.json());

// postgress
const { Pool } = require('pg'),
pg = new Pool({
    user: pgUser,
    host: pgHost,
    database: pgDatabase,
    pasword: pgPassword,
    port: pgPort
})
pg.on('error', () => console.log('Lost PG connection'));

// postgress table
pg
    .query('CREATE TABLE IF NOT EXISTS values (number INT)')
    .catch(err => console.log(err));

