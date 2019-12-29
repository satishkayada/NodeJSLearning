var Redis = require('ioredis')
var RedisClient = new Redis({
    port: 6379,
    host: "127.0.0.1",
    db: 0
})
function SetKey() {
    try {
        var keys =
            [
                {
                    key: 'AUTH_MS_LOGIN',
                    value:
                    {
                        url: 'http://localhost:4200/auth/login/$name/V1',
                        method: 'POST',
                        isbodyNull: false,
                        paramsCount: 1
                    }
                },
                {
                    key: 'CASH_MS_SAVE',
                    value:
                    {
                        url: 'http://localhost:6200/cash-ms/saveSession/:token/V1',
                        method: 'POST',
                        isbodyNull: false,
                        paramsCount: 1
                    }
                },
                {
                    key: 'CASH_MS_GET',
                    value:
                    {
                        url: 'http://localhost:6200/cash-ms/getSession/:token/V1',
                        method: 'GET',
                        isbodyNull: true,
                        paramsCount: 1
                    }
                }
            ]
        keys.forEach(element => {
            RedisClient.set(element['key'], JSON.stringify(element['value']));
            console.log(element)
        });
        console.log('Data Save')
    } catch (error) {
        console.log(error)
    }
}
SetKey()

