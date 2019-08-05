const app = require('./app-koa');

const port = 8080;

app.listen(port, () => {
    console.log('server run!!!');
});