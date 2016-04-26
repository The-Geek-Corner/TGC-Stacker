var express = require("express");
var app     = express();

app.use("/", express.static(__dirname + '/client'));

app.listen(process.env.PORT || 3000, process.env.IP || "120.0.0.1", (err) => {
    if (err){
        console.log(err);
        throw err;
    }
});