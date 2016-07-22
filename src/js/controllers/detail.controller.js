function DetailController($scope, $stateParams, $http, $state, SERVER) {

    $scope.detailPhoto = {};

    init();

    function init() {

        $http.get(SERVER.URL + $stateParams.id).then((res) => {
            $scope.detailPhoto = res.data;
        });
    }

    $scope.deletePhoto = (id) => {
      $http.delete(SERVER.URL + $stateParams.id).then((res) => {
        $state.go('root.home');
      });
    }

// Functionality for editting photo description
      $scope.editorEnabled = false;

      $scope.enableEditor = function() {
        $scope.editorEnabled = true;
        $scope.editableDescription = $scope.detailPhoto.description;
      };

      $scope.disableEditor = function() {
        $scope.editorEnabled = false;
      };

      $scope.save = function(photo) {
        $scope.detailPhoto.description = $scope.editableDescription;
        $scope.disableEditor();

        $http.put(SERVER.URL + $stateParams.id, photo).then((res) => {

        });
      };
// Functionality for editting photo title
      $scope.editorNameEnabled = false;

      $scope.enableNameEditor = function() {
        $scope.editorNameEnabled = true;
        $scope.editableName = $scope.detailPhoto.name;
      };

      $scope.disableNameEditor = function() {
        $scope.editorNameEnabled = false;
      };

      $scope.saveName = function(photo) {
        $scope.detailPhoto.name = $scope.editableName;
        $scope.disableNameEditor();

        $http.put(SERVER.URL + $stateParams.id, photo).then((res) => {

        });
      };
}

DetailController.$inject = ['$scope', '$stateParams', '$http', '$state', 'SERVER'];
export {DetailController};
