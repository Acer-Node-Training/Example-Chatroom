var express = require('express');
var router = express.Router();

var messages = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ChatRoom' });
});

router.get('/room', function(req, res, next) {

	if (!req.session.name) {
		res.redirect('/');
		return;
	}

	res.render('room', {
		title: 'ChatRoom',
		name: req.session.name,
		messages: messages
	});
});

router.post('/enter', function(req, res, next) {
	req.session.name = req.body.name;

	res.redirect('/room');
});

router.post('/say', function(req, res, next) {

	messages.push({
		name: req.session.name,
		msg: req.body.msg
	});

	res.redirect('/room');
});

module.exports = router;
