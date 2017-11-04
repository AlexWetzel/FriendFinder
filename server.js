//NPM package dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;
//Initialize body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//File depedencies
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);
//Server listener
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});