/**
 * 
 * 
 *      server.js file
 * 
 * 
 */

var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app, path);

app.listen(PORT, function () {
    console.log("app is listening on port: " + PORT);
});

