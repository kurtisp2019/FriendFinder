/**
 * 
 * 
 *      friends.js
 * 
 * 
 */

var Friend = function (_name, _photo, _scores) {

    this.name = _name;
    this.photo = _photo;
    this.scores = _scores;
}

// array for holding friends
var friends = [];

function createFriend(_name, _photo, _scores) {

    var newFriend = new Friend(_name, _photo, _scores);
    friends.push(newFriend);
}

function compareFriend(_indexOfFriend) {

    var bestMatchIndex = 0;
    var difference = 0;
    var prevBest = 41; // 5 -1 = 4, 4 * 10  = 40 ( largest possible difference between 2 people )
    for (var i = 0; i < friends.length; ++i) {
        for (var x = 0; x < friends[i].scores.length; ++x) {

            // add up the difference between scores
            difference += Math.abs(friends[_indexOfFriend].scores[x] - friends[i].scores[x]);
        }

        // if the prevBest is greater than the difference than the friend is a better match
        if (prevBest > difference) {
            
            // set the new best and store the index of the friend
            prevBest = difference;
            bestMatchIndex = i;
        }

    }

    return friends[bestMatchIndex];
  
}  

var testScores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
createFriend("testFriend1", "n/a", testScores);
createFriend("testFriend2", "n/a", testScores);
createFriend("testFriend3", "n/a", testScores);

