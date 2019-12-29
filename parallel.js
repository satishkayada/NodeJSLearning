var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var Async = require('async')
Async.parallel(
    [
        function (callback) {
            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db("testdb");
                dbo.collection("customers").find().toArray(function (err, result) {
                    var reply = {
                        error: "No Data Found"
                    }
                    if (result.length > 0) {
                        callback(null, result);
                    }
                    else {
                        callback(reply, null);
                    }
                })
            }
            )
        },
        function (callback) {
            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db("testdb");
                dbo.collection("customers").find().toArray(function (err, result) {
                    var reply = {
                        error: "No Data Found"
                    }
                    if (result.length > 0) {
                        callback(null, result);
                    }
                    else {
                        callback(reply, null);
                    }
                })
            }
            )
        }
    ],
    function (err, results) {
        if (err) {
            console.log(err);
        } else {
            console.log(results)
        }
    });