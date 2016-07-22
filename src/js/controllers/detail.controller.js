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



//
//  $scope.enableEditor = (photo) => {
//   console.log('Hi there');
//
//     $scope.editorEnabled = true;
//     photo.editableTitle = photo.title;
//
//     $scope.disableEditor = function() {
//     $scope.editorEnabled = false;
//   };
//
//     $scope.save = function() {
//     photo.title = photo.editableTitle;
//     $scope.disableEditor();
//   };
// };
}

DetailController.$inject = ['$scope', '$stateParams', '$http', '$state', 'SERVER'];
export {DetailController};
