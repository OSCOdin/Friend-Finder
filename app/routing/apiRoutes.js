var friends  = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function(req, res){
        // console.log(req.body);
        let frienddata = req.body;
        let userScore = req.body.scores;
        let scoreDiffArray = [] ;
        friends.push(frienddata);
        function EvaluateFriend(tempscores, userScore){
            var totalDiff = 0;
            for(var i = 0; i < tempscores.length; i++){
                var differscr = Math.abs(tempscores[i] - userScore[i]);
                totalDiff = totalDiff + differscr;
            };
            console.log(totalDiff);
            scoreDiffArray.push(totalDiff);
        };
        for(var i = 0; i < friends.length - 1; i++){
            
            var tempscores = friends[i].scores;
            console.log(tempscores);
            EvaluateFriend(tempscores, userScore)
        };
        
        for(var i = 0; i < scoreDiffArray.length; i++){
            var lowest = 100;
            var bestMatch = 0;
            if(scoreDiffArray[i]<lowest){
                lowest = scoreDiffArray[i];
                bestMatch = i;
            };

        }
        console.log(bestMatch, friends[bestMatch]);
        res.send(friends[bestMatch]);
        // friends.forEach(function(index, userScore){
        //     var tempscores = friends[index].scores;
        //     EvaluateFriend(tempscores, userScore)
        // })
        
        // friends.forEach(function(friend, index){
        //     // console.log(friend.scores);
        //     for(var i = 0; i < friends[index].scores.length; i++){
        //         // let scoreDifference = friends[index].scores[index] - userScore[index];
        //         // scoreDiffArray.push(Math.abs(scoreDifference));
        //         // for(var i = 0; i < scores.length; i++){
                    
        //         // };
        //         console.log(friends[index].scores[index])
        //     }
        // });
        // console.log(scoreDiffArray)
        
    })
}