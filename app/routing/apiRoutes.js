/**
 * 
 * 
 *      apiRoutes.js
 * 
 * 
 */

var friends = require("../data/friends.js");

module.exports = function (_app) {

    // get all the friends
    _app.get("/api/friends", function (_req, _res) {
        // return false;
         return _res.json(friends.friends);
     });
     
    // add a friend to the friends list
     _app.post("/api/friends", function (_req, _res) {
         
         //
         var newFriend = _req.body;

         // TODO: instead of passing values and creating a new object just pass the object
         return _res.json( friends.createAndCompareFriend(newFriend.name, newFriend.photo, newFriend.scores));


         
     });

}


