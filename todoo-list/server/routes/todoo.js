const express = require('express');
const mongoose = require('mongoose');

const Task = require('../models/taks');

const router = express.Router();

router.get('/', (req, res, next) => {
	Task.find()
		.exec()
		.then(docs => {
			if (docs.length >= 0) {
				res.status(200).json(docs);
			} else {
				res.status(404).json({
					message: 'In database 0 task'
				});
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

router.post('/', (req, res, next) => {
	console.log(req.body);
	console.log(req.body.text);
	const task = new Task({
		_id: new mongoose.Types.ObjectId(),
		text: req.body.text,
	});
	task
		.save()
		.then(result => {
			console.log(result);
		})
		.catch(err => console.log(err));
	res.status(201).json({
		message: 'Handling POST request to /products',
		createdTask: task
	});
});

router.delete('/', (req, res, next) => {
	const id = req.body._id;
	console.log(req.body);
	Task.remove({ _id: id })
		.exec()
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

router.patch('/', (req, res, next) => {
	Task.where({ _id: req.body._id })
		.update({ text: req.body.text })
		.exec()
		.then(result => {
			console.log(result);
			res.status(200).json(result);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
})

module.exports = router;
