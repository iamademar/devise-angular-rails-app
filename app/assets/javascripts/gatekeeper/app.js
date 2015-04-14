( function() {
  'use strict';

  angular.module('gatekeeper', [
    // Libraries
    'templates',
    'ngRoute' 
  ])
  .config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'gatekeeper/landing.html'
        });
    }
  ]);
})();