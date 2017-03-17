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
    },
    "build": {
        "staticDir":"./static",
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
