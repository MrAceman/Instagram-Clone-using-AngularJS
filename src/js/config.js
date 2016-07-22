function config ($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('root', {
    abstract: true,
    templateUrl: 'templates/layout.tpl.html'
  })
  //Name of state
    .state('root.home', {
      // URL of this state
      url: '/',
      // Template or Template URL to use for this state
      templateUrl: 'templates/home.tpl.html',
      // Angular Controller to use for this state
      controller: 'HomeController'
    })

    .state('root.addphoto', {
      url:'/addphoto',
      templateUrl: 'templates/addphoto.tpl.html',
      controller: 'AddPhotoController'
    })

    .state('root.editphoto', {
      url:'/editphoto',
      templateUrl: 'templates/editphoto.tpl.html'
    })

    .state('root.detail', {
      url: '/photo/:id',
      templateUrl: 'templates/detail.tpl.html',
      controller: 'DetailController'
    });


// If all routes return invalid then this is the final default
// Can be used for 404 error pages
$urlRouterProvider.otherwise('/');

}

// Providers can ONLY be injected into config files.
config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
