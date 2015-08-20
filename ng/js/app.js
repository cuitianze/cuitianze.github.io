angular.module('app', [])
    .run(function($rootScope) {
        $rootScope.name = "Angular君";
        $rootScope.title = "Angular大法好";
    });
function TimeController($scope) {
    $scope.clock = {
        now: new Date()
    };
    var updateClock = function() {
        $scope.clock.now = new Date();
    };
    setInterval(function() {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
}
angular.module('app').controller('TimeController', TimeController)

.controller('PersonController', function($scope) {
    $scope.person = {
        name: '崔哈哈'
    };
})

.controller('MyController', function($scope) {
    $scope.name = "CuiTianze";
});
