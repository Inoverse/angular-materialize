var app = angular.module('seed-app', ['ngRoute', 'seed-app.appController']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/main', {
                controller: 'AppCtrl',
                templateUrl: 'views/main.html'
            })
            .otherwise({
                redirectTo: '/main'
            });
}]);
