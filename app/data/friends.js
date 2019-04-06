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

function createAndCompareFriend(_name, _photo, _scores) {

    // create the new profile and add it to the list
    var newFriend = new Friend(_name, _photo, _scores);
    friends.push(newFriend);

    //
    return compareFriend(friends.length-1);

}

function createFriend(_name, _photo, _scores) {

    // create the new profile and add it to the list
    var newFriend = new Friend(_name, _photo, _scores);
    friends.push(newFriend);

    //

}

function compareFriend(_indexOfFriend) {
    
    var bestMatchIndex = 0;
    var difference = 0;
    var prevBest = 41; // 5 -1 = 4, 4 * 10  = 40 ( largest possible difference between 2 people )
    for (var i = 0; i < friends.length-1; ++i) {
        
        for (var x = 0; x < friends[i].scores.length; ++x) {

            // add up the difference between scores
            difference += Math.abs(friends[_indexOfFriend].scores[x] - friends[i].scores[x]);
        }
        
            // if the prevBest is greater than the difference than the friend is a better match
            if (prevBest > difference) {
            
                // set the new best and store the index of the friend
                prevBest = difference;
                bestMatchIndex = i;
                //console.log(i);
            }
        difference = 0;
    }

    return friends[bestMatchIndex];
  
}  

var testScores = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1];
var testScores2 = [1, 1, 2, 3, 4, 5, 5, 5, 5, 5];
var testScores3 = [5, 1, 4, 3, 3, 5, 5, 2, 5, 3];
createFriend("Mr. Whiskers", "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", testScores);
createFriend("Blue", "https://i1.wp.com/www.boingboing.net/filesroot/141_velociraptor.jpg?resize=500%2C343", testScores2);
createFriend("Rocko", "https://vignette.wikia.nocookie.net/rockosmodernlife/images/5/5e/Rocko_Wallaby.png/revision/latest?cb=20130920192204", testScores3);

module.exports = {
    createAndCompareFriend: createAndCompareFriend,
    friends: friends
};
