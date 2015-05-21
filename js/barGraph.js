var barchartModule = angular.module('barChartModule',[]);

barchartModule.directive('barChart', function() {

    return {

        // required to make it work as an element
        restrict: 'E',
        template: '<div></div>',
        replace: true,
        // observe and manipulate the DOM
        link: function($scope, element, attrs) {

            var data = $scope[attrs.data],
                xkey = $scope[attrs.xkey],
                ykeys= $scope[attrs.ykeys],
                labels= $scope[attrs.labels];

            Morris.Bar({
                    element: element,
                    data: data,
                    xkey: xkey,
                    ykeys: ykeys,
                    labels: labels
                });

        }

    };

});

barchartModule.controller('barController',['$scope',function($scope){
  
  $scope.xkey = 'range';
  
  $scope.ykeys = ['total_tasks',     'total_overdue'];
  
  $scope.labels = ['Total Tasks', 'Out of Budget Tasks'];
  
  //$scope.myModel =barService.query();
   $scope.myModel=[
    { range: 'January', total_tasks: 20, total_overdue: 5 },
    { range: 'January', total_tasks: 35, total_overdue: 8 },
    { range: 'January', total_tasks: 20, total_overdue: 1 },
    { range: 'January', total_tasks: 20, total_overdue: 6 }
  ];
}]);


/*barchartModule.service('barService',['$q','$http',function($q,$http){
         
            return{
                query:function(){
            var defer=$q.defer();
            $q.all([$http({
                url: "resource.json",
                method: "GET"            })
            ]).then(function (successResponse) {
                console.log(successResponse);
                var successMsg = successResponse[0].data;


                defer.resolve(successMsg);

            }, function (errorResponse) {

                defer.reject(errorResponse);
            });

            return defer.promise;

        }

 }
}]);*/