// USing ES5 to support webpack
// using process.env.PORT to support elastic beanstalk.
var publicLocation = "./";

var config = {
    app:{
        bundleName:"./static/client.js",
        title:"Beth and Rhod",
        css:"./static/client.css"
    },
    "server":{
        "port": process.env.PORT || 8080,
        timeout: 100000
    },
    "build": {
        "staticDir":"./static",
    },
    "googleMaps":{
        "apiKey":"AIzaSyCQO_WHOMY5mPJ8JAfpLdNwwUcwIC1BkS8"
    },
    email: {
        key:"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"
    }
};


module.exports = config;
