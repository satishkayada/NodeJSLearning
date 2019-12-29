var os = require('os')
var s = require('fs')
var path = require('path')
const directoryPath = path.join(__dirname);
console.log(path.join(__dirname, 'Files'))
s.readdir(directoryPath, (err, files) => {
    var ary = ['a', 'b', 'c']
    var type = typeof (ary)
    console.log(type)
})
