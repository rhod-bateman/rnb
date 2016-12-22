// USing ES5 to support webpack
var publicLocation = "./public";
var dev = process.env.NODE_ENV == 'development';

var config = {
    "server":{
        "port": dev ? 8080 : 80,
    },
    "build": {
        "indexHtmlLocation": "./client/index.html",
        "publicLocation":publicLocation,
        "jsDirectory":publicLocation+"/js",
    },
    "aws":{
        "role":"arn:aws:iam::362995553964:role/rnbRole",
        "db":{
            "tableName":"test-app",
            "rsvpTopic":"arn:aws:sns:eu-west-2:362995553964:rnb-rsvp",
        }    ,
        "region":"eu-west-2"
    }

};


module.exports = config;
