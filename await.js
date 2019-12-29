var Client = require('node-rest-client').Client;
async function getQuote() {
    var client = new Client();
    console.log('start getQuote')
    return new Promise(function (resolve, reject) {
        Url = "http://localhost:3000/fruits/get/V1"
        client.registerMethod('Getfruits', Url, "GET")
        client.methods.Getfruits(function (err, response) {
            if (err) {
                console.log('Error', err)
                reject(err);
            }
            else {
                resolve(response);
            }
        });
    })
}
async function main() {
    try {
        console.log('start main');
        var quote = await getQuote();
        console.log('Responce Come', quote);
    } catch (error) {
        console.log("error----->", error)
    }
}
main();