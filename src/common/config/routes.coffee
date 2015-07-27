angular.module '%module%.common'
.config ($stateProvider) ->
  $stateProvider
  .state 'app',
    abstract: true
    template: "<div ui-view></div>"
