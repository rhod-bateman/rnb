// USing ES5 to support webpack
// using process.env.PORT to support elastic beanstalk.
var publicLocation = "./public";

var config = {
    "server":{
        "port": process.env.PORT,
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
