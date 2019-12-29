var Async = require('async')
var fs = require('fs')
var filename = { dev: "index.js", prod: "index.js", prod: "index.js" }
var arrayFileData = {};
Async.forEachOf(filename, (file, key, callback) => {
    var filepath = __dirname + '\\' + file
    fs.readFile(filepath, (err, filedata) => {
        if (err) {
            callback(err)
        }
        arrayFileData[key] = JSON.parse(filedata);
    })

}, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('All File is process')
    }
})
