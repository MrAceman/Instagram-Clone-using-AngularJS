function DetailController($scope, $stateParams, $http, SERVER) {

    $scope.detailPhoto = {};

    init();

    function init() {

        $http.get(SERVER.URL + $stateParams.id).then((res) => {
            $scope.detailPhoto = res.data;
        });
    }
}

DetailController.$inject = ['$scope', '$stateParams', '$http', 'SERVER'];
export {DetailController};
