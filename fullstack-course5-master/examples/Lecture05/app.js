(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope/*special obj to share data between viewModel and view*/){
  $scope.name = "Yaakov"; //$ sign is used for anything that ng provides, so it is wise not to use it to declare something new
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
