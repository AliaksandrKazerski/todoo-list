const Koa = require('koa');
const koaBody = require('koa-body');
const mongoose = require('mongoose');

const router = require('./routes/todoo-koa');

mongoose.connect('mongodb://localhost:27017/todoo', { useNewUrlParser: true })
.catch((err) => console.log(err));
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose connection open.');
});

db.on('error', (err) => console.log(err));

db.on('disconnected', () => {
    console.log('Mongoose connection disconnected.');
});

const app = new Koa();

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;