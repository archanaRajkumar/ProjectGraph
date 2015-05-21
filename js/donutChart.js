var donutChartModule = angular.module('donutChartModule',[]);

donutChartModule.directive('donutChart', function() {

    return {

        // required to make it work as an element
        restrict: 'E',
        template: '<div></div>',
        replace: true,
        // observe and manipulate the DOM
        link: function($scope, element, attrs) {

            var data = $scope[attrs.data]
            Morris.Donut({
                    element: element,
                    data: data
                });

        }

    };

});

donutChartModule.controller('donutController',function($scope){
  
  
  $scope.myModel = [
    {label: "Download Sales", value: 12},
    {label: "In-Store Sales",value: 30},
    {label: "Mail-Order Sales", value: 20}
];
  
});