angular.module('MyProfile', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'PagesCtrl'
    })
    .state('social', {
      url: '/social',
      templateUrl: '/social.html',
      controller: 'PagesCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '/contact.html',
      controller: 'PagesCtrl'
    })
    .state('projects', {
      url: '/projects',
      templateUrl: '/projects.html',
      controller: 'PagesCtrl'
    })
    .state('experience', {
      url: '/experience',
      templateUrl: '/experience.html',
      controller: 'PagesCtrl'
    })
    .state('portfolio', {
      url: '/portfolio',
      templateUrl: '/portfolio.html',
      controller: 'PagesCtrl'
    })
    .state('yearmap', {
      url: '/yearmap',
      templateUrl: '/yearmap.html',
      controller: 'PagesCtrl'
    })
    .state('resume', {
      url: '/resume',
      templateUrl: '/resume.html',
      controller: 'PagesCtrl'
    })
    .state('images', {
      url: '/images',
      templateUrl: '/images.html',
      controller: 'PagesCtrl'
    })
    .state('skills', {
      url: '/skills',
      templateUrl: '/skills.html',
      controller: 'PagesCtrl'
    })
    .state('passion', {
      url: '/passion',
      templateUrl: '/passion.html',
      controller: 'PagesCtrl'
    });

  $urlRouterProvider.otherwise('home');
}])
.controller('PagesCtrl', [
'$scope',
function($scope){
      $scope.test = 'Hello world!';
}]);
