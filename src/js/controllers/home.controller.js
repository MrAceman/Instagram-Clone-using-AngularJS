function HomeController ($scope, $http, SERVER){

init();

function init () {
    $http.get(SERVER.URL).then ((res) =>{
      $scope.photoArray = res.data;
    })
}

$scope.deletePhoto = (id) => {
  $http.delete(SERVER.URL + id).then((res) => {
    $scope.photoArray = $scope.photoArray.filter( (photo) => {
      return photo._id !== id;
    });
  });
}

 $scope.likePhoto = (photo) => {
   photo.likeCount ++;
  console.log(photo);
    $http.put(SERVER.URL + photo._id,photo).then((res) => {

    });
 }




}

HomeController.$inject = ['$scope', '$http', 'SERVER'];
export {HomeController};
