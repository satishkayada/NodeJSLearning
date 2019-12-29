var sql = require("mssql");
var config = {
    user: 'sa',
    password: 'optical',
    server: 'SATISH',
    database: 'TEST'
}

function SaveUser(payLoad, callback) {
    console.log("enter in fruit details");
    sql.connect(config, function (err) {
        var query = 'Select * From user_master';
        sql.query(query, function (error, result) {
            console.log(error, result)
            if (error) {
                callback(error)
            }
            else {
                callback(null, result)
            }
        })
    })
}
SaveUser(null, (err, result) => {
    console.log(result)
})


