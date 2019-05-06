function MainController($scope) {
  $scope.name = 'Seb';
}

angular
  .module('app') // fetch the module
  .controller('MainController', MainController); // 