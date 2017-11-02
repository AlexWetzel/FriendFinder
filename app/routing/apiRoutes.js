var friends = require("../data/friends.js");

module.exports = function(app) {
	//API routes
	app.get("/api", function(req, res) {
		res.json(friends);
	});

	app.post("/api", function(req, res) {
		console.log(req.body)
		friends.push(req.body)
	});
};