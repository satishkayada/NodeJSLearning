const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var insertdata = require('./create-data').Createdata

var dbop = new insertdata();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!')

)
app.post('/fruits/Save/V1', (req, res) => {
    console.log(req.body);
    dbop.saveFruitDetails(req.body, function (err, responce) {
        console.log('Save');
        res.send(responce);
    });
}
)

app.post('/fruits/upsert/V1', (req, res) => {
    console.log(req.body);
    let _name = req.query.name;
    dbop.upsertFruitsDetails(req.body, _name, function (err, responce) {
        res.send(responce);
    });
}
)

app.get('/fruits/get/V1', (req, res) => {
    let _name = req.query.name;
    if (_name) {
        console.log(_name);
    }
    dbop.getFruitDetail(_name, function (err, responce) {
        if (err) {
            res.send(err)
        }
        res.send(responce);
    });
}
)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))