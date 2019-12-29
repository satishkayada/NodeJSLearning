var Client = require('node-rest-client').Client;
var Url = "";
var client = new Client();
var mycallback = function (data, response) {
    console.log(JSON.stringify(data));
};
Url = "http://localhost:3000/fruits/get/V1"
client.registerMethod('Getfruits', Url, "GET")
client.methods.Getfruits(mycallback);
