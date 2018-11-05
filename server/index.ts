import express from 'express';
const events = require('../app/resources/data/events.json');

interface IItem {
    type: string
}

function msToTime(duration: number) {
    let seconds: number | string = Math.round((duration / 1000) % 60),
        minutes: number | string = Math.round((duration / (1000 * 60)) % 60),
        hours:   number | string = Math.round((duration / (1000 * 60 * 60)) % 24);

    hours =   (hours < 10)   ? "0" + hours   : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  }

const app = express();
const port = 8000;

const serverStartTime = Date.now();

let responseBody: any;
let thisStatus: number;

app.use('/api/events', (request: express.Request, response: express.Response, next: any) => {
    if (request.query.type) {
        const types = request.query.type.split(':');
        let filteredEvents;
        responseBody = {"events": []};

        if (types.length === 0) {
            thisStatus = 400;
            responseBody = '<p>Вы не указали ни одного типа событий.</p>';
            return;
        }

        thisStatus = 200;

        types.forEach((type: string) => {
            switch (type) {
                case 'info':
                    events.events.forEach((item: IItem) => {
                        if (item.type === 'info') responseBody.events.push(item);
                    });
                    break;
                    case 'critical':
                    events.events.forEach((item: IItem) => {
                        if (item.type === 'critical') responseBody.events.push(item);
                    });
                    break;
                default:
                    thisStatus = 400;
                    responseBody = 'Неверный тип события';
                    return;
            }
        });
    } else {
        thisStatus = 400;
        responseBody = 'Вы не указали ни одного типа событий!';
    }
    next();
})

app.get('/', (request: express.Request, response) => {
    response.status(200).sendFile('./index.html', {"root": __dirname});
});

app.get('/status',function(request: express.Request, response: express.Response, next: any){
    const duration = Date.now() - serverStartTime;
    const date = new Date(serverStartTime);
    const day = date.getDate();
    const month = date.getMonth() > 9 ? date.getMonth() + 1 : '0' + date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    const minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    response.send('<p>Сервер работает с ' + day + '.' + month + '.' + year + ', ' + hours + ':' + minutes + ', а это уже целых ' + msToTime(duration) + '!</p><p>Пожалуйста, не напрягайте сервер! Он ещё молодой...</p>')
});

app.get('/api/events', (request: express.Request, response: express.Response) => {
    thisStatus = thisStatus ? thisStatus : 200;
    response.status(thisStatus).json(responseBody);
});

app.get('/*', (request: express.Request, response: express.Response) => {
    response.status(404).send('<h1>Page not found</h1>');
});

app.use((err: express.Errback, request: express.Request, response: express.Response, next: any) => {
    // логирование ошибки, пока просто console.log
    console.log(err);
    response.status(500).send('Something broke!');
});

app.listen(port, (err: express.Errback) => {
    if (err) {
        return console.log('Error', err);
    }
    console.log(`server is listening on ${port}`);
})