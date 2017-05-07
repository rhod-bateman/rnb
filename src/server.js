/**
 * Created by qtj929 on 20/12/2016.
 */
import express from 'express';
import session from 'express-session';
import config from './config/server.config';
import http from 'http';
import bodyParser from 'body-parser';
import path from 'path';
import sendgrid from 'sendgrid';
import serverRender from './server/index';



const app = express();
const sendgridInstance = sendgrid(config.email.key);

app.disable('x-powered-by');
app.use(session({ secret: 'secret'}));
app.use(bodyParser.json());

// Allow access to bundle.
app.use('/static', express.static(path.resolve(config.build.staticDir)));

// Temporary fix for a build issue
app.use('/images', express.static(path.resolve(config.build.staticDir, 'images')));


app.get('/', (req, res, next) => {

     let html = serverRender({});
     res.send(html);
    next();
});

app.post('/rsvp', (req, res, next) => {
    let data = req.body.form || {};
    let message = `
    Name: ${data.name}
    Answer: ${data.answer}
    Allergies: ${data.allergies}
    Songs: ${data.songs}`;


    var request = sendgridInstance.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: {
            personalizations: [
                {
                    to: [
                        {
                            email: 'bethandrhod@gmail.com'
                        }
                    ],
                    subject: 'RSVP'
                }
            ],
            from: {
                email: 'bethandrhod@gmail.com'
            },
            content: [
                {
                    type: 'text/plain',
                    value: message
                }
            ]
        }
    });

    sendgridInstance.API(request)
        .then(function (response) {
            res.status(200);
            res.json({success: true});
        })
        .catch(function (error) {
            console.log(error);
            res.status(500);
            res.send(error);
        });
});

app.post('/addSong', (req, res, next) => {
    res.status(200);
    res.json({success: true});
});


const options = {};

app.server = http.createServer(app);
app.server.listen(config.server.port);

export default app;
