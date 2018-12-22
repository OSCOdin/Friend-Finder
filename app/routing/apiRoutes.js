var friends  = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function(req, res){
        console.log(req.body);
        let frienddata = req.body
        friends.push(frienddata);
        let userScore = req.body.scores;
        // FriendsData.FriendsData.forEach(function(scores){
        //     scores.forEach()
        // })
    })
}