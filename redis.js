var Redis = require('ioredis')
var RedisClient = new Redis({
    port: 6379,
    host: "127.0.0.1",
    db: 0
})

var RejObject = {
    port: 98998,
    host: "127.0.0.1",
    db: 0
}
RedisClient.set('satish', '{ "name": "satish", "age": 34 }')
RedisClient.get('satish', (err, responce) => {
    var Obj = responce;
    console.log("response----->", responce);
})

