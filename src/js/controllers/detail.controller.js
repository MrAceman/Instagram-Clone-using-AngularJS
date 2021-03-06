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

    $scope.likePhoto = (photo) => {
      photo.likeCount ++;
       $http.put(SERVER.URL + $stateParams.id,photo).then((res) => {
       });
    }

// Functionality for editting photo description
      $scope.editorEnabled = false;

      $scope.enableDesEditor = function() {
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

      $scope.editorEnabled = false;
      $scope.editorNameEnabled = false;

      $scope.enableAllEditors = function() {
        $scope.enableDesEditor();
        $scope.enableNameEditor();
      }
}

DetailController.$inject = ['$scope', '$stateParams', '$http', '$state', 'SERVER'];
export {DetailController};
