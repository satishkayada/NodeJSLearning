var Async = require('async')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
function createdata() {
  console.log("enter in constructior functtion create data()");
}
createdata.prototype.upsertFruitsDetails = function (payLoad, name, maincallback) {
  Async.parallel(
    [
      (callback) => {
        createdata.prototype.getFruitDetail(name, (err, responce) => {
          console.log('function Get called')
          callback(err, responce)
        })
      },
      (callback) => {
        var res = [];
        createdata.prototype.saveFruitDetails(payLoad, (err, responce) => {
          console.log('function Save called')
          if (err) {
            console.log(err)
            callback(null, err)
          }
          else {
            callback(null, responce.ops)
          }
        })
      }
    ], (err, responce) => {
      maincallback(null, responce[1])
    }
  )
}
createdata.prototype.saveFruitDetails = function (payLoad, callback) {
  console.log("enter in fruit details");
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("testdb");
    var query = { name: payLoad.name };
    console.log(query);
    dbo.collection("customers").find(query).toArray(function (err, result) {
      var reply = {
        error: "Object exists"
      }
      if (result.length > 0) {
        callback(reply);
      }
      else {
        dbo.collection("customers").save(payLoad, function (err, response) {
          if (err) {
            console.log("error----->", err)
            callback(null, err);
          }
          else {
            console.log("1 document inserted");
            db.close();
            callback(null, response);
          }
        }
        )
      }
    })
  }
  )
};

createdata.prototype.getFruitDetail = function (pName, callback) {
  MongoClient.connect(url, { useUnifiedTopology: true }).then(function (db) {
    var dbo = db.db("testdb");
    var query = (pName) ? { name: pName } : "";
    var reply = {
      error: "No Data Found"
    }
    dbo.collection("customers").find(query).toArray(function (err, result) {
      if (result.length > 0) {
        callback(null, result);
      }
      else {
        callback(reply, null);
      }
    }
    )
  }
  ).catch((err) => {
    callback(err)
  })
};
module.exports.Createdata = createdata