'use strict';

twangularApp.controller('MainCtrl', function($scope, $http) {
    //Uses the url and query to load in an array of tweets
    var loadTweets = function() {
        $http.get($scope.url + $scope.query)
          .success(function(data, status) {
            //We only want to include new tweets so we'll check the ids
            var newTweets = [];
            for (var i = 0, len = data.length; i < len; i++) {
                if ($scope.tweetIds.indexOf(data[i].id) === -1) {
                    $scope.tweetIds.push(data[i].id);
                    newTweets.push(data[i]);
                }
            }
            $scope.tweets = newTweets.concat($scope.tweets);
          })
          .error(function(data, status) {
            $scope.data = data || "Request failed";
            $scope.status = status;        
          });
    };
    
    //Enter the source of your filtered stream here
    $scope.url = '';
    
    $scope.timer;
    $scope.search = function() {
        //Reset the following scope variables
        $scope.tweetIds = [];        
        $scope.tweets = [];
        clearInterval($scope.timer);
        
        //Pull in some tweets now and then every 30 seconds thereafter
        loadTweets();
        $scope.timer = setInterval(loadTweets, 30000);
    };
});

