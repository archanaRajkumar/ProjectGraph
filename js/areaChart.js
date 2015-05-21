var areaChartModule = angular.module('areaChartModule',[]);

areaChartModule.directive('areaChart', function(){
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

            Morris.Area({
                    element: element,
                    data: data,
                    xkey: xkey,
                    ykeys: ykeys,
                    labels: labels
                });

        }

    };
});

areaChartModule.controller('areaController',function($scope){
  
  $scope.xkey = 'a';
  
  $scope.ykeys = ['a',     'b'];
  
  $scope.labels = ['a', 'b'];
  
  $scope.myModel =[
      { y: '2014', a: 50, b: 90},
      { y: '2015', a: 65,  b: 75},
      { y: '2016', a: 50,  b: 50},
      { y: '2017', a: 75,  b: 60},
      { y: '2018', a: 80,  b: 65},
      { y: '2019', a: 90,  b: 70},
      { y: '2020', a: 100, b: 75},
      { y: '2021', a: 115, b: 75},
      { y: '2022', a: 120, b: 85},
      { y: '2023', a: 145, b: 85},
      { y: '2024', a: 160, b: 95}
    ];
  
});