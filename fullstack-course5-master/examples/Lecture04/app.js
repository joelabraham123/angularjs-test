(function () {  //IIFE
'use strict';

angular.module('myFirstApp', [])  /*second parameter is list of dependencies in form of array(since it is simple app,it is empty)...module function returns module instance*/

.controller('MyFirstController'/*name of viewmodel/controller*/, function () {    //define viewmodel of our view(which is index.html)

});

})();
