var friends = require("../data/friends.js");

module.exports = function(app) {
	//API routes
	app.get("/api", function(req, res) {
		res.json(friends);
	});

	app.post("/api", function(req, res) {
		friends.push(req.body)
	});
};