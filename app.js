var http = require("http");
var fs = require("fs");

function onRequest(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    // res.write("my servedddr");
    fs.readFile('./porn.json', null, function (error, data) {
        if (error) {
            res.writeHead(404, {
                'Content-Type': 'text/json'
            });
            res.write("file no found?");

        } else {

            res.write(data);
            res.end();

        }

    })
    // res.end();


}
http.createServer(onRequest).listen(8000);