const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var fs = require('fs');
const samplesDir = "./samples/";
var manifestDict = {};
var globalApdativeCardJSon;

function init(){
    var files = fs.readdirSync(samplesDir);
    for (const file of files) {
        const stat = fs.statSync(samplesDir+file);
        if (stat.isFile()) {
            const rawdata = fs.readFileSync(samplesDir+file);
            try {
                const manifest = JSON.parse(rawdata);
                if (manifest.id) {
                    manifestDict[manifest.id] = manifest;
                }
            }
            catch (err) {
                console.log(`Error working with ${file}. Err: ${err}`);
            }
        }
    }
}

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.get('/getentitlement',(req, res, next) => {
    console.log("AdaptiveCard:" + JSON.stringify(globalApdativeCardJSon));
    res.json(globalApdativeCardJSon);
});

app.get("/getapp", (req, res, next) => {
    console.log("AdaptiveCard:" + JSON.stringify(globalApdativeCardJSon));
    res.json(globalApdativeCardJSon);
});

app.post('/submit', function(req,res){
    console.log(req.body);
    globalApdativeCardJSon = JSON.parse(req.body.data);

    res.send("Sumitted!");
});

init();
app.listen(3000 || process.env.PORT, () => {
  console.log("Server listening on port 3000");
})