var generator = require('mongoose-gen');
var mongoose = require('mongoose');
var fs = require('fs');

// load json
// var data = fs.readFileSync('./models/manifest.model.json', {encoding: 'utf8'});

// // Generate the Schema object.
// var metaOSSchema = new mongoose.Schema(generator.convert(metaOSJson));

// // Connect to mongodb and bind the book model.
// mongoose.connect('mongodb://localhost:27017/test-mongoose-gen');

// let mongoose = require('mongoose')
// let MetaOSModel = require('./models/manifest.js')
// mongoose.connect('mongodb://localhost/testdb').then(() => {
// console.log("Connected to Database");
// }).catch((err) => {
//     console.log("Not Connected to Database ERROR! ", err);
// });

let manifestSchema = mongoose.Schema({
    "id": {
      "type": "String"
    },
    "version": {
      "type": "String"
    },
    "name": {
      "short": {
        "type": "String"
      },
      "long": {
        "type": "String"
      }
    },
    "description": {
      "short": {
        "type": "String"
      },
      "long": {
        "type": "String"
      }
    },
    "icons": {
      "outline": {
        "type": "String"
      },
      "color": {
        "type": "String"
      }
    },
    "accentColor": {
      "type": "Date"
    },
    "publisher": {
      "name": {
        "type": "String"
      },
      "webSiteUrl": {
        "type": "String"
      },
      "privacyUrl": {
        "type": "String"
      },
      "termsOfUseUrl": {
        "type": "String"
      },
      "supportUrl": {
        "type": "String"
      }
    },
    "localization": {
      "defaultLanguage": {
        "type": "String"
      },
      "additionalLanguages": {
        "type": [
          "Mixed"
        ]
      }
    },
    "extension": {
      "requirements": {
        "scopes": {
          "type": [
            "String"
          ]
        },
        "capabilities": {
          "type": [
            "Mixed"
          ]
        }
      },
      "runtimes": {
        "type": [
          "Mixed"
        ]
      },
      "ribbons": {
        "type": [
          "Mixed"
        ]
      },
      "contextMenus": {
        "type": [
          "Mixed"
        ]
      },
      "keyboards": {
        "type": [
          "Mixed"
        ]
      }
    }
  }, { collection: 'manifest' })
let MetaOSModel = mongoose.model('MetaOS', manifestSchema)

module.exports = MetaOSModel