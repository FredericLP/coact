angular.module '%module%.landing'
.config ($stateProvider) ->
  $stateProvider
  .state 'landing',
    url: '/'
    templateUrl: 'landing/views/landing.html'
    parent: 'app'
  .state 'personnel',
    url: '/personnel'
    templateUrl: 'landing/views/personnel.html'
    parent: 'app'
