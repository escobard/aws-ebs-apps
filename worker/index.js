const keys = require('./keys'),
redis = require('redis'),

redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
}),

sub = redisClient.duplicate();

// recursive solution for fib algo since its slower
function fib(index){
    if (index < 2) return 1;
    return fib(index - 1) + fib(index-2);
}

// creates a new set of data for each redis update, calculating a new fib value
sub.on('message', (channel, message) =>{
    redisClient.hset('values', message, fib(parseInt(message)));
})