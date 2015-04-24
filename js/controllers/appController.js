var modules = angular.module('seed-app.appController', ['ngRoute']);

modules.controller('AppCtrl', ['$scope', function ($scope) {
    $scope.openModal = function() {
        $('#modal1').openModal();
    }
}]);
