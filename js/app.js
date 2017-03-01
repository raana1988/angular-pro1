var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.title = 'Angular Fruit calculate';
});

app.controller('innerCtrl', function($rootScope,$scope) {
  $scope.fruits = [
     {Name:"apple" , Unitcost:5},
     {Name:"orange" , Unitcost:3},
  ];
  $scope.blah=$scope.fruits[0];
  $scope.qunty = 1;

$scope.celprice=function(){
  console.log("celprice");
$rootScope.$emit('innerchange',{qnty:$scope.qunty,name:$scope.blah.Name,unitcost:$scope.blah.Unitcost});
}

$scope.$watch("qunty",function(newcalcute){
  $rootScope.$emit('innerchange',{qnty:$scope.qunty,name:$scope.blah.Name,unitcost:$scope.blah.Unitcost});
});

$scope.$watch("blah",function(newcalcute){
  $rootScope.$emit('innerchange',{qnty:$scope.qunty,name:$scope.blah.Name,unitcost:$scope.blah.Unitcost});
});

});
app.controller('outerCtrl', function($rootScope,$scope) {
  $rootScope.$on('innerchange',function(evt,params){
    $scope.price=params.qnty * params.unitcost ;
  });
});
