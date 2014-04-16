var connect = require("connect");
// var fs = require("fs");
// var file = "file.db";
// var exists = fs.existsSync(file);
// var sqlite3 = require("sqlite3").verbose();
// var db = new sqlite3.Database(file);

connect.createServer(
    connect.static(__dirname)
).listen(8080);


