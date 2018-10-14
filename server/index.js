const express = require('express');
const events = require('../app/resources/data/events.json');

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = parseInt((duration / 1000) % 60),
      minutes = parseInt((duration / (1000 * 60)) % 60),
      hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  }

const app = express();
const port = 8000;

const serverStartTime = Date.now();

let responseBody;

app.use('/api/events', (request, response, next) => {
    if (request.query.type) {
        const types = request.query.type.split(':');
        let filteredEvents;
        responseBody = {"events": []};

        types.forEach(type => {
            switch (type) {
                case 'info':
                    events.events.forEach(item => {
                        if (item.type === 'info') responseBody.events.push(item);
                    });
                    break;
                    case 'critical':
                    events.events.forEach(item => {
                        if (item.type === 'critical') responseBody.events.push(item);
                    });
                    break;
                default:
                    responseBody = {"status": "400 - incorrect type"};
                    return;
            }
        });
    }
    next();
})

app.get('/', (request, response) => {
    response.send('<h1>Вас приветствует сервер на Express!</h1><p><a href="/status">Получить статус</a></p><p><a href="/api/events?type=info:critical">Получить события</a></p><p><a href="/api/events?type=wrongtype">Получить некорректные события</a></p><p><a href="/no_such_page">Неверная ссылка</a></p>');
});

app.get('/status',function(request, response, next){
    const duration = Date.now() - serverStartTime;
    const date = new Date(serverStartTime);
    const day = date.getDate();
    const month = date.getMonth() > 9 ? date.getMonth() + 1 : '0' + date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    response.send('<p>Сервер работает с ' + day + '.' + month + '.' + year + ', ' + hours + ':' + minutes + ', а это уже целых ' + msToTime(duration) + '!</p><p>Пожалуйста, не напрягайте сервер! Он ещё молодой...</p>')
});

app.get('/api/events', (request, response) => {
    response.json(responseBody);
});

app.get('/*', (request, response) => {
    response.send('<h1>Page not found</h1>');
});

app.use((err, request, response, next) => {
    // логирование ошибки, пока просто console.log
    console.log(err);
    response.status(500).send('Something broke!');
});

app.listen(port, (err) => {
    if (err) {
        return console.log('Error', err);
    }
    console.log(`server is listening on ${port}`);
})