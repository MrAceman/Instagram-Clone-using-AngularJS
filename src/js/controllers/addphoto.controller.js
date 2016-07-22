function AddPhotoController ($scope, $http, SERVER, $state){

$scope.addPhoto = (photo) => {
  photo.likeCount = 0;
  $http.post(SERVER.URL, photo).then( (res) => {
    $state.go('root.home');
  });
};
}

AddPhotoController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export {AddPhotoController};
