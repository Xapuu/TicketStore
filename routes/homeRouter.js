const app = require('express'),
	homeRouter = app.Router(),
	homeController = require('../controllers/HomeController')();

/**
 *
 * I think we should seperate the routing from the controllers
 * since it will look cleaner
 * Home Router "/"
 *
 */

var router = (function () {
	homeRouter.get('/', function (req, res) {
		homeController.getIndex(req, res);
	});

	homeRouter.get('/ajaxReq', function (req, res) {
		homeController.testAjaxReq(req, res);
	});

	homeRouter.post('/testForm', function (req, res) {
		homeController.testForm(req,res);
	});

	return homeRouter;
})();

module.exports = router;
