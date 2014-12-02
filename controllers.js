app = angular.module('practice', []);

app.factory('Data', function() {
    return {
        message: "Hello"
    }
});

app.controller('firstCtrl', function($scope, Data) {
    $scope.data = Data;
});

app.controller('secondCtrl', function($scope, Data) {
    $scope.data = Data;
    $scope.backwardsMessage = function(message) {
        return message.split("").reverse().join("");
    }
});