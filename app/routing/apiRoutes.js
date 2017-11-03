var friends = require("../data/friends.js");

module.exports = function(app) {
	//API routes
	app.get("/api", function(req, res) {
		res.json(friends);
	});

	app.post("/api", function(req, res) {
		
		//Removes brackets from the object's array key
	    for (var key in req.body) {
	      if (/\[\]$/.test(key)) {
	        req.body[key.replace(/\[\]$/, '')] = req.body[key] || [];
	        delete req.body[key];
	      }
	    }


		// console.log(req.body)
		// console.log(req.body.scores)
		var userScores = req.body.scores
		var bestScore = 40;
		var match = 0;
		console.log(userScores);

		//loop through the friends list
		for (var i = 0; i < friends.length; i++) {
			var matchScore = 0;

			for (var j = 0; j < 10; j++) {
				var diff = parseInt(friends[i].scores[j]) - parseInt(userScores[j]);
				matchScore += Math.abs(diff);
				console.log(matchScore);
			}

			console.log(matchScore, bestScore);

			if (matchScore < bestScore) {
				bestScore = matchScore;
				match = i;
			}
		}
		//compare individual answer scores directly and get the difference for each
		//add each answer difference together to get a total score
		//store the first position index in a variable "match"
		//


		res.json(friends[match]);
		// friends.push(req.body)
	});
};