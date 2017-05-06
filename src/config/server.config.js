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
    "aws":{
        "role":"arn:aws:iam::362995553964:role/rnbRole",
        "db":{
            "tableName":"test-app",
            "rsvpTopic":"arn:aws:sns:eu-west-2:362995553964:rnb-rsvp",
        }    ,
        "region":"eu-west-2"
    },
    "googleMaps":{
        "apiKey":"AIzaSyCQO_WHOMY5mPJ8JAfpLdNwwUcwIC1BkS8"
    },
    "documentDB": {
        host: process.env.HOST || "https://bethandrhod.documents.azure.com:443/",
        authKey: process.env.AUTH_KEY || "fMG3sjDryaLscRWVjLPRbucEtAoTafI4lOSpVUfQHMvEGODZUnVoX71IRBTqwLtlNtPTmnL9GtpczgQ8Q7OTUA==",
        databaseId: "ToDoList",
        collectionId: "Items"
    },
    email: {
        key:"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"
    }
};


module.exports = config;
