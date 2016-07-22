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
        console.log(res);
        $state.go('root.home');
        // $scope.photoArray = $scope.photoArray.filter( (photo) => {
        //   return photo._id !== id;
        // });
      });
    }

}

DetailController.$inject = ['$scope', '$stateParams', '$http', '$state', 'SERVER'];
export {DetailController};
