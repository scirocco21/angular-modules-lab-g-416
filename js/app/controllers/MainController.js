function MainController($scope) {
  $scope.name = 'Seb';
}

angular
  .module('app')
  .controller('MainController', MainController);