var express = require('express')
var bodyParser = require('body-parser')
var app = express()
const dbname= "testdb"
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

app.get('/', function (req, res) {
    res.send('Server is running')
  });

app.post('/putEmployee',jsonParser, function (req, res) {
    var configObject = req.body;
  
    var MongoClient = require('mongodb').MongoClient;
    var url="mongodb://localhost:27017/";
    var myobj = configObject;
    MongoClient.connect(url,{useUnifiedTopology: true}, (err,db) =>{
        if (err) throw err;
        var dbo = db.db(dbname);
        dbo.collection("employee").insert(myobj,(err,subres)=>{
            if (err) throw err;
            res.send(subres);
        })
    })
})

app.get('/getAllEmployee', function (req, res) {
    var MongoClient = require('mongodb').MongoClient;
    var url="mongodb://localhost:27017/";
    MongoClient.connect(url,{useUnifiedTopology: true}, (err,db) => {
        var dbo=db.db(dbname);
        dbo.collection("employee").find({}).toArray( function(err, result) {
            if (err) throw err;
            res.send(result);
            console.log(result);
            db.close();
        });
    })
})
app.listen(3001);
console.log('server Started port 3001');