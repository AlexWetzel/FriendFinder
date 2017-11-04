var friends = require("../data/friends.js");
var reset = require("../data/default.js");

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

		var userScores = req.body.scores
		//bestScore defaults to a score above what is possible
		var bestScore = 41;
		//Match will be the index of the best match of the friends in the API
		//Defaults to -1
		var match = -1;
		//loop through the friends list
		for (var i = 0; i < friends.length; i++) {
			var matchScore = 0;
			//compare individual answer scores directly and get the difference for each
			for (var j = 0; j < 10; j++) {
				var diff = parseInt(friends[i].scores[j]) - parseInt(userScores[j]);
				//add each answer difference together to get a total score
				matchScore += Math.abs(diff);
			}
			//The best score will be the lowest of all the match scores
			if (matchScore < bestScore) {
				bestScore = matchScore;
				//Gets the index of the friend
				match = i;
			}
		}
		//Sends the matched friend's data to the web page
		res.json(friends[match]);
		//Adds the user's info to the friends API
		friends.push(req.body)
	});
	//Resets the API to the default state
	app.post("/api/clear", function() {	    
	    friends = reset;
	});
};