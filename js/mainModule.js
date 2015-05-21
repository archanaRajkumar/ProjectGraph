var mainModule = angular.module('mainModule',[]);
mainModule.controller('mainCtrl',function($scope){
 $scope.amIVisible=false;
 $scope.toggle=function(){
 console.log("hello");
 $scope.amIVisible=!$scope.amIVisible;	
 } 
 
  
});
