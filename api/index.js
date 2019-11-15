const {
    pgUser,
    pgHost,
    pgDatabase,
    pgPassword,
    pgPort,
    redisHost,
    redisPort
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

// Redis Client Setup
const redisInstance = require('redis');
const redis = redisInstance.createClient({
    host: redisHost,
    port: redisPort,
    // if we ever lose connection to Redis, retry to connect every second
    retry_strategy: () => 1000
})
const redisPublisher = redis.duplicate();

// Express route handlers
app.get('/', (req, res) => {
    res.send("Hi");
});

// returns our PG values
app.get('/values/all', async (req, res) =>{
    const values = await pg.query('SELECT * from values');

    // sends only the values, stripping redundant pg data
    req.send(values.rows);
})

// returns redis values
app.get('/values/current', async (req, res) =>{
    redis.hgetall('values', (err, values) => {
        res.send(values);
    })
})

app.post('/values', async (req, res) =>{
    const index = req.body.index;

    // for fib numbers larger than 40, to prevent catastrophic mem loads
    if(parseInt(index) > 40) {
        return res.status(422).send('Index too high');
    }
    
    // start of redis worker + pg logic

    // if no value has been calculated
    redis.hset('values', index, 'Nothing yet!');
    // inserts value
    redisPublisher.publish('insert', index);
    // saves in PG
    pg.query('INSERT INTO values(number) VALUES($1)', [index]);

    res.send({ working: true })
})

app.listen(5000, err => {
    console.log('Server listening on port 5000')
})