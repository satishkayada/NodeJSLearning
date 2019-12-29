var call = require('../Utility/').CallMS
var dbOp = new call();
var params = [{ "name": "satish" }]
var Headers = [{ "calling-entity": "UI" }]
var body = {}
dbOp.call('AUTH_MS_LOGIN', params, body, Headers, (error, response) => {
    if (error) console.log(error)
    else {
        console.log(response)
    }
});
