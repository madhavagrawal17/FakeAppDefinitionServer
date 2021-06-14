const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var fs = require('fs');
const samplesDir = "./samples/";
var manifestDict = {};

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

app.get('/getentitlement',(req, res, next) => {
    var manifests = Object.values(manifestDict);
    console.log(manifests);
    res.json(manifests);
});

app.get("/getapp", (req, res, next) => {
    for(var key in manifestDict) {
        // do something with "key" and "value" variables
      }
});

app.post("/submit", (req, res, next) => {
    console.log(req.body);
    try {
        const manifest = JSON.parse(req.body);
        if (manifest.id) {
            manifestDict[manifest.id] = manifest;
            res.body(manifest.id);
        }
    }
    catch (err) {
        console.log(`Err: ${err}`);
    }
});

init();
app.listen(3000 || process.env.PORT, () => {
  console.log("Server listening on port 3000");
})