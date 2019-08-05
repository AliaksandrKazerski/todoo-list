const Router = require('koa-router');
const mongoose = require('mongoose');

const Task = require('../models/taks');

const router = new Router();

router.get('/todoo', async(ctx) => {
    try {
        const getTask = () => {
            return new Promise(async(resolve, reject) => {
                try {
                    const tasks = await Task.find();
                    resolve({
                        tasks
                    }); 
                }
                catch(err) {
                    console.log('err');
                    reject(err);
                }
            });
        }
        const result = await getTask();
        ctx.body = result;
    } 
    catch (err) {
        console.log(err);
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
});

router.post('/', async(ctx) => {
    try {
        const addTask =  (req) => {
            return new Promise(async(resolve, reject) => {
                try {
                    const task = new Task({
                        _id: new mongoose.Types.ObjectId(),
                        text: req.text,
                    });
                    task.save();
                    resolve({
                        message: 'task add.'
                    });
                }
                catch (err) {
                    console.log('err');
                    reject(err);
                }
            });
        }
        const result = await addTask(ctx.request.body);
        ctx.body = result;
    }
    catch(err) {
        console.log(err);
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
});

router.del('/:id', async(ctx) => {
    try {
        const deleteTask =  (req) => {
            return new Promise(async(resolve, reject) => {
                try {
                    
                    resolve({
                        message: 'task deleted.'
                    });
                }
                catch (err) {
                    console.log('err');
                    reject(err);
                }
            });
        }
        console.log(ctx.request.body);
        const result = await deleteTask(ctx.request.body);
        ctx.body = result;
    }
    catch(err) {
        console.log(err);
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
});

module.exports = router;