const app = require('express'),
	userRouter = app.Router(),
	userController = require('../controllers/UserController');


var router = (function () {

	userRouter.post('/registerUser', function (req, res) {
		userController.registerUser(req, res);
	});

	return userRouter;

});

module.exports = router;
