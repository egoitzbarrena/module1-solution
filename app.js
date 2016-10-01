(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
  $scope.message = "";
  $scope.lunchMenu = "";
  $scope.calculateLunch = function () {
    var lunchMenuValue = $scope.lunchMenu;
    var lunchMenuLength = calculateLunchMenuLength (lunchMenuValue);
    if (lunchMenuValue == "") {
      $scope.message = "Please enter data first";
      $scope.myStyle = {color : 'red' , 'border-color': "red"};
    } else if (lunchMenuLength <= 3) {
      $scope.message = "Enjoy!";
      $scope.myStyle = {color : 'blue' , 'border-color': "blue"};
    } else if (lunchMenuLength > 3) {
      $scope.message = "Too much!";
      $scope.myStyle = {color : 'blue' , 'border-color': "blue"};
    }
  };//.$scope.calculateLunch

  function calculateLunchMenuLength (string) {
    var array = string.split(",");
    for (var i=0; i<array.length;i++){
      if (array[i] == "" || array[i] == " "){
        array.splice(i, 1);
      }
    }
    return array.length;
  };//.function calculateLunchMenuLength

}//.function LunchCheckController
})();//(function () {
