var friends = require("../data/friends.js");

module.exports = function(app) {
	//API routes
	app.get("/api", function(req, res) {
		res.json(friends);
	});

	app.post("/api", function(req, res) {
		
		// app.use(function(req, res, next){
		//   if (req.body) {
		    for (var key in req.body) {
		      if (/\[\]$/.test(key)) {
		        req.body[key.replace(/\[\]$/, '')] = req.body[key] || [];
		        delete req.body[key];
		      }
		    }
		//   }
		//   next();
		// });


		console.log(req.body)
		console.log(req.body.scores)
		// var userScore = req.body.score

		// console.log(userScore);

		//loop through the friends list
		// for (var i = 0; i < friends.length; i++) {
		// 	for (var j = 0; j < 10; j++) {
				
		// 	}
		// }
		//compare individual answer scores directly and get the difference for each
		//add each answer difference together to get a total score
		//store the first position index in a variable "match"
		//


		res.json(friends[0]);
		// friends.push(req.body)
	});
};