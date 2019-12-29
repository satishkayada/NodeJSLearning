var unirest = require("unirest");
//https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=LP7GHEOQFT1KPUYGZ
var req = unirest("GET", "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=LP7GHEOQFT1KPUYGZ/");
req.end(function (res) {
    if (res.error) throw new Error(res.error);
    var Obj = res.body
    var SubObj = Obj["Meta Data"]
    console.log(SubObj);
});
