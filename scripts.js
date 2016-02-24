angular.module('ShelfNumbers', [])
  .controller('ShelfNumbersCtrl', function($scope, $timeout) {
    $timeout(function(){
      var i;

      $scope.tableCount = $scope.tableCount || 6;
      $scope.rowCount = $scope.rowCount || 3;
      $scope.colCount = $scope.colCount || 3;

      $scope.tables = [];
      $scope.rows = [];
      $scope.cols = [];
    
      $scope.lettersSource = $scope.lettersSource || 'ABCDEFGHIJKL';
      $scope.letters = $scope.lettersSource.split('');
      for (i = 0; i < $scope.tableCount; i++) {
        $scope.tables.push(i + 1);
      }
      for (i = 0; i < $scope.rowCount; i++) {
        $scope.rows.push(i + 1);
      }
      for (i = 0; i < $scope.colCount; i++) {
        $scope.cols.push(i + 1);
      }
    });
  });