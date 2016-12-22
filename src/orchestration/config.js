// USing ES5 to support webpack
var publicLocation = "./public";
var config = {
    "server":{
        "port":8080
    },
    "build": {
        "indexHtmlLocation": "./index.html",
        "publicLocation":publicLocation,
        "jsDirectory":publicLocation+"/js",
    }
};


module.exports = config;
