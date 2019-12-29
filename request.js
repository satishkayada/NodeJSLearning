// var request = require('request');
// var options = {
//     url: 'http://localhost:6200/cash-ms/getSession/asdjfa-asdjfaksjdlkas-asldfasdf/V1',
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body)
//     }
// }
// request(options, callback);


var request = require('request');
var options = {
    method: 'POST',
    url: 'http://localhost:6200/cash-ms/saveSession/asdjfa-asdjfaksjdlkas-asldfasdf/V1',
    headers:
        { 'content-type': 'application/json' },
    body: { username: 'Vipul kayada', departmentcode: 34 },
    json: true
};
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body)
    }
}
request(options, callback);