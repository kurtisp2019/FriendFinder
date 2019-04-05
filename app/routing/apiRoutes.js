/**
 * 
 * 
 *      apiRoutes.js
 * 
 * 
 */

var serverApp = require("../../server.js");
var Friends = require("../data/friends.js");

module.exports = function (_app) {
    _app.get("/api/friends", function (_req, _res) {
        // return false;
         return _res.json(Friends.FriendsList);
     });
     
     _app.post("/api/friends", function (_req, _res) {
         
     });
}


